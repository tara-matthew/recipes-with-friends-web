<template>
    <v-col
        cols="2"
        class="custom-padding pt-7">
        <panel
            title="Ingredients"
            panelColour="#08AC84"
            id="ingredients-panel"
            ref="ingredientsPanel">
            <v-row>
                <v-col
                    cols="12"
                    class="px-12 py-12">
                    <div class="inner-container">

                        <p v-for="ingredient in recipe.ingredients" v-bind:key="ingredient">{{ingredient}}</p>

                    </div>
                </v-col>
            </v-row>
        </panel>
    </v-col>

</template>

<script>
import {EventBus} from '@/events/EventBus.js'

export default {

    props: [
        'recipe'
    ],

    updated() {

        // Ensure that the ingredients panel and methods panel are the same height
        this.$nextTick(function() {
            EventBus.$emit('height', document.getElementById('ingredients-panel').offsetHeight)
        })
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
</style>
