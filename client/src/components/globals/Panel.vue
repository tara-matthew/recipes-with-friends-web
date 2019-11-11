<template>
    <v-card :elevation="2" :class="assignedClass">
        <v-toolbar
            class="my-toolbar"
            :color="panelColour">
            <v-toolbar-title class="panel-title">{{title}}</v-toolbar-title>
        </v-toolbar>

        <slot>

        </slot>
    </v-card>
</template>

<script>
  export default {
    props: [
      'title',
      'panelColour'
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .panel-title {
        text-align: center;
        width: 100%;
        color: white;
        font-family: "Segoe UI";
        font-size: 24px;
    }
</style>
