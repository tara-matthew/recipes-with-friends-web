<template>

    <div class="wrapper">

        <v-toolbar color="#92D1C2" class="padded-toolbar">
            <v-toolbar-title>Recipes With Friends</v-toolbar-title>

            <v-toolbar-items class="left-aligned-toolbar">
                <v-btn text>Browse</v-btn>
                <v-btn text>Random Recipe</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn text>Sign Out</v-btn>
                <v-btn text class="font-weight-bold">Tara</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <div class="box title-box">
            <p>Recipe title goes here</p>
        </div>

        <div class="box ingredients-box">
            <div class="inner-div">

            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .left-aligned-toolbar {
        margin-left: 100px;
    }

    .padded-toolbar {
        padding-left:25px;
        padding-right:25px;
        margin-bottom: 24px;
        grid-column: 1/13;

    }

    .site-padding-left {
        margin-left: 25px;
    }

    .site-padding-right {
        margin-right: 25px;
    }

    .panel-title {
        text-align: center;
        width: 100%;
        color: white;
        font-family: "Segoe UI";
        font-size: 24px;
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(12, [col-start] 1fr);
        grid-template-rows: repeat(10, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 20px;
    }

    .box {
        border: 1px solid #444;
    }

    .title-box {
        grid-column: 2/12;
        grid-row: 2/4;
    }

    .ingredients-box {
        grid-column: 2/7;
        grid-row: 4/10;
    }

    .inner-div {
        border: 1px solid #444;
        padding: 20px;

    }

</style>
