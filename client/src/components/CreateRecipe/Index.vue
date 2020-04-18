<template>
    <div>
        <page-header />

        <v-container fill-height fluid>
            <recipe-info />
            <recipe-time />
            <recipe-ingredients />
            <recipe-method />
        </v-container>
    </div>
</template>

<script>
import PageHeader from '@/components/Header'
import RecipeInfo from '@/components/CreateRecipe/Info'
import RecipeIngredients from '@/components/CreateRecipe/Ingredients'
import RecipeMethod from '@/components/CreateRecipe/Method'
import RecipeTime from '@/components/CreateRecipe/Time'

export default {
    components: {
        PageHeader,
        RecipeInfo,
        RecipeIngredients,
        RecipeMethod,
        RecipeTime
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    >>>.v-input__slot .v-label {
        color: #099E7A;
    }

    >>>.v-input__slot {
        margin-bottom: 63px;
    }
</style>
