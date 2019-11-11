<template>
    <div class="wrapper">
        <v-toolbar color="#92D1C2" class="padded-toolbar">
            <v-toolbar-title>Recipes With Friends</v-toolbar-title>

            <v-toolbar-items class="left-aligned-toolbar">
                <v-btn text>Browse</v-btn>
                <v-btn text>Random Recipe</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>
        </v-toolbar>

        <recently-viewed />
        <search />
        <recently-added />
        <favourites />

    </div>
</template>

<script>
import RecentlyAdded from './RecentlyAdded'
import RecentlyViewed from './RecentlyViewed'
import Favourites from './Favourites'
import Search from './Search'

export default {
    components: {
        RecentlyAdded,
        RecentlyViewed,
        Favourites,
        Search
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

</style>
