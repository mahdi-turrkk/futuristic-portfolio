<template>
    <v-container fluid class="text-start px-6 px-md-16">
        <div class="mb-n5" v-if="useDisplay().mdAndUp.value">
            <div>
                <v-icon icon="mdi-hexagon" size="150" color="background" class="ml-n16" style="z-index: 1"></v-icon>
                <v-icon icon="mdi-hexagon-outline" size="150" color="primary"
                        style="margin-left: -150px;z-index: 1"></v-icon>
                <v-icon icon="mdi-hexagon-outline" size="100" color="primary"
                        style="margin-left: -125px;font-weight: lighter;z-index: 1"></v-icon>
            </div>
            <div style="margin-top: -95px;margin-left: 2px;position: relative;z-index: 2 !important"
                 class="text-h4 text-primary font-weight-bold">{{ number }}
            </div>
        </div>
        <div class="mb-n4" v-if="useDisplay().smAndDown.value">
            <div>
                <v-icon icon="mdi-hexagon" size="100" color="background" class="ml-n10" style="z-index: 1"></v-icon>
                <v-icon icon="mdi-hexagon-outline" size="100" color="primary"
                        style="margin-left: -100px;z-index: 1"></v-icon>
                <v-icon icon="mdi-hexagon-outline" size="70" color="primary"
                        style="margin-left: -85px;font-weight: lighter;z-index: 1"></v-icon>
            </div>
            <div style="margin-top: -66px;margin-left: 3px;position: relative;z-index: 2 !important"
                 class="text-h5 text-primary font-weight-bold">{{ number }}
            </div>
        </div>
        <v-card style="overflow: visible;z-index: 0;padding-top: 56px;padding-bottom: 60px"
                class="card-shape-border px-10"
                color="secondary" v-if="useDisplay().smAndUp.value">
            <div class="text-primary font-weight-bold text-uppercase text-shadow"
                 :style="{'font-size' : titleFontSize}">{{ title }}
            </div>
            <div class="text-capitalize mx-3" :style="{'font-size' : desFontSize}">{{ description }}</div>
        </v-card>
        <v-card style="overflow: visible;z-index: 0;padding-top: 56px;padding-bottom: 60px;transform: translateY(-98%)"
                class="card-shape-border px-10"
                color="secondary" v-if="useDisplay().smAndUp.value">
            <div class="text-primary font-weight-bold text-uppercase text-shadow"
                 :style="{'font-size' : titleFontSize}">{{ title }}
            </div>
            <div class="text-capitalize mx-3" :style="{'font-size' : desFontSize}">{{ description }}</div>
        </v-card>
        <v-card style="overflow: visible;z-index: 0;transform: translateY(-200%);border-right: 5px solid;border-left: 5px solid"
                class="card-shape-lg py-14 px-10"
                :style="{'border-color' : useTheme().current.value.colors.secondary}"
                v-if="useDisplay().smAndUp.value">
            <div class="text-primary font-weight-bold text-uppercase"
                 :style="{'text-shadow' : `0 0 25px ${useTheme().current.value.colors.secondary}`,'font-size' : titleFontSize}">
                {{ title }}
            </div>
            <div class="text-capitalize mx-3" :style="{'font-size' : desFontSize}">{{ description }}</div>
        </v-card>
        <v-card style="overflow: visible;z-index: 0;border: 3px solid"
                class="py-10 px-5"
                :style="{'border-color' : useTheme().current.value.colors.secondary}"
                v-if="useDisplay().xs.value">
            <div class="text-primary font-weight-bold text-uppercase"
                 style="font-size: 25px"
                 :style="{'text-shadow' : `0 0 10px ${useTheme().current.value.colors.secondary}`}">
                {{ title }}
            </div>
            <div class="text-capitalize mx-3" style="font-size: 15px" v-if="!isShowMore">{{ description.slice(0, 200) }}
                <div class="text-primary d-inline-block" style="font-size: 15px" @click="isShowMore = !isShowMore">show
                    more
                </div>
            </div>
            <div class="text-capitalize mx-3" style="font-size: 15px" v-if="isShowMore">{{ description }}
                <div class="text-primary d-inline-block" style="font-size: 15px" @click="isShowMore = !isShowMore">show
                    less
                </div>
            </div>
        </v-card>
    </v-container>
</template>

<script setup>
import {useDisplay, useTheme} from "vuetify";
import {computed, ref} from "vue";

const isShowMore = ref(false)

const props = defineProps(['number', 'title', 'description'])

const titleFontSize = computed(() => {
    if (useDisplay().lgAndUp.value)
        return '36px'
    else
        return '30px'
})

const desFontSize = computed(() => {
    if (useDisplay().lgAndUp.value)
        return '20px'
    else
        return '15px'
})

</script>

<style scoped>
.card-shape-lg {
    overflow: visible !important;
    clip-path: polygon(0 0, 19% 0, 24% 50px, 38% 50px, 43% 30px, 67% 30px, 73% 0, 89% 0, 100% 80px, 100% calc(100% - 80px), 89% 100%, 67% 100%, 62% calc(100% - 50px), 45% calc(100% - 50px), 40% 100%, 9% 100%, 0% calc(100% - 80px));
}

.card-shape-border {
    overflow: visible !important;
    clip-path: polygon(0 0, 19% 0, 24% 50px, 38% 50px, 43% 30px, 67% 30px, 73% 0, 89% 0, 100% 80px, 100% calc(100% - 80px), 89% 100%, 67% 100%, 62% calc(100% - 50px), 45% calc(100% - 50px), 40% 100%, 9% 100%, 0% calc(100% - 80px));
}
</style>