<template>
    <div class="wrapper">

        <v-toolbar color="#92D1C2" class="padded-toolbar">
            <v-toolbar-title>Recipes With Friends</v-toolbar-title>

            <v-toolbar-items class="left-aligned-toolbar">
                <v-btn text>Browse</v-btn>
                <v-btn text>Random Recipe</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items
                v-if="$store.state.isUserLoggedIn">
                <v-btn
                    text>
                    Sign Out
                </v-btn>

                <v-btn
                    text
                    class="font-weight-bold">
                    {{$store.state.user.firstName}}
                </v-btn>
            </v-toolbar-items>

            <v-toolbar-items
                v-else>

                <v-btn
                    text
                    :to="{
                    name: 'login'
                    }">
                    Login
                </v-btn>
                <v-btn
                    text
                    :to="{
                    name: 'register'
                    }">
                    Register
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-card :elevation="2" class="box recently-viewed">
            <v-toolbar
                class="my-toolbar"
                color="#099E7A">
                <v-toolbar-title class="panel-title">Recently Viewed</v-toolbar-title>
            </v-toolbar>

            <v-data-table
                class="custom-data-table"
                :headers="headers"
                :items="recentlyViewed"
                height="inherit"
                hide-default-header
                hide-default-footer>
            </v-data-table>
        </v-card>

        <v-card :elevation="2" class="box search">
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

        <v-card :elevation="2" class="box recently-added">
            <v-toolbar
                class="my-toolbar"
                color="#099E7A">
                <v-toolbar-title class="panel-title">Just Added</v-toolbar-title>
            </v-toolbar>

            <v-data-table
                class="custom-data-table"
                :headers="headers"
                :items="justAdded"
                height="inherit"
                hide-default-header
                hide-default-footer>
            </v-data-table>
        </v-card>

        <v-card :elevation="2" class="box favourites">
            <v-toolbar
                class="my-toolbar"
                color="#08AC84">
                <v-toolbar-title class="panel-title">Favourites</v-toolbar-title>
            </v-toolbar>

            <v-data-table
                height="inherit"
                class="custom-data-table"
                :headers="headers"
                :items="recentlyViewed"
                hide-default-header
                hide-default-footer>
            </v-data-table>
        </v-card>

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
            ],

            justAdded: []
        }
    },
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
        grid-column: 1/13;

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

    .wrapper {
        display: grid;
        height: 100vh;
        padding-bottom: 40px;
        grid-template-columns: repeat(12, [col-start] 1fr);
        grid-template-rows: 64px auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 40px;
    }

    .box {
        border-radius: 4px;
    }

     .recently-viewed {
        grid-column: 1/7;
        grid-row: 2/2;
        margin-left: 39px;
        /* border: 1px solid black; */

    }

    .search {
        grid-column: 7/13;
        grid-row: 2/2;
        margin-right: 39px;
        margin-top: auto;
        margin-bottom: auto;

    }

    .recently-added {
        grid-column: 1/7;
        grid-row: 3/3;
        margin-left: 39px;

    }

    .favourites {
        grid-column: 7/13;
        grid-row: 3/3;
        margin-right: 39px;

    }

    .half-viewport-height {
        height: 41vh;
    }

    .half-viewport-height.first {
        margin-bottom: 24px;
    }

    >>>.v-data-table td{
       height: 20%;
   }

    >>>.v-data-table tr {
       height: 20%;
   }

    >>>.v-data-table table{
    height: 100%;
    }

    >>>.theme--light.v-data-table {
        height: calc(100% - 64px);
    }

    >>>.v-data-table--fixed-height .v-data-table__wrapper {
        height: 100% !important;
    }

    .bottom-column {
        margin-bottom: 12px;
    }

    /* @media screen and (min-height: 800px) {
        >>>.v-data-table table{
        height: 35vh;
        }

        .half-viewport-height.first {
            margin-bottom: 50px;
        }
    } */



</style>
