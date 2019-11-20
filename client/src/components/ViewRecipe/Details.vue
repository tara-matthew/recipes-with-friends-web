<template>
    <v-row>
        <v-col
            cols="12"
            class="custom-padding pt-7">

            <panel
                title="View Recipe"
                panelColour="#099E7A"
                class="title-box">

                <v-row>
                    <v-col
                        align-self="center"
                        class="px-12 py-12"
                        cols="5">
                        <div class="photo-box">
                            <p class="photo-text">Photo here</p>
                        </div>
                    </v-col>

                    <v-col
                        cols="7"
                        class="px-12 py-12">
                        <div class="info-box">
                            <h2>Chicken ramen</h2>
                            <div class="details">
                                <v-row>
                                    <v-col
                                        cols="6"
                                        class="pb-0">
                                        <p class="bold-text">Prep:</p>
                                        <p class="bold-text">Cook:</p>
                                    </v-col>

                                    <v-col
                                        cols="6"
                                        align-self="center">
                                        <p class="no-margin bold-text">Eaten:</p>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </panel>
        </v-col>
    </v-row>

</template>

<style scoped>
.custom-padding {
    padding-left: 39px;
    padding-right: 39px;
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

.info-box {
    /* border: 1px solid black; */
    height: 259px;
    position: relative;
}

.details {
    /* border: 1px solid black; */
    margin-top: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
}

p.no-margin {
    margin-bottom: 0;
}

.bold-text {
    font-weight: bold;
}
</style>
