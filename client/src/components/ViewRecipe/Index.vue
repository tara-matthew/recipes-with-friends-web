<template>
    <div>
        <page-header />
        <v-container fill-height fluid>
            <recipe-details />
            <v-row>
                <recipe-story />
                <recipe-tips />
            </v-row>
            <v-row>
                <recipe-ingredients />
                <recipe-method />
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


export default {
    components: {
        PageHeader,
        RecipeDetails,
        RecipeStory,
        RecipeTips,
        RecipeIngredients,
        RecipeMethod
    }
}

</script>

<style scoped>

</style>
