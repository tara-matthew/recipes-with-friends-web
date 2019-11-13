<template>
    <div class="wrapper">
        <page-header />
        <recently-viewed />
        <search />
        <recently-added />
        <favourites />

    </div>
</template>

<script>
import PageHeader from '@/components/Header'
import RecentlyAdded from './RecentlyAdded'
import RecentlyViewed from './RecentlyViewed'
import Favourites from './Favourites'
import Search from './Search'

export default {
    components: {
        PageHeader,
        RecentlyAdded,
        RecentlyViewed,
        Favourites,
        Search
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
