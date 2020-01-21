<template>
    <v-row>
        <v-col
            cols="12"
            class="custom-padding">
            <v-card class="first-card">
                <v-row>
                    <v-col
                        class="px-12 pt-12"
                        cols="6"
                        md="6">
                        <v-textarea
                            v-model="recipe.ingredients"
                            outlined
                            label="What are the ingredients?"
                            placeholder="noodles, ham,chicken,    eggs"
                            v-on:change="emitChange()">
                        </v-textarea>

                    </v-col>

                    <v-col
                        class="px-12 pt-12"
                        cols="5"
                        md="5">
                        <p class="bold-instruction">Separate your ingredients with commas, but don't worry about how many spaces you use.</p>
                        <p class=italic-instruction>A list of your most-used ingredients will appear here when you've added some recipes!</p>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import {EventBus} from '@/events/EventBus.js'

export default {
    data: () => ({
        recipe: {
            information: {
                title: '',
                story: '',
                mainPhoto: ''
            },
            ingredients: ''
        },
        ingredients: '',
        method: [],

        error: null
    }),

    mounted() {
        //Set recipe to the value which has bveen received from Info.vue
        EventBus.$on('sendRecipe', recipe => {
            this.recipe = recipe
        }),

        EventBus.$on('uploadedFile', file => {
            // Sets the filepath of the main photo for the recipe to match what has been received on the server
            this.recipe.information.mainPhoto = file.data
        })
    },
    methods: {
        emitChange() {
            EventBus.$emit('sendRecipe', this.recipe),
            EventBus.$emit('sendIngredients', this.ingredients)
        }
    }
}
</script>

<style scoped>
    .custom-padding {
        padding-left: 39px;
        padding-right: 39px;
    }

    .first-card {
        background: #F7F7F7;
        margin-bottom: 20px;
    }

    .bold-instruction {
        font-weight: bold;
        color: #099E7A;
    }

    .italic-instruction {
        font-style: italic;
        color: #036F55;
    }
</style>
