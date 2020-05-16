<template>
    <v-row>
        <v-col
            cols="12"
            class="custom-padding">
            <v-card class="first-card">
                <v-row>
                    <v-col
                        class="px-12 pt-12"
                        cols="6"
                        md="6">
                        <div
                            class="input-area">
                            <v-textarea
                                outlined
                                rows="6"
                                auto-grow
                                v-for="(input, index) in inputs"
                                :label ="input.label"
                                :key = "input.id"
                                v-on:change="emitChange()"
                                v-model="recipe.steps[index].title"
                                placeholder="Crush garlic">
                            </v-textarea>

                        </div>
                        <v-card-actions class="justify-center">
                            <v-btn
                                color="#099E7A"
                                class="mb-3 white--text"
                                @click="addInput">
                                Add
                            </v-btn>
                        </v-card-actions>

                    </v-col>
                    <v-col
                        class="center-aligned px-12"
                        md="6"
                        cols="6"
                        >
                        <div
                            class="input-area">
                            <vue-dropzone
                                v-for="input in inputs"
                                :key = "input.id"
                                ref="vueDropzone"
                                :id="input.id"
                                :options="dropOptions"
                                :useCustomSlot=true
                                @vdropzone-sending="dropzoneSuccess">
                                <div class="dropzone-text-container">
                                    <h3 class="green-colour">Drop photos of this step here</h3>
                                    <div>...or click to upload from your computer</div>
                                </div>
                            </vue-dropzone>
                        </div>

                        <v-card-actions class="justify-center">
                            <v-btn
                                color="#099E7A"
                                class="mb-3 white--text"
                                @click="saveRecipe">
                                Save
                            </v-btn>
                        </v-card-actions>


                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import {EventBus} from '@/events/EventBus.js'
import RecipeService from '@/services/RecipeService'
import AuthenticationService from '@/services/AuthenticationService'

