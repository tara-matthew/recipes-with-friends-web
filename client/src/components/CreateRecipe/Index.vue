<template>
    <div>
        <page-header />

        <v-container fill-height fluid>
            <recipe-info v-if="acceptedMeasurements" :acceptedMeasurements="acceptedMeasurements" />
            <recipe-time v-if="acceptedMeasurements" :acceptedMeasurements="acceptedMeasurements" />
            <recipe-ingredients v-if="acceptedMeasurements" :acceptedMeasurements="acceptedMeasurements" />
            <recipe-method v-if="acceptedMeasurements" :acceptedMeasurements="acceptedMeasurements" />
        </v-container>
    </div>
</template>

<script>
import PageHeader from '@/components/Header'
import RecipeInfo from '@/components/CreateRecipe/Info'
import RecipeIngredients from '@/components/CreateRecipe/Ingredients'
import RecipeMethod from '@/components/CreateRecipe/Method'
import RecipeTime from '@/components/CreateRecipe/Time'
import MeasurementService from '@/services/MeasurementService'

export default {
    data() {
        return {
            acceptedMeasurements: []
        }
    },
    components: {
        PageHeader,
        RecipeInfo,
        RecipeIngredients,
        RecipeMethod,
        RecipeTime
    },

    async mounted() {
        this.acceptedMeasurements = (await MeasurementService.index()).data
    }

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
