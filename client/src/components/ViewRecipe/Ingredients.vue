<template>
    <v-col
        cols="2"
        class="custom-padding pt-7">
        <panel
            title="Ingredients"
            panelColour="#08AC84"
            id="ingredients-panel"
            class="grey-background"
            ref="ingredientsPanel">
            <v-row>
                <v-col
                    cols="12"
                    class="px-12 py-12">
                    <div class="inner-container">

                        <p v-for="ingredient in ingredients" v-bind:key="ingredient.title">{{ingredient.amount}}{{ingredient.measurement}} {{ingredient.title}}</p>

                    </div>
                </v-col>
            </v-row>
        </panel>
    </v-col>

</template>

<script>
import {EventBus} from '@/events/EventBus.js'

export default {

    data() {
        return {
            ingredients: []
        }
    },

    props: [
        'recipe'
    ],

    updated() {

        // Ensure that the ingredients panel and methods panel are the same height
        this.$nextTick(function() {
            EventBus.$emit('height', document.getElementById('ingredients-panel').offsetHeight)
        })

    },

    watch: {
        async recipe() {
            // console.log(this.recipe)
            for (const property in this.recipe) {
                // console.log(this.recipe[property])
                if (typeof(this.recipe[property]) == 'object') {
                    this.ingredients.push({
                        'title': this.recipe[property].title,
                        'amount': this.recipe[property].amount,
                        'measurement': (this.recipe[property].Measurement != null ? this.recipe[property].Measurement.title : '')
                    })
                }
            }


            console.log(this.ingredients)
            // this.recipe.forEach(function(ingredient){
            //     console.log(ingredient)
            // })
            // console.log(this.recipe.length)
            // this.recipe.map(
            //     ingredient => this.ingredients.push({
            //         'title': ingredient.title
            //     })
            // )
            // console.log(this.ingredients)
            // this.recipe.Ingredients.map(
            //     ingredient => this.ingredients.push({
            //         'title': ingredient.title,
            //         'measurement': ingredient.RecipeIngredients[0]
            //     }),
            //
            // )

            // console.log(this.recipe)

        }

    }
}

</script>

<style scoped>
.custom-padding {
    padding-left: 39px;
    padding-right: 39px;
}

.inner-container {
    min-height: 300px;
    max-height: 533px;
    text-align: center;
    overflow: auto;
}

.grey-background {
    background-color: #F8F4F2;
}
</style>
