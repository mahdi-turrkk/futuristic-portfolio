<template>
    <v-btn :href="btnHref" class="text-capitalize elevation-0" @mouseenter="isHover = true" @mouseleave="isHover = false"
           :style="{'border' : border , 'background-color' : backColor , 'transform' : translate , 'font-size' : btnFontSize}"
           style="height: 40px;"
    >&lt; {{ btnText }} / &gt;
    </v-btn>
</template>

<script setup>
import {computed, ref} from "vue";
import {useDisplay, useTheme} from "vuetify";

const props = defineProps(['btnHref', 'btnText','pos'])
const isHover = ref(false)

const border = computed(()=>{
    if(isHover.value){
        return `2px solid ${useTheme().current.value.colors.secondary}`
    }
    else
        return 'none'
})

const backColor = computed(()=>{
    if(isHover.value)
        return useTheme().current.value.colors.lightBack
    else
        return 'transparent'
})

const translate = computed(()=>{
    if(isHover.value && props.pos == 'left')
        return 'translateX(15px)'
    else if(isHover.value && props.pos == 'right')
        return 'translateX(-15px)'
})

const btnFontSize = computed(() => {
  if(useDisplay().lgAndUp.value)
    return "17px"
  else
    return "15px"
})

</script>

<style>
.v-btn:hover {
    background-color: transparent;
    color: inherit;
}
</style>