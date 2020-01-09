<template>
    <div>
        <page-header/>

        <v-container fill-height fluid>
            <v-row>
                <v-col
                    cols="12"
                    class="custom-padding pt-7">
                    <panel
                        title="Browse"
                        class="browse"
                        panelColour="#099E7A">
                    </panel>

                    <div
                        v-for="recipe in recipes"
                        :key = "recipe.id">
                        <v-card
                            class="mt-12 recipe-container"
                            :id ="recipe.id"
                            @click="goToRoute">
                            <v-row>
                                <v-col
                                    align-self="center"
                                    cols="8"
                                    class="px-12 py-12">
                                    <p class="title-text">{{recipe.title}}</p>
                                    <p>{{recipe.story}}</p>
                                    <p>Needs {{recipe.ingredients}}</p>
                                    <p>Takes {{time}}</p>
                                </v-col>

                                <v-col
                                    align-self="center"
                                    cols="4"
                                    class="px-12 py-12">
                                    <div class="box-outline">
                                        Photo
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </div>

                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import PageHeader from '@/components/Header'
import RecipeService from '@/services/RecipeService'

export default {
    components: {
        PageHeader
    },
    data() {
        return {
            recipes: null
        }
    },

    watch: {
        '$route.query.search': {
            immediate: true,
            async handler(value) {
                this.recipes = (await RecipeService.index(value)).data

            }
        }
    },

    methods: {
        goToRoute() {
            const recipeId = event.currentTarget.id
            this.$router.push({
                name: 'viewRecipe',
                params: {
                    recipeId: recipeId
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .recipe-container {
        background: #F7F7F7;
    }

    .box-outline {
        border-color: black;
        border-style: solid;
        height: 210px;
    }

    .title-text {
        font-size: 39px;
        color: #099E7A;
    }

    p {
        text-align: center;
        font-weight: bold;
        font-family: "Segoe UI";
    }

    .custom-padding {
        padding-left: 39px;
        padding-right: 39px;
    }
</style>
