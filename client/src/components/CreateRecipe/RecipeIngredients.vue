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
export default {
    data: () => ({
        recipe: {
            title: '',
            story: '',
            ingredients: ''
        },
        error: null
    }),

    methods: {
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
