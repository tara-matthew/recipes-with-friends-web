<template>
    <div>
        <page-header />

        <v-container fill-height fluid>
            <recipe-info />
            <recipe-ingredients />

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
                                <div
                                    class="input-area"
                                    v-for="input in inputs"
                                    :key = "input.id">
                                    <v-textarea
                                        outlined
                                        :label ="input.label"
                                        placeholder="Massage oil into Caroline">
                                    </v-textarea>
                                </div>
                                <v-card-actions class="justify-center">
                                    <v-btn
                                        color="#099E7A"
                                        class="mb-3 white--text"
                                        @click="addInput">
                                        Add
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                            <v-col
                                class="px-12 pt-12"
                                cols="6"
                                md="6">
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>

import PageHeader from '@/components/Header'
import RecipeInfo from '@/components/CreateRecipe/RecipeInfo'
import RecipeIngredients from '@/components/CreateRecipe/RecipeIngredients'

export default {
    data: () => ({
        counter: 1,
        inputs: [{
            id: 'method1',
            label: 'How do you make it?',
            value: '',
        }],
        recipe: {
            title: '',
            story: '',
            ingredients: ''
        },
        error: null
    }),

    components: {
        PageHeader,
        RecipeInfo,
        RecipeIngredients
    },

    methods: {
        addInput() {
            this.inputs.push({
                id: `method${++this.counter}`,
                label: `Step ${this.counter}`,
                value: ''
            })
        },

        convertToArray: function(string) {
            return string.split(',')
                .map((ingredient) => {
                    return ingredient.trim()
                })
        }
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

    .first-card {
        background: #F7F7F7;
        margin-bottom: 20px;
    }

    .custom-padding {
        padding-left: 39px;
        padding-right: 39px;
    }
</style>
