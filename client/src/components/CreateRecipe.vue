<template>
    <div>
        <page-header />

        <v-container fill-height fluid>
            <v-row>
                <v-col
                    cols="10"
                    offset-md="1">
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

                <v-col
                    cols="10"
                    offset-md="1">
                    <v-card class="first-card">
                        <v-col
                            class="px-12"
                            offset-md="2"
                            cols="8"
                            md="8">

                        <v-textarea
                            v-model="recipe.ingredients"
                            outlined
                            label="What are the ingredients?"
                            placeholder="noodles">
                        </v-textarea>

                        </v-col>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>

    </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import AuthenticationService from '@/services/AuthenticationService'
import RecipeService from '@/services/RecipeService'
import PageHeader from '@/components/Header'

// import {mapState} from 'vuex'


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
        vueDropzone: vue2Dropzone,
        PageHeader
    },
    // computed: {
    //     ...mapState([
    //     'isUserLoggedIn',
    //     'user'
    // ]),

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
            this.recipe.ingredients = this.recipe.ingredients.replace(/\s*,\s*/g, ",")

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

        convertToArray: function(string) {
            return string.split(',')
                .map((ingredient) => {
                    return ingredient.trim()
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .page-title {
        text-align: center;
        margin-bottom: 25px;
        color: #099E7A;
        font-family: "Segoe UI";
    }

    .panel-title {
        text-align: center;
        width: 100%;
        color: white;
        font-family: "Segoe UI";
        font-size: 24px;
    }

    >>>.v-input__slot .v-label {
        color: #099E7A;
    }

    >>>.v-input__slot {
        margin-bottom: 63px;
    }

    .story>>>.v-input__slot {
        margin-bottom: 21px;
    }

    .first-card {
        /* padding-left: 45px;
        padding-right: 45px;
        padding-top: 25px; */
        background: #F7F7F7;
        margin-bottom: 20px;
    }

    .left-aligned-card {
        width: 50%;
        display: inline-block;
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

    .center-aligned {
        /* align-self: center; */
    }

    .dropzone-text-container {
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
    }

    /* .story >>>.v-input__slot .v-label{
        color: black;
    } */

</style>
