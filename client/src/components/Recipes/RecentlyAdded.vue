<template>
    <panel
        title="Just Added"
        class="recently-added"
        panelColour="#099E7A">

        <v-data-table
            class="custom-data-table"
            :items-per-page="5"
            :headers="headers"
            :items="recentlyAdded"
            height="inherit"
            hide-default-header
            hide-default-footer>

            <template v-slot:item="props">
                <tr @click="goToRoute">
                    <td
                        :id="props.item.id"
                        class="text-start">
                        {{props.item.title}}
                    </td>
                </tr>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import RecipeService from '@/services/RecipeService'
export default {
    data() {
        return {
            headers: [
                {
                    text: 'Meal',
                    value: 'title'
                }
            ],
            recentlyAdded: []
        }
    },

    async mounted() {
        this.recentlyAdded = (await RecipeService.index()).data
    }
}
</script>

<style scoped>

</style>
