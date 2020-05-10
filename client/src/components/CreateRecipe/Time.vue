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
                        <v-text-field
                            v-model="recipe.prepTime"
                            outlined
                            label="Time to prepare?"
                            placeholder="200 days">
                        </v-text-field>

                        <v-text-field
                                v-model="recipe.cookTime"
                                outlined
                                label="Time to make?"
                                placeholder="200 days">
                        </v-text-field>

                    </v-col>

                    <v-col
                        class="px-12 pt-12"
                        cols="5"
                        md="5">
                        <v-text-field
                                v-model="recipe.cuisine"
                                outlined
                                label="Cuisine"
                                placeholder="Chinese">
                        </v-text-field>

                        <v-text-field
                                v-model="recipe.mood"
                                outlined
                                label="Mood"
                                placeholder="Sexy">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    // import {EventBus} from '@/events/EventBus.js'

    export default {
        data: () => ({
            recipe: {
                information: {
                    title: '',
                    story: '',
                    mainPhoto: ''
                },
                ingredients: '',
                splitIngredients: [],
                steps: [{
                    'title': '',
                    'photo': ''
                }],
            },

            error: null
        })
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
