<template>
    <div class="text-center px-6 px-md-16 d-inline-block mt-n16">
        <v-slide-x-transition>
            <v-icon size="55" class="d-inline-block text-secondary mt-n3 mr-n7"
                    v-if="isHover"
                    style="transform:scale(1.6,1.75);filter: opacity(30%)"
                    :style="{'text-shadow' : `0 0 20px ${useTheme().current.value.colors.secondary}`}">mdi-chevron-left
            </v-icon>
        </v-slide-x-transition>
        <v-slide-x-transition>
            <v-icon size="55" class="d-inline-block text-secondary mt-n3 mr-n7"
                    v-if="isHover"
                    style="transform:scale(1.6,1.75);filter: opacity(70%)"
                    :style="{'text-shadow' : `0 0 20px ${useTheme().current.value.colors.secondary}`}">mdi-chevron-left
            </v-icon>
        </v-slide-x-transition>
        <v-slide-x-transition>
            <v-icon size="55" class="d-inline-block text-secondary mt-n3 mr-n4"
                    v-if="isHover"
                    style="transform:scale(1.6,1.75)"
                    :style="{'text-shadow' : `0 0 20px ${useTheme().current.value.colors.secondary}`}">mdi-chevron-left
            </v-icon>
        </v-slide-x-transition>
        <div class="d-inline-block">
            <v-card style="overflow: visible;z-index: 0;transform: translateY(96%)"
                   class="card-shape-border py-3 px-11"
                   color="secondary">
                <div class="text-primary font-weight-bold text-uppercase text-shadow">{{btnText}}
                </div>
            </v-card>
            <v-card style="overflow: visible;z-index: 0;cursor: pointer;margin-top: 2px"
                   @mouseenter="isHover = true" @mouseleave="isHover = false"
                   class="card-shape-lg py-2 px-10 mx-1"
                   :style="{'border-color' : useTheme().current.value.colors.secondary}">
                <div class="text-primary font-weight-bold text-uppercase"
                     :style="{'text-shadow' : `0 0 25px ${useTheme().current.value.colors.secondary}`}">
                    {{btnText}}
                </div>
            </v-card>
        </div>
        <v-slide-x-transition>
            <v-icon size="55" class="d-inline-block text-secondary mt-n3 ml-n4"
                    v-if="isHover"
                    style="transform:scale(1.6,1.75)"
                    :style="{'text-shadow' : `0 0 20px ${useTheme().current.value.colors.secondary}`}">mdi-chevron-right
            </v-icon>
        </v-slide-x-transition>
        <v-slide-x-transition>
            <v-icon size="55" class="d-inline-block text-secondary mt-n3 ml-n7"
                    v-if="isHover"
                    style="transform:scale(1.6,1.75);filter: opacity(70%)"
                    :style="{'text-shadow' : `0 0 20px ${useTheme().current.value.colors.secondary}`}">mdi-chevron-right
            </v-icon>
        </v-slide-x-transition>
        <v-slide-x-transition>
            <v-icon size="55" class="d-inline-block text-secondary mt-n3 ml-n7"
                    v-if="isHover"
                    style="transform:scale(1.6,1.75);filter: opacity(30%)"
                    :style="{'text-shadow' : `0 0 20px ${useTheme().current.value.colors.secondary}`}">mdi-chevron-right
            </v-icon>
        </v-slide-x-transition>
    </div>
</template>

<script setup>
import {useDisplay, useTheme} from "vuetify";
import {ref} from "vue";

const props = defineProps(['btnText'])

const isHover = ref(false)
</script>

<style scoped>
.card-shape-lg {
    clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%);
}

.card-shape-border {
    clip-path: polygon(22px 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 22px 100%, 0 50%);
}
</style>