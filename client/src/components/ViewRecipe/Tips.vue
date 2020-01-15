<template>
    <v-col
        cols="6"
        class="custom-padding pt-7"
        align-self="center">
        <panel
            title="Hot Tips"
            panelColour="#099E7A"
            class="tips-panel grey-background">
            <v-row class="grey-background">
                <v-col
                    cols="12"
                    class="px-12 py-12">
                    <div>
                        <p>Don't burn the onions!</p>
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

.tips-panel {
    min-height: 297px;
    overflow-y: auto;
    overflow-x: hidden;
}

.grey-background {
    background-color: #F8F4F2;
}
</style>
