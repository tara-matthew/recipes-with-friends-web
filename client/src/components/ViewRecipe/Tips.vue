<template>
    <v-col
        cols="6"
        class="custom-padding pt-7"
        align-self="center">
        <panel
            title="Hot Tips"
            panelColour="#099E7A"
            class="tips-panel">
            <v-row>
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
</style>
