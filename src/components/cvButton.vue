<template>
    <a class="text-center d-inline-block" style="cursor: pointer" :href="mahdi" download="mahdi-chavoshi-CV.pdf">
        <div class="circular-progress">
            <div class="circular-progress-circle">
                <div class="segment" style="transform: rotate(0deg) skew(0deg)"></div>
            </div>
        </div>
        <div class="circular-progress">
            <div class="circular-progress-circle" style="margin-top: -240px">
                <div class="segment1" style="transform: rotate(0deg) skew(0deg)"></div>
            </div>
        </div>
        <div class="circular-progress">
            <div class="circular-progress-circle" style="margin-top: -240px">
                <div class="circular-progress-inner"
                     :style="{'background' : useTheme().current.value.colors.background}"></div>
                <div class="circular-progress-value-back" :style="{'color' : useTheme().current.value.colors.primary}">
                    <h4
                            style="opacity: 40%;"> &lt / &gt </h4></div>
            </div>
        </div>
        <div class="circular-progress">
            <div class="circular-progress-circle" style="margin-top: -240px">
                <div class="circular-progress-inner-back" style="margin-top: -110px;margin-left: -110px"></div>
                <div class="circular-progress-value typewriter"
                     :style="{'color' : useTheme().current.value.colors.secondary}"
                     style="text-shadow: 2px 2px #000;font-size: 18px">&ltDownload CV/&gt
                </div>
            </div>
        </div>
    </a>
</template>

<script setup>
import {useTheme} from "vuetify";
import mahdi from "@/assets/mahdi.pdf"
</script>

<style scoped>
.typewriter {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: typing 4s steps(40, end) infinite;
}

@keyframes typing {
    from, to {
        width: 0
    }
    50% {
        width: 100%
    }
}

.circular-progress-circle {
    position: relative;
    width: 240px;
    height: 240px;
    background: transparent;
    border-radius: 50%;
    overflow: hidden;
}

.segment {
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vw;
    background: #00FFFF;
    opacity: 50%;
    filter: brightness(200%) saturate(250%);
    transform-origin: 0 0;
}

.circular-progress-inner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 190px;
    height: 190px;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
}

.circular-progress-inner-back {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: rgba(53,162, 159, 0.1);
    border: dashed 4px rgba(53,162, 159, 0.5);
}

.circular-progress-value {
    position: absolute;
    font-size: 200%;
    font-family: 'JetBrains Mono';
    font-weight: bold;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.circular-progress-value-back {
    position: absolute;
    font-size: 250%;
    font-family: 'JetBrains Mono';
    font-weight: bold;
    left: 50%;
    top: 50%;
    transform: translateY(-55%) translateX(-50%) rotate(45deg);
}


@keyframes spin {
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(360deg);
    }
}

@keyframes revSpin {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
}

.segment1 {
    animation-name: revSpin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vw;
    background: #00FFFF;
    opacity: 50%;
    filter: brightness(200%) saturate(250%);
    transform-origin: 0 0;
}
</style>