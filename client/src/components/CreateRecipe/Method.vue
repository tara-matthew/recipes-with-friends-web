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
                            class="input-area"
                            v-for="input in inputs"
                            :key = "input.id">
                            <vue-dropzone
                                ref="vueDropzone"
                                id="drop1"
                                :options="dropOptions"
                                :useCustomSlot=true>
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

export default {
    data: () => ({
        dropOptions: {
            method: "POST",
            url: "http://localhost:8081/upload",
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

    mounted() {
        EventBus.$on('sendRecipe', recipe => {
            this.recipe = recipe
        }),

        EventBus.$on('uploadedFile', file => {
            // Sets the filepath of the main photo for the recipe to match what has been received on the server
            this.recipe.information.mainPhoto = file.data
        })
    },


    methods: {
        addInput() {
            this.inputs.push({
                id: `method${++this.counter}`,
                label: `Step ${this.counter}`,
                value: ''
            })
        },

        emitChange() {
            EventBus.$emit('sendRecipe', this.recipe)
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

            // Regex to remove whitespace and split ingredients into an array
            this.recipe.ingredients = this.recipe.ingredients.split(/[ ,]+/)

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
