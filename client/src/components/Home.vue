<template>
    <div>

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

        <v-container fill-height>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                    class="mt-12">
                    <v-card height="400">
                        <v-card-title>Hello</v-card-title>
                    </v-card>
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                    class="mt-12">
                    <v-card height="400">
                        <v-card-title>Hello</v-card-title>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="12"
                    md="6"
                    class="mt-12">
                    <v-card height="400">
                        <v-card-title>Hello</v-card-title>
                    </v-card>
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                    class="mt-12">
                    <v-card height="400">
                        <v-card-title>Hello</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

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
    }

</style>
