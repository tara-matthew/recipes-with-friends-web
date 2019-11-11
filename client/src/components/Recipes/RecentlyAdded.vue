<template>
    <panel
        title="Just Added"
        class="recently-added"
        panelColour="#099E7A">

        <v-data-table
            class="custom-data-table"
            :headers="headers"
            :items="recentlyAdded"
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
            recentlyAdded: [
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
