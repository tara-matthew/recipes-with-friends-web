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
                        name: 'Chicken ramen'
                    },
                    {
                        name: "Tarka dall"
                    },
                    {
                        name: 'Roasted vegetable cous cous'
                    },
                    {
                        name: 'Aubergine parmigiana'
                    },
                    {
                        name: "Lamb koftas"
                    }
                ],

                justAdded: []
            }
        },
    }
</script>

<style scoped>
</style>
