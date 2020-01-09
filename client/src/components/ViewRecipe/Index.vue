<template>
    <div>
        <page-header />
        <v-container fill-height fluid>
            <recipe-details :recipe="recipe" />
            <v-row>
                <recipe-story :recipe="recipe" />
                <recipe-tips :recipe="recipe" />
            </v-row>
            <v-row>
                <recipe-ingredients v-if="recipe" :recipe="recipe"></recipe-ingredients>
                <recipe-method :recipe="recipe" />
            </v-row>
        </v-container>
    </div>

</template>

<script>
import PageHeader from '@/components/Header'
import RecipeDetails from './Details'
import RecipeStory from './Story'
import RecipeTips from './Tips'
import RecipeIngredients from './Ingredients'
import RecipeMethod from './Method'
import RecipeService from '@/services/RecipeService'
import RecipeHistoryService from '@/services/RecipeHistoryService'

export default {
    data() {
        return {
            recipe: {}
        }
    },

    async mounted() {
        //Scroll to top of page
        window.scrollTo(0,0);

        const recipeId = this.$store.state.route.params.recipeId
        this.recipe = (await RecipeService.show(recipeId)).data

        // Convert the ingredients to an array
        this.recipe.ingredients = this.convertToArray(this.recipe.ingredients)

        // add history
        RecipeHistoryService.post({
            recipeId: recipeId
        })
    },

    methods: {
        convertToArray(string) {
            return string.split(', ')
        }
    },

    components: {
        PageHeader,
        RecipeDetails,
        RecipeStory,
        RecipeTips,
        RecipeIngredients,
        RecipeMethod
    },


}

</script>

<style scoped>

</style>
