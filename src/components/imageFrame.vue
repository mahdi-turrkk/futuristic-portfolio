<template>
    <v-container fluid>
        <v-card style="border-radius: 0;overflow: visible;background: rgba(255, 51, 51, 0.1)" :style="{'border' : `dashed 3px ${useTheme().current.value.colors.secondary}`}"
                class="pa-5 pa-md-10">
            <div class="borderTopLeft"></div>
            <div class="borderTopRight"></div>
            <div class="borderBottomRight"></div>
            <div class="borderBottomLeft"></div>
            <v-img width="100%" :src="require('@/assets/'+imageSrc)" :alt="imageSrc">
            </v-img>
        </v-card>
    </v-container>
</template>

<script setup>
import {useTheme} from "vuetify";

const props = defineProps(['imageSrc'])
</script>

<style>
.borderTopLeft {
    animation-name: topLeftAnimation;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-top: 7px solid #f51c40;
    border-left: 7px solid #f51c40;
    position: absolute;
    top: -15px;
    bottom: calc(100% - 50px);
    left: -15px;
    right: calc(100% - 50px);
}

.borderTopRight {
    animation-name: topRightAnimation;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-top: 7px solid #f51c40;
    border-right: 7px solid #f51c40;
    position: absolute;
    top: -15px;
    bottom: calc(100% - 50px);
    right: -15px;
    left: calc(100% - 50px);
}

.borderBottomLeft {
    animation-name: bottomLeftAnimation;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-bottom: 7px solid #f51c40;
    border-left: 7px solid #f51c40;
    position: absolute;
    top: calc(100% - 50px);
    bottom: -15px;
    left: -15px;
    right: calc(100% - 50px);
}

.borderBottomRight {
    animation-name: bottomRightAnimation;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-bottom: 7px solid #f51c40;
    border-right: 7px solid #f51c40;
    position: absolute;
    top: calc(100% - 50px);
    bottom: -15px;
    right: -15px;
    left: calc(100% - 50px);
}


@keyframes topLeftAnimation {
    from, to {
        transform: translateY(0) translateX(0);
    }
    50% {
        transform: translateY(-10px) translateX(-10px);
    }
}

@keyframes topRightAnimation {
    from, to {
        transform: translateY(0) translateX(0);
    }
    50% {
        transform: translateY(-10px) translateX(10px);
    }
}

@keyframes bottomLeftAnimation {
    from, to {
        transform: translateY(0) translateX(0);
    }
    50% {
        transform: translateY(10px) translateX(-10px);
    }
}

@keyframes bottomRightAnimation {
    from, to {
        transform: translateY(0) translateX(0);
    }
    50% {
        transform: translateY(10px) translateX(10px);
    }
}

</style>