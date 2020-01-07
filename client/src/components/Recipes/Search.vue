<template>
    <panel
        title="Search"
        class="search"
        panelColour="#036F55">

        <v-text-field
            class="px-8"
            label="Search by title, ingredient, cuisine, or mood"
            v-model="search">
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
        search(value) {
            const route = {
                name: 'recipes'
            }
            if (this.search !== '') {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
            console.log(value)
        }
    }
}

</script>

<style scoped>

</style>