export default {
    data: () => ({
        dropOptions: {
            method: "POST",
            url: "https://httpbin.org/post",
            thumbnailWidth: 90, // px
            thumbnailHeight: 90,
            header: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-File-Name, X-File-Size, X-File-Type',
               'Content-Type': 'application/x-www-form-urlencoded'
           },
       },
       recipe: {
           information: {
               title: '',
               story: '',
               mainPhoto: ''
           },
           ingredients: '',
           splitIngredients: [],
           steps: [{
               'title': '',
               'photo': ''
           }],
       },
       counter: 1,
        inputs: [{
            id: 'method1',
            label: 'How do you make it?',
            value: '',
        }],
    }),

    props: [
        'acceptedMeasurements'
    ],

    mounted() {
        EventBus.$on('sendRecipe', recipe => {
            this.recipe = recipe
        }),

        EventBus.$on('uploadedFile', file => {
            // Sets the filepath of the main photo for the recipe to match what has been received on the server
            this.recipe.information.mainPhoto = file.data
        })

        EventBus.$on('stepPhoto', file => {
            // Sets the filepath of the photo for the correct index of the step to match what has been received on the server
            this.recipe.steps[file.stepNumber].photo = file.data
        })
    },


    methods: {
        async dropzoneSuccess(file,xhr,formData) {
            const clickedStep = parseInt((file.previewElement.offsetParent.id).match(/\d+/)[0])-1
            const stepPhoto = await AuthenticationService.upload(formData)
            stepPhoto['stepNumber'] = clickedStep
            EventBus.$emit('stepPhoto', stepPhoto)
        },

        addInput() {
            // Push a new index to this.recipe.steps
            this.recipe.steps.push({
                'title': '',
                'photo': ''
            }),

            this.inputs.push({
                id: `method${++this.counter}`,
                label: `Step ${this.counter}`,
                value: ''
            })
        },

        emitChange() {
            EventBus.$emit('sendRecipe', this.recipe)
        },

        getFirstWord(ingredients) {
            ingredients = ingredients.split(" ");
            // console.log(ingredients);
            return ingredients[0];
        },

        returnRestOfString(ingredients) {
            ingredients = ingredients.split(" ");
            let remainingIngredients = [];
            //TODO start at 0 and use modulus here or slice the array
            for (var i = 1; i < ingredients.length; i++) {
                remainingIngredients[i-1] = ingredients[i]
            }
            // console.log(remainingIngredients);
            return remainingIngredients;
        },

        // Recursion!
        extractIngredient(restOfString, acceptedMeasurements) {
            for (var property in acceptedMeasurements) {
                if (acceptedMeasurements[property].length < 1) {
                    return restOfString;
                } else if (acceptedMeasurements[property][0] == restOfString[0]) {
                    return this.extractIngredient(
                        restOfString.slice(1),
                        {'0': acceptedMeasurements[property].slice(1)}
                    );
                }
            }

            return false;
        },

        isNumeric(obj) {
            return !isNaN(parseFloat(obj)) && isFinite(obj)
        },

        async saveRecipe() {
            this.error = null

            // Check that a title has been entered
            const hasTitle = (Object
                .values(this.recipe)[0]['title'].length) > 0

            if (!hasTitle) {
                this.error = 'Your recipe needs a title'
                return
            }

            //TODO move this outside of the saveRecipe function? So all this evaluates and it's checked whether it has evaluated successfully before trying to save

            let firstWord = [];
            let restOfString = [];
            let measurement = [];
            let extractedIngredient = [];
            let stringAfterMeasurement = [];

            let acceptedMeasurements = this.acceptedMeasurements

            //TODO make this work if there is more than one space or a space at the end

            //TODO Also make this code cleaner
            // Regex to remove whitespace and split ingredients into an array
            this.recipe.ingredients = this.recipe.ingredients.split(', ');
            for (var i = 0; i < this.recipe.ingredients.length; i ++) {
                firstWord[i] = this.getFirstWord(this.recipe.ingredients[i]);
                if (this.isNumeric(firstWord[i])) {
                    console.log('First word is a number!');
                    restOfString[i] = this.returnRestOfString(this.recipe.ingredients[i]);
                    extractedIngredient[i] = this.extractIngredient(restOfString[i], acceptedMeasurements);
                    if (extractedIngredient[i]) {
                        stringAfterMeasurement[i] = (extractedIngredient[i].length >= 1 ? extractedIngredient[i] : 'Where is the ingredient?');
                        measurement[i] = this.recipe.ingredients[i].split(' ').slice(1, -extractedIngredient[i].length).join(' ')
                    } else {
                        stringAfterMeasurement[i] = this.recipe.ingredients[i].split(' ').slice(1);
                    }
                } else {
                    stringAfterMeasurement[i] = this.recipe.ingredients[i].split(' ').slice(1);
                }

                this.recipe.splitIngredients.push({
                    'amount': '',
                    'measurement': '',
                    'item': ''
                })
                this.recipe.splitIngredients[i].amount = firstWord[i]

                if (measurement[i]) {
                    this.recipe.splitIngredients[i].measurement = measurement[i]
                } else {
                    this.recipe.splitIngredients[i].measurement = 'no measurement'
                }

                this.recipe.splitIngredients[i].item = stringAfterMeasurement[i].join(' ')
            }

            try {
                await RecipeService.post(this.recipe)
                this.$router.push({
                    name: 'recipes'
                })
            } catch(error) {
                console.log(error)
            }
        },

    },
    components: {
        vueDropzone: vue2Dropzone
    },
}
</script>

<style scoped>
    .custom-padding {
        padding-left: 39px;
        padding-right: 39px;
    }

    .first-card {
        background: #F7F7F7;
        margin-bottom: 20px;
    }

    .dropzone {
        min-height: 160px;
        max-height: 160px;
        overflow: auto;
        background: #F7F7F7;
        position: relative;
        margin-top: 35px;
        margin-bottom: 81px;
    }


</style>
