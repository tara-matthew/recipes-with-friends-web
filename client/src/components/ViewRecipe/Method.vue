<template>
    <v-col
        cols="10"
        class="custom-padding pt-7">
        <panel
            title="Method"
            panelColour="#036F55"
            class="method-panel grey-background"
            id="method-panel">
            <v-row
                v-for="(step, index) in steps"
                v-bind:key="index">
                <v-col
                    align-self="center"
                    cols="6"
                    class="custom-padding px-12 py-12">
                    <h1>Step {{index+1}}</h1>
                    <p>{{step.title}}</p>
                </v-col>
                <v-col
                    cols="6"
                    class="custom-padding px-12 py-12">
                    <div class="photo-box">
                        <p class="photo-text">
                            <img
                                v-if="step.photo"
                                v-bind:src="require(`@/../uploads/${step.photo}`)"
                                height="300"
                                width="300"
                            />
                        </p>
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
            steps: []
        }
    },

    props: [
        'recipe'
    ],

    mounted() {
        const methodPanel = document.getElementById('method-panel')
        EventBus.$on('height', val => {
            methodPanel.style.height = val + 'px'
        })
    },

    watch: {
        async recipe() {
            // Push the title of every entry in the Steps index of the recipe array into its own steps array
            this.recipe.Steps.map(
                step => this.steps.push({
                'title': step.title,
                'photo': step.RecipeStep.photo
                }),
            )
        }
    }
}
</script>

<style scoped>
.custom-padding {
    padding-left: 39px;
    padding-right: 39px;
}

.method-panel {
    overflow-y: auto;
    overflow-x: hidden;
}

.photo-box {
    border: 1px solid black;
    height: 259px;
    position: relative;
}

.photo-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
}

.grey-background {
    background-color: #F8F4F2;
}
</style>
