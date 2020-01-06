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
                            placeholder="noodles, ham,chicken,    eggs">
                        </v-textarea>

                        <v-card-actions class="justify-center">
                            <v-btn
                                color="#099E7A"
                                class="mb-3 white--text"
                                @click="saveRecipe">
                                Save
                            </v-btn>
                        </v-card-actions>
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
import RecipeService from '@/services/RecipeService'
import {EventBus} from '@/events/EventBus.js'

export default {
    data: () => ({
        recipe: {
            title: '',
            story: '',
            ingredients: '',
            method: '',
            mainPhoto: null

        },
        error: null
    }),

    mounted() {
        //Set recipe to the value which has bveen received from Info.vue
        EventBus.$on('sendRecipe', recipe => {
            this.recipe = recipe
        }),

        EventBus.$on('uploadedFile', file => {
            // Sets the filepath of the main photo for the recipe to match what has been received on the server
            this.recipe.mainPhoto = file.data
        })
    },
    methods: {
        async saveRecipe() {
            this.error = null

            // Check that a title has been entered
            const hasTitle = (Object
                .values(this.recipe)[0].length) > 0

            if (!hasTitle) {
                this.error = 'Your recipe needs a title'
                return
            }


            // Regex to remove whitespace
            this.recipe.ingredients = this.recipe.ingredients.replace(/\s{2,}/g,' ');

            try {
                console.log(this.recipe)
                await RecipeService.post(this.recipe)
                this.$router.push({
                    name: 'recipes'
                })
            } catch(error) {
                console.log(error)
            }
        },
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
