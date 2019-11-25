<template>
    <v-col
        cols="6"
        class="custom-padding pt-7"
        align-self="center">
        <panel
            title="Story"
            panelColour="#099E7A"
            class="story-panel">
            <v-row>
                <v-col
                    cols="12"
                    class="px-12 py-12">

                    <div>
                        <p>{{recipe.story}}</p>
                    </div>
                </v-col>
            </v-row>
        </panel>
    </v-col>
</template>

<script>
export default {
    props: [
        'recipe'
    ]
}
</script>

<style scoped>
.custom-padding {
    padding-left: 39px;
    padding-right: 39px;
}

.story-panel {
    min-height: 297px;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
