<template>
    <div>
        <page-header />
        <v-container fill-height fluid>
            <recipe-details :recipe="recipe" />
            <v-row>
                <recipe-story v-if="recipe" :recipe="recipe" />
                <recipe-tips v-if="recipe" :recipe="recipe" />
            </v-row>
            <v-row>
                <recipe-ingredients v-if="recipe" :recipe="recipe"></recipe-ingredients>
                <recipe-method v-if="recipe" :recipe="recipe" />
            </v-row>
        </v-container>
    </div>

</template>

<script>
import {mapState} from 'vuex'
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

    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user',
            'route'
        ])
    },

    async mounted() {
        //Scroll to top of page
        window.scrollTo(0,0);

        const recipeId = this.route.params.recipeId

        this.recipe = (await RecipeService.show(recipeId)).data

        // add history if a user is logged in
        if (this.isUserLoggedIn) {
            RecipeHistoryService.post({
                recipeId: recipeId,
                userId: this.user.id
            })
        }
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
