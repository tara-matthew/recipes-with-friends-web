<template>
    <v-row>
        <v-col
            cols="12"
            class="custom-padding pt-7">
            <v-card class="first-card">

                <v-toolbar
                    class="my-toolbar"
                    color="#099E7A">
                    <v-toolbar-title class="panel-title">New Recipe</v-toolbar-title>
                </v-toolbar>
                <v-row>
                    <v-col
                        class="px-12 pt-12"
                        cols="5"
                        md="5">

                        <v-text-field
                            outlined
                            label="What did you make?"
                            placeholder="Sexy Ramen"
                            v-model="recipe.title" />

                        <v-textarea
                            auto-grow
                            class="story"
                            placeholder="It was very sexy"
                            label="What's the story?"
                            outlined
                            v-model="recipe.story" />

                        <div class="danger-alert" v-if="error">
                            {{error}}
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

                    <v-col
                        class="center-aligned px-12 pt-12"
                        md="7"
                        cols="7">
                        <vue-dropzone
                            ref="vueDropzone"
                            id="drop1"
                            :options="dropOptions"
                            :useCustomSlot=true
                            @vdropzone-file-added="dropzoneChangeUrl">
                            <div class="dropzone-text-container">
                                <h3 class="green-colour">Send your favourite noodz here</h3>
                                <div>...or click to upload from your computer</div>
                            </div>
                        </vue-dropzone>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>

</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import RecipeService from '@/services/RecipeService'

    export default {
        data: () => ({
            dropOptions: {
                method: "POST",
                url: "http://localhost:8081/upload",
                header: {
                   'Access-Control-Allow-Origin': '*',
                   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-File-Name, X-File-Size, X-File-Type',
                   'Content-Type': 'application/x-www-form-urlencoded'
               },
           },
            recipe: {
                title: '',
                story: '',
                ingredients: ''
            },
            error: null
        }),

        components: {
            vueDropzone: vue2Dropzone
        },

        methods: {
            async dropzoneChangeUrl(file) {
                await AuthenticationService.upload(file)
            },
            async saveRecipe() {
                this.error = null
                const hasTitle = (Object
                    .values(this.recipe)[0].length) > 0

                if (!hasTitle) {
                    this.error = 'Your recipe needs a title'
                    return
                }
                this.recipe.ingredients = this.recipe.ingredients.replace(/\s{2,}/g,' ');

                console.log(this.recipe.ingredients)

                try {
                    await RecipeService.post(this.recipe)
                    this.$router.push({
                        name: 'recipes'
                    })
                } catch(error) {
                    console.log(error)
                }
            },
        }
    }
</script>

<style scoped>
    .panel-title {
        text-align: center;
        width: 100%;
        color: white;
        font-family: "Segoe UI";
        font-size: 24px;
    }

    .custom-padding {
        padding-left: 39px;
        padding-right: 39px;
    }

    .first-card {
        background: #F7F7F7;
        margin-bottom: 20px;
    }

    .green-colour {
        color: #099E7A;
    }

    .dropzone {
        min-height: 276px;
        max-height: 276px;
        overflow: auto;
        background: #F7F7F7;
        position: relative;
    }

    .dropzone-text-container {
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
    }


    .story>>>.v-input__slot {
        margin-bottom: 21px;
    }
</style>
