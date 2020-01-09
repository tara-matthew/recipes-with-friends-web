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

            <template v-slot:item="props">
                <tr @click="goToRoute">
                    <td
                        :id="props.item.RecipeId"
                        class="text-start">
                        {{props.item.title}}
                    </td>
                </tr>
            </template>
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
    },

    methods: {
        goToRoute() {
            const recipeId = event.target.id
            this.$router.push({
                name:'viewRecipe',
                params: {
                    recipeId: recipeId
                }
            })
        }
    }
}
</script>

<style scoped>
</style>
