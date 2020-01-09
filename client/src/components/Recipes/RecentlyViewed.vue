<template>
    <panel
        title="Recently Viewed"
        class="recently-viewed"
        panelColour="#099E7A">

        <v-data-table
            class="custom-data-table"
            :headers="headers"
            :items="recentlyViewed"
            height="inherit"
            hide-default-header
            hide-default-footer>

        </v-data-table>

    </panel>
</template>

<script>
import RecipeHistoryService from '@/services/RecipeHistoryService'

export default {
    data() {
        return {
            headers: [
                {
                    text: 'Meal',
                    value: 'title'
                }
            ],
            recentlyViewed: [],
        }
    },

    async mounted() {
        this.recentlyViewed = (await RecipeHistoryService.index()).data
    }
}
</script>

<style scoped>
</style>
