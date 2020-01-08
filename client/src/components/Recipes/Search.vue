<template>
    <panel
        title="Search"
        class="search"
        panelColour="#036F55">

        <v-text-field
            class="px-8"
            label="Search by title, ingredient, cuisine, or mood"
            v-model="search"
            v-on:keyup.enter="searchRecipe">
        </v-text-field>

    </panel>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    watch: {
        search() {
            const route = {
                name: 'recipes'
            }
            if (this.search !== '') {
                route.query = {
                    search: this.search
                }
            }
            // Dynamically change the route depending on what has been typed in
            this.$router.push(route)
            // console.log(value)
        },

        // add a watcher to the route itself, dynamically change the text in search box depending on the route
        '$route.query.search': {
            immediate: true,
            handler(value) {
                this.search = value
            }
        }
    },
    methods: {
        searchRecipe() {
            const route = {
                name: 'browse'
            }
            if (this.search !== '') {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        }
    }
}

</script>

<style scoped>

</style>
