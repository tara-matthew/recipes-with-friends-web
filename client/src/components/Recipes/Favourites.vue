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
    export default {
        data() {
            return {
                headers: [
                    {
                        text: 'Meal',
                        value: 'name'
                    }
                ],
                favourites: [
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

<style scoped>

</style>
