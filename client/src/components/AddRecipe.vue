<template>
    <div>
        <v-toolbar color="#92D1C2" class="padded-toolbar">
            <v-toolbar-title>Recipes With Friends</v-toolbar-title>

            <v-toolbar-items class="left-aligned-toolbar">
                <v-btn text>Browse</v-btn>
                <v-btn text>Random Recipe</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn text>Sign Out</v-btn>
                <v-btn text class="font-weight-bold">Tara</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-container fill-height fluid>
            <v-row>
                <v-col
                    cols="10"
                    offset-md="1">
                    <v-card class="first-card">
                        <h1 class="page-title">New Recipe</h1>
                        <v-row>
                            <v-col
                                cols="6"
                                md="6">

                                <v-text-field
                                    outlined
                                    label="What did you make?"
                                    placeholder="Sexy Ramen" />

                                <v-textarea
                                    auto-grow
                                    class="story"
                                    placeholder="It was very sexy"
                                    label="What's the story?"
                                    outlined />
                            </v-col>

                            <v-col
                                md="6"
                                cols="6">
                                <vue-dropzone ref="vueDropzone" id="drop1" :options="dropOptions" @vdropzone-file-added="dropzoneChangeUrl"></vue-dropzone>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col
                    cols="10"
                    offset-md="1">
                    <v-card class="first-card">
                        <v-text-field
                            outlined
                            label="What did you make?"
                            placeholder="Sexy Ramen" />
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
        }
    }),
    components: {
        vueDropzone: vue2Dropzone
    },
    methods: {
        async dropzoneChangeUrl(file) {
            await AuthenticationService.upload(file)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .left-aligned-toolbar {
    margin-left: 100px;
    }

    .padded-toolbar {
    padding-left:25px;
    padding-right:25px;
    }

    .page-title {
        text-align: center;
        margin-bottom: 25px;
        color: #099E7A;
        font-family: "Segoe UI";
    }

    >>>.v-input__slot .v-label {
        color: #099E7A;
    }

    >>>.v-input__slot {
        margin-bottom: 63px;
    }

    .first-card {
        padding-left: 45px;
        padding-right: 45px;
        padding-top: 25px;
        background: #F7F7F7;
        margin-bottom: 20px;
    }

    .left-aligned-card {
        width: 50%;
        display: inline-block;
    }

    /* .story >>>.v-input__slot .v-label{
        color: black;
    } */

</style>
