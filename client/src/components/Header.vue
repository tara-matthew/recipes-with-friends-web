<template>
    <v-toolbar color="#92D1C2" class="padded-toolbar">
            <router-link
                class="toolbar-title"
                :to="{
                    name: 'recipes'
                }">
                <v-toolbar-title>
                    Recipes With Friends
                </v-toolbar-title>
            </router-link>

        <v-toolbar-items class="left-aligned-toolbar">
            <v-btn
                text
                :to="{
                    name:'createRecipe'
                }">
                New Recipe
            </v-btn>
            <v-btn
                text
                :to="{
                    name:'browse'
                }">
                Browse
            </v-btn>
            <v-btn text>Random Recipe</v-btn>

        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items
            v-if="$store.state.isUserLoggedIn">
            <v-btn
                text>
                Sign Out
            </v-btn>

            <v-btn
                text
                class="font-weight-bold">
                {{$store.state.user.firstName}}
            </v-btn>
        </v-toolbar-items>

        <v-toolbar-items
            v-else>

            <v-btn
                text
                :to="{
                name: 'login'
                }">
                Login
            </v-btn>
            <v-btn
                text
                :to="{
                name: 'register'
                }">
                Register
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<style scoped>
    .toolbar-title {
        color: inherit;
        text-decoration: inherit;
    }

    .left-aligned-toolbar {
        margin-left: 100px;
    }

    .padded-toolbar {
        padding-left:25px;
        padding-right:25px;
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
</style>
