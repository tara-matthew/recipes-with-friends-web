<template>
    <v-col
        cols="8"
        class="custom-padding pt-7">
        <panel
            title="Method"
            panelColour="#036F55"
            class="method-panel"
            id="method-panel">
            <v-row>
                <v-col
                    cols="6"
                    class="custom-padding px-12 py-12">
                    <p>Step 1</p>
                </v-col>
                <v-col
                    cols="6"
                    class="custom-padding px-12 py-12">
                    <div class="photo-box">
                        <p class="photo-text">Photo here</p>
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="6"
                    class="custom-padding px-12 py-12">
                    <p>Step 1</p>
                </v-col>
                <v-col
                    cols="6"
                    class="custom-padding px-12 py-12">
                    <div class="photo-box">
                        <p class="photo-text">Photo here</p>
                    </div>
                </v-col>
            </v-row>
        </panel>
    </v-col>

</template>

<script>
import {EventBus} from '@/events/EventBus.js'

export default {
    props: [
        'recipe'
    ],
    mounted() {
        const methodPanel = document.getElementById('method-panel')
        EventBus.$on('height', val => {
            methodPanel.style.height = val + 'px'
        })
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
</style>
