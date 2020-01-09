<template>
    <panel
        title="Favourites"
        class="favourites"
        panelColour="#08AC84">

        <v-data-table
            class="custom-data-table"
            :headers="headers"
            :items="favourites"
            height="inherit"
            hide-default-header
            hide-default-footer>
        </v-data-table>

    </panel>
</template>

<script>
import BookmarkService from '@/services/BookmarkService'

export default {
    data() {
        return {
            headers: [
                {
                    text: 'Meal',
                    value: 'title'
                }
            ],
            favourites: [],
        }
    },

    async mounted() {
        this.favourites = (await BookmarkService.index()).data
    }
    }
</script>

<style scoped>

</style>
