<template>
  <div class="d-inline-block" style="position: fixed;bottom: 25px;left: 30px;z-index: 999">
    <v-slide-y-reverse-transition>
      <div v-if="showOptions">
        <div v-for="option in connectOptions" class="mb-2">
          <v-btn :icon="option.icon" :style="{'color' : useTheme().current.value.colors.info}" :href="option.to" color="primary"></v-btn>
        </div>
      </div>
    </v-slide-y-reverse-transition>
    <v-btn icon="mdi-message-processing" @click="showOptions = !showOptions" :style="{'color' : useTheme().current.value.colors.info}" color="primary"></v-btn>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useTheme} from "vuetify";

const showOptions = ref(false)
const connectOptions = ref([
  {
    icon : 'mdi-email',
    to : 'mailto:mahdichavoshi14@gmail.com'
  },
  {
    icon: 'mdi-phone',
    to : "tel:+989141023682"
  },
  {
    icon: 'mdi-github',
    to : 'https://github.com/mahdi-turrkk'
  },
  {
    icon: 'mdi-linkedin',
    to : 'https://www.linkedin.com/in/mahdi-chavoshi-2178ba200/'
  },
  {
    icon: 'mdi-send mdi-rotate-315',
    to : 'https://www.t.me/mahdi_turrkk'
  },
  {
    icon: 'mdi-whatsapp',
    to : 'https://www.wa.me/+989141023682'
  },
])
</script>