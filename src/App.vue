<template>
    <v-app app :style="{'background-color' : useTheme().current.value.colors.background}"></v-app>
</template>

<script setup>
import {useTheme} from "vuetify";


</script>

<style>
#app {
    font-family: 'JetBrains Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
</style>
