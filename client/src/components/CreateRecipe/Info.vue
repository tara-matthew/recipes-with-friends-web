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
                            placeholder="Chicken Ramen"
                            v-model="recipe.information.title"
                            v-on:change="emitChange()" />

                        <v-textarea
                            auto-grow
                            class="story"
                            placeholder="An old recipe from my mother"
                            label="What's the story?"
                            outlined
                            v-model="recipe.information.story"
                            v-on:change="emitChange()" />

                        <div class="danger-alert" v-if="error">
                            {{error}}
                        </div>


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
                            @vdropzone-sending="dropzoneSuccess">
                            <div class="dropzone-text-container">
                                <h3 class="green-colour">Drop some photos here</h3>
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
    import {EventBus} from '@/events/EventBus.js'

    export default {
        data: () => ({
            dropOptions: {
                method: "POST",
                url: "https://httpbin.org/post",
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
                ingredients: ''
            },
            ingredients: '',
            method: [],

            error: null
        }),

        components: {
            vueDropzone: vue2Dropzone
        },

        methods: {
            async dropzoneSuccess(file,xhr,formData) {
                console.log(file, xhr, formData)
                const uploadedFile = await AuthenticationService.upload(formData)
                EventBus.$emit('uploadedFile', uploadedFile)

            },

            // Allows recipe to be shared with sibling components
            emitChange() {
                EventBus.$emit('sendRecipe', this.recipe)
            }
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
