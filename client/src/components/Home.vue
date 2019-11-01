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
            <v-row class="half-viewport-height">
                <v-col
                    cols="12"
                    md="6"
                    height="100%"
                    class="mt-0">
                    <v-card
                        height="100%"
                        class="site-padding-left">

                        <v-toolbar
                            class="my-toolbar"
                            color="#099E7A">
                            <v-toolbar-title class="panel-title">Recently Viewed</v-toolbar-title>
                        </v-toolbar>

                        <v-data-table
                            class="custom-data-table"
                            :headers="headers"
                            :items="recentlyViewed"
                            hide-default-header
                            hide-default-footer>
                        </v-data-table>
                    </v-card>
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                    height="50%"
                    class="mt-0"
                    align-self="center">
                    <v-card
                        class="site-padding-right"
                        height="50%">
                        <v-toolbar
                            class="my-toolbar"
                            color="#036F55">
                            <v-toolbar-title class="panel-title">Search</v-toolbar-title>
                        </v-toolbar>
                        <v-text-field
                            class="px-8"
                            label="Search by title, ingredient, cuisine, mood, or Caroline"
                            v-model="search">
                        </v-text-field>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="half-viewport-height">
                <v-col
                    cols="12"
                    md="6"
                    class="mt-0"
                    height="100%">
                    <v-card
                        height="100%"

                        class="site-padding-left">
                        <v-toolbar
                            class="my-toolbar"
                            color="#11CA9D">
                            <v-toolbar-title class="panel-title">Just Added</v-toolbar-title>
                        </v-toolbar>

                        <v-data-table
                            class="custom-data-table"
                            :headers="headers"
                            :items="recentlyViewed"
                            hide-default-header
                            hide-default-footer>
                        </v-data-table>
                    </v-card>
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                    class="mt-0"
                    height="100%">
                    <v-card
                        height="100%"
                        class="site-padding-right">
                        <v-toolbar
                            class="my-toolbar"
                            color="#08AC84">
                            <v-toolbar-title class="panel-title">Favourites</v-toolbar-title>
                        </v-toolbar>

                        <v-data-table
                            class="custom-data-table"
                            :headers="headers"
                            :items="recentlyViewed"
                            hide-default-header
                            hide-default-footer>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {
                    text: 'Meal',
                    value: 'name'
                }
            ],
            recentlyViewed: [
                {
                    name: 'Sexy ramen'
                },
                {
                    name: "Caroline's butt"
                },
                {
                    name: 'Roasted vegetable cous cous'
                },
                {
                    name: 'Caroline'
                },
                {
                    name: "Caroline's face"
                }
            ]
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

    .site-padding-left {
        margin-left: 25px;
    }

    .site-padding-right {
        margin-right: 25px;
    }

    .panel-title {
        text-align: center;
        width: 100%;
        color: white;
        font-family: "Segoe UI";
        font-size: 24px;
    }

    .half-viewport-height {
        height: 38vh;
        margin-bottom: 6vh;
    }

    >>>.v-data-table td{
        font-size: 17px;
    }

    >>>.v-data-table table{
        height: 30vh;
    }

     >>>.v-data-table td{
        height: 20%;
    }

     >>>.v-data-table tr {
        height: 20%;
    }


    html {
        height: 100%;
    }

    body { min-height: 100%; }


</style>
