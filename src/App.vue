<template>
  <v-app app
         style="border: 3px solid"
         :style="{'background-color' : useTheme().current.value.colors.background,'border-color' : useTheme().current.value.colors.secondary}"
         class="ma-2">
<!--    messaging options floating button-->
    <floating-btn/>
<!--    navigation drawer in extra small devices-->
    <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
    >
      <v-list class="text-start">
        <v-list-item class="text-primary">
          &lt; Navigate To / &gt;
        </v-list-item>
        <v-list-item>
          <nav-button btn-href="#about" btn-text="About" pos="left"/>
        </v-list-item>
        <v-list-item>
          <nav-button btn-href="#skills" btn-text="Skills" pos="left"/>
        </v-list-item>
        <v-list-item>
          <nav-button btn-href="#projects" btn-text="Projects" pos="left"/>
        </v-list-item>
        <v-list-item>
          <nav-button btn-href="#contact" btn-text="Contact" pos="left"/>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!--    top bar of website-->
    <v-app-bar style="background-color: transparent;height: auto;" class="elevation-0" absolute id="about">
<!--      big devices-->
      <v-row class="pt-6" v-if="useDisplay().smAndUp.value">
        <v-col cols="4" md="3" lg="2" class="text-start pl-12">
          <div>
            <nav-button btn-href="#about" btn-text="About" pos="left"/>
          </div>
          <div class="mt-2">
            <nav-button btn-href="#skills" btn-text="Skills" pos="left"/>
          </div>
        </v-col>
        <v-col cols="4" md="6" lg="8">
          <v-img :src="require('@/assets/Logo.webp')" width="150px" class="mx-auto"/>
        </v-col>
        <v-col cols="4" md="3" lg="2" class="text-end pr-12">
          <div>
            <nav-button btn-href="#projects" btn-text="Projects" pos="right"/>
          </div>
          <div class="mt-2">
            <nav-button btn-href="#contact" btn-text="Contact" pos="right"/>
          </div>
        </v-col>
      </v-row>
<!--      extra small devices-->
      <v-row class="pt-6" v-if="useDisplay().xs.value">
        <v-col cols="6" class="text-start pl-8 mt-n1" align-self="center">
          <v-btn icon="mdi-menu" size="x-large" color="primary" @click="drawer = !drawer"/>
        </v-col>
        <v-col cols="6">
          <v-img :src="require('@/assets/Logo.webp')" width="100px" class="ml-auto mr-8"/>
        </v-col>
      </v-row>
    </v-app-bar>
<!--    website content-->
    <v-container fluid class="mt-sm-16 pt-16">
<!--      name and download button-->
      <v-row class="mt-6">
<!--        name-->
        <v-col cols="12" md="7" class="text-start pl-4 pl-md-8 pl-lg-16">
          <div class="pl-lg-10 pl-xl-16">
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3" :style="{'font-size' : subHeaderFontSize}">Hi , I'm
            </div>&lt; h5 /&gt;
            </div>
            <div class="text-grey pl-6 pl-lg-12 mt-6" :style="{'font-size' : tagFontSize}">&lt; h1 &gt;</div>
            <div class="text-snow pl-10 pl-lg-16" :style="{'font-size' : headerFontSize}">MAHDI CHAVOSHI</div>
            <div class="text-grey pl-6 pl-lg-12 mt-4" :style="{'font-size' : tagFontSize}">&lt; h1 /&gt;</div>
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3 mt-6" :style="{'font-size' : subHeaderFontSize}">
              Frontend developer
            </div>&lt; h5 /&gt;
            </div>
          </div>
        </v-col>
<!--        download cv button-->
        <v-col cols="12" md="5" align-self="center">
          <cv-button :class="{'bigBtn' : useDisplay().lgAndUp.value}"/>
        </v-col>
      </v-row>
<!--      about section-->
      <v-row class="mt-6">
<!--        title of about-->
        <v-col cols="12" class="text-start pl-4 pl-md-8 pl-lg-16">
          <div class="pl-lg-10 pl-xl-16">
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3" :style="{'font-size' : subHeaderFontSize}">About me
            </div>&lt; h5 /&gt;</div>
          </div>
        </v-col>
      </v-row>
<!--      about card-->
      <v-row class="mt-6">
        <v-col cols="11" md="11" lg="10" class="text-start pl-4 pl-md-8 pl-lg-16 mx-auto">
          <div class="pl-lg-10 pl-xl-16">
            <div class="mt-n10 mt-sm-10 mt-lg-16">
              <card :number="about.number" :title="about.title" :description="about.description"/>
            </div>
          </div>
        </v-col>
      </v-row>
<!--      skills section-->
      <v-row class="mt-8" id="skills">
<!--        title of section-->
        <v-col cols="12" class="text-start pl-4 pl-md-8 pl-lg-16">
          <div class="pl-lg-10 pl-xl-16">
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3" :style="{'font-size' : subHeaderFontSize}">My Skills
            </div>&lt; h5 /&gt;</div>
          </div>
        </v-col>
      </v-row>
<!--      skills list-->
      <v-row class="mt-0">
        <v-col cols="12" lg="12" class="text-start pl-4 pl-md-8 pl-lg-16 mx-auto">
          <div class="pl-lg-10 pl-xl-16 mx-3 mx-md-6 mb-4 mb-md-8" v-for="skill in skills">
              <div class="text-grey" :style="{'font-size' : smallTagFontSize}">&lt; h6 &gt;<div
                  class="d-inline-block text-primary px-3 mb-4" :style="{'font-size' : smallSubHeaderFontSize}">{{ skill.name }}
              </div>&lt; h6 /&gt;</div>
              <v-progress-linear
                  class="mx-auto"
                  style="width: 98%"
                  :model-value="skill.value"
                  :color="skill.color"
                  buffer-value="0"
                  stream
              ></v-progress-linear>
          </div>
          <div class="text-center">
            <v-btn variant="text" color="primary" :size="btnSize" @click="showAllSkills = !showAllSkills">{{ showAllSkills ? 'Show Less' : 'Show More'}}</v-btn>
          </div>
        </v-col>
      </v-row>
<!--      languages section-->
      <v-row class="mt-6">
<!--        title of section-->
        <v-col cols="12" class="text-start pl-4 pl-md-8 pl-lg-16">
          <div class="pl-lg-10 pl-xl-16">
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3" :style="{'font-size' : subHeaderFontSize}">My Languages
            </div>&lt; h5 /&gt;</div>
          </div>
        </v-col>
      </v-row>
<!--      languages list-->
      <v-row class="mt-0">
        <v-col cols="12" md="7" class="text-start pl-4 pl-md-8 pl-lg-16 mx-auto">
          <div class="pl-lg-10 pl-xl-16 mx-3 mx-md-6 mb-4 mb-md-8" v-for="language in languages">
            <div class="text-grey" :style="{'font-size' : smallTagFontSize}">&lt; h6 &gt;<div
                class="d-inline-block text-primary px-3 mb-4" :style="{'font-size' : smallSubHeaderFontSize}">{{ language.name }}
            </div>&lt; h6 /&gt;</div>
            <div :style="{'font-size' : smallTagFontSize}" class="mx-6 mx-md-9">{{ language.expertise }}</div>
          </div>
        </v-col>
        <v-col cols="0" md="5" align-self="center" v-if="useDisplay().mdAndUp.value">
          <spinner tech-name="<Languages/>" class="mt-n16" :class="{'bigBtn' : useDisplay().lgAndUp.value}"/>
        </v-col>
      </v-row>
<!--      education section-->
      <v-row class="mt-6">
<!--        title of section-->
        <v-col cols="12" class="text-start pl-4 pl-md-8 pl-lg-16">
          <div class="pl-lg-10 pl-xl-16">
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3" :style="{'font-size' : subHeaderFontSize}">Educatioal Background
            </div>&lt; h5 /&gt;</div>
          </div>
        </v-col>
      </v-row>
<!--      education list-->
      <v-row class="mt-0">
        <v-col cols="12" md="7" class="text-start pl-4 pl-md-8 pl-lg-16 mx-auto">
          <div class="pl-lg-10 pl-xl-16 mx-3 mx-md-6 mb-4 mb-md-8" v-for="education in educations">
            <div class="text-grey" :style="{'font-size' : smallTagFontSize}">&lt; h6 &gt;<div
                class="d-inline-block text-primary px-3 mb-4" :style="{'font-size' : smallSubHeaderFontSize}">{{ education.schoolName}}
            </div>&lt; h6 /&gt;</div>
            <div :style="{'font-size' : smallTagFontSize}" class="mx-6 mx-md-9">{{ education.degree }}</div>
            <div :style="{'font-size' : smallTagFontSize}" class="mx-6 mx-md-9">{{ education.time }}</div>
            <div :style="{'font-size' : smallTagFontSize}" class="mx-6 mx-md-9">{{ education.location }}</div>
          </div>
        </v-col>
        <v-col cols="0" md="5" align-self="center" v-if="useDisplay().mdAndUp.value">
          <spinner tech-name="<Educations/>" class="mt-n16" :class="{'bigBtn' : useDisplay().lgAndUp.value}"/>
        </v-col>
      </v-row>
<!--      experience section-->
      <v-row class="mt-6">
<!--        title of section-->
        <v-col cols="12" class="text-start pl-4 pl-md-8 pl-lg-16">
          <div class="pl-lg-10 pl-xl-16">
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3" :style="{'font-size' : subHeaderFontSize}">Experiences
            </div>&lt; h5 /&gt;</div>
          </div>
        </v-col>
      </v-row>
<!--      experience list-->
      <v-row class="mt-0">
        <v-col cols="12" md="7" class="text-start pl-4 pl-md-8 pl-lg-16 mx-auto">
          <div class="pl-lg-10 pl-xl-16 mx-3 mx-md-6 mb-4 mb-md-8" v-for="experience in experiences">
            <div class="text-grey" :style="{'font-size' : smallTagFontSize}">&lt; h6 &gt;<div
                class="d-inline-block text-primary px-3 mb-4" :style="{'font-size' : smallSubHeaderFontSize}">{{ experience.companyName}}
            </div>&lt; h6 /&gt;</div>
            <div :style="{'font-size' : smallTagFontSize}" class="mx-6 mx-md-9">{{ experience.role }}</div>
            <div :style="{'font-size' : smallTagFontSize}" class="mx-6 mx-md-9">{{ experience.time }}</div>
            <div :style="{'font-size' : smallTagFontSize}" class="mx-6 mx-md-9">{{ experience.location }}</div>
          </div>
        </v-col>
        <v-col cols="0" md="5" align-self="center" v-if="useDisplay().mdAndUp.value">
          <spinner tech-name="<Experiences/>" class="mt-n16" :class="{'bigBtn' : useDisplay().lgAndUp.value}"/>
        </v-col>
      </v-row>
<!--      projects section-->
      <v-row class="mt-6" id="projects">
<!--        title of section-->
        <v-col cols="12" class="text-start pl-4 pl-md-8 pl-lg-16">
          <div class="pl-lg-10 pl-xl-16">
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3" :style="{'font-size' : subHeaderFontSize}">Projects
            </div>&lt; h5 /&gt;</div>
          </div>
        </v-col>
      </v-row>
<!--      projects list-->
      <v-row class="mt-0">
        <v-col cols="12" class="text-start pl-4 pl-md-8 pl-lg-16 mx-auto">
          <v-carousel hide-delimiters show-arrows="hover" height="100%">
            <v-carousel-item v-for="project in projects">
              <v-row>
                <v-col cols="12" class="px-4 px-md-8 px-lg-16 mx-3 mx-lg-10">
                  <div class="text-grey" :style="{'font-size' : smallTagFontSize}">&lt; h6 &gt;<div
                      class="d-inline-block text-primary px-3 mb-n3" :style="{'font-size' : smallSubHeaderFontSize}">{{ project.title}}
                  </div>&lt; h6 /&gt;</div>
                </v-col>
                <v-col cols="11" class="mx-auto mt-sm-10 mt-md-0">
                  <v-row>
                    <v-col cols="12" lg="7" class="mt-n4 mt-md-10 mt-lg-16 px-5 px-lg-16 mx-auto">
                      <card :number="project.number" :title="project.title" :description="project.description"/>
                    </v-col>
                    <v-col cols="12" lg="5" class="px-10 mx-auto mt-sm-10 mt-md-6" align-self="center">
                      <image-frame :image-src="project.image"/>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="text-center mt-6 mt-md-0 mt-lg-8 px-0">
                  <special-button :btn-text="project.text" class="mb-8" :website-url="project.url" :class="{'bigBtn' : useDisplay().lgAndUp.value}"/>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
<!--      contact section-->
      <v-row class="mt-8" id="contact">
<!--        title of section-->
        <v-col cols="12" class="text-start pl-4 pl-md-8 pl-lg-16">
          <div class="pl-lg-10 pl-xl-16">
            <div class="text-grey font-weight-bold" :style="{'font-size' : tagFontSize}">&lt; h5 &gt;<div
                class="d-inline-block text-primary px-3" :style="{'font-size' : subHeaderFontSize}">Contact Info
            </div>&lt; h5 /&gt;</div>
          </div>
        </v-col>
      </v-row>
<!--      contact list-->
      <v-row class="mt-0">
        <v-col cols="12" sm="6" xl="4" class="text-start px-4 px-md-8 px-lg-16 mx-auto" v-for="option in contactOptions" >
          <a class="pl-lg-10 pl-xl-16 mx-3 mx-md-6 mb-4 mb-md-8 d-block" :href="option.to" style="text-decoration: none">
            <div class="text-grey" :style="{'font-size' : smallTagFontSize}">&lt; h6 &gt;<div
                class="d-inline-block text-primary px-3 mb-4" :style="{'font-size' : smallSubHeaderFontSize}">{{ option.title}}
            </div>&lt; h6 /&gt;</div>
            <div :style="{'font-size' : smallTagFontSize}" class="text-info mx-6 mx-md-9">{{ option.text }}</div>
          </a>
        </v-col>
      </v-row>
    </v-container>
<!--    footer-->
    <v-footer class="bg-background">
      <v-row justify="center" no-gutters>
        <v-col class="text-center pb-3" cols="12">
          <v-divider class="mb-4"/>
          <v-icon class="mr-2">mdi-copyright</v-icon>
           <strong>Mahdi Chavoshi</strong> - {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import {useDisplay, useTheme} from "vuetify";
import NavButton from "@/components/navButton.vue";
import {computed, reactive, ref} from "vue";
import CvButton from "@/components/cvButton.vue";
import Card from "@/components/card.vue";
import FloatingBtn from "@/components/floatingBtn.vue";
import Spinner from "@/components/spinner.vue";
import ImageFrame from "@/components/imageFrame.vue";
import SpecialButton from "@/components/specialButton.vue";

const drawer = ref(false)
const showAllSkills = ref(false)
const about = reactive({
  number : "✦",
  title : "About me",
  description : "Hello! I'm Mahdi Chavoshi, a front-end developer based in Tabriz, Iran. I specialize in creating captivating user experiences with Nuxt.js, Vue.js, and Vuetify.js.I have been employed as a Front-End Developer for three years, with two of those years dedicated to educational pursuits at university and one year engaged in professional work.\n" +
      "\n" +
      "As an associate founder of Dornatech Software Company, I led front-end development for our website and worked on projects like merkato24.com.\n" +
      "\n" +
      "Passionate about continuous learning and staying up to date with industry trends, my goal is to make a positive impact in web development through exceptional user experiences.\n" +
      "\n" +
      "Feel free to explore my portfolio and projects. For any questions or collaboration opportunities, please reach out. Let's create something amazing together!"
})
const allSkills = ref([
  {
    name : 'Vue.Js',
    value : '95',
    color : '#41B883'
  },
  {
    name : 'Nuxt.Js',
    value: '92',
    color : '#3b8070'
  },
  {
    name : 'Tailwind Css',
    value: "95",
    color : '#38B7F0'
  },
  {
    name : 'Vuetify.Js',
    value: "95",
    color : '#1762B6'
  },
  {
    name : 'JavaScript',
    value: "92",
    color : '#EFD81D'
  },
  {
    name : 'TypeScript',
    value: "80",
    color : '#087ECE'
  },
  {
    name : 'Git',
    value: "85",
    color : '#F1502F'
  },
  {
    name : 'Node.Js',
    value: "70",
    color : '#68a063'
  },
  {
    name : 'Express.Js',
    value: "50",
    color : '#68a063'
  },
])
const skills = computed(() => {
  if(showAllSkills.value)
    return allSkills.value
  else
    return allSkills.value.slice(0,4)
})
const btnSize = computed(() => {
  if (useDisplay().smAndDown.value)
    return 'small'
  else if (useDisplay().md.value)
    return 'large'
  else
    return 'x-large'
})
const tagFontSize = computed(() => {
  if (useDisplay().lgAndUp.value)
    return '23px'
  else if (useDisplay().md.value)
    return '18px'
  else
    return '15px'
})
const subHeaderFontSize = computed(() => {
  if (useDisplay().lgAndUp.value)
    return '25px'
  else if (useDisplay().md.value)
    return '20px'
  else
    return '18px'
})
const smallTagFontSize = computed(() => {
  if (useDisplay().lgAndUp.value)
    return '20px'
  else if (useDisplay().md.value)
    return '15px'
  else
    return '12px'
})
const smallSubHeaderFontSize = computed(() => {
  if (useDisplay().lgAndUp.value)
    return '22px'
  else if (useDisplay().md.value)
    return '17px'
  else
    return '15px'
})
const headerFontSize = computed(() => {
  if (useDisplay().lgAndUp.value)
    return '80px'
  else if (useDisplay().md.value)
    return '50px'
  else
    return '40px'
})
const languages = ref([
  {
    name : 'Azerbaijani 🇦🇿',
    expertise : 'Native Proficiency.'
  },
  {
    name : 'Persian 🇮🇷',
    expertise: 'Bilingual Proficiency.'
  },
  {
    name : 'English(American) 🇺🇸',
    expertise: 'Professional Working Proficiency.'
  }
])
const educations = ref([
  {
    schoolName : 'Tabriz University',
    time : 'Oct 2023 - Present',
    degree : 'Master of Computer Systems Architecture',
    location : 'Tabriz , Iran'
  },
  {
    schoolName : 'Tabriz University',
    time : 'Sep 2019 - Jul 2023',
    degree : 'Bachelor of Computer Engineering',
    location : 'Tabriz , Iran'
  },
  {
    schoolName : 'Allame jafari High School',
    time : 'Jul 2013 - Jul 2019',
    degree : 'High School Diploma of Mathematics',
    location : 'Tabriz , Iran'
  }
])
const experiences = ref([
  {
    companyName : 'DornaTech',
    time : 'Apr 2022 - present',
    role : 'Co-Founder , Frontend Developer',
    location : 'Tabriz , Iran'
  },
  {
    companyName : 'Self-Employed',
    time : 'Apr 2022 - present',
    role : 'Freelancer , Frontend Developer',
    location : 'Tabriz , Iran'
  }
])
const projects = ref([
  {
    number : 1,
    title : 'DornaTech (demo)',
    description : '\n' +
        'Dornatech is a Tabriz-based software company.Its website\'s front-end developed using Nuxt.js 2, Vue.js 2, and Vuetify 2. A demo version of the website is already available at dornatech.ir and will be officially published in the near future. Stay tuned to explore our innovative software solutions and learn more about our services.',
    image : 'dornatech.webp',
    text : 'see dornatech',
    url : 'https://dornatech.ir'
  },
  {
    number : 2,
    title : 'Merkato24 (demo)',
    description: '\n' +
        'Merkato 24 is a digital marketplace for Africa, and its frontend has been developed using Nuxt.js 2, Vue.js 2, and Vuetify 2. The marketplace has three panels: public, user, and admin, which can be accessed through the URLs "/" for the public panel, "/user" for the user panel, and "/admin" for the admin panel.\n' +
        '\n' +
        'The frontend development is already complete and the backend is currently under development. Once the backend is finished, the frontend will be connected to it via an API.Merkato 24 has a demo version available at merkato24.netlify.app.',
    image : 'merkato24.webp',
    text : 'see merkato24',
    url : 'https://merkato24.netlify.app/'
  }
])
const contactOptions = ref([
  {
    text: '+98-9141023682',
    title : 'Phone Number',
    to : "tel:+989141023682"
  },
  {
    text : 'Mahdichavoshi14@gmail.com',
    title : 'Email',
    to : 'mailto:mahdichavoshi14@gmail.com'
  },
  {
    text: 'Mahdi-turrkk',
    title : 'Github',
    to : 'https://github.com/mahdi-turrkk'
  },
  {
    text: 'Mahdi Chavoshi',
    title : 'Linkedin',
    to : 'https://www.linkedin.com/in/mahdi-chavoshi-2178ba200/'
  },
  {
    text: 'Mahdi_turrkk',
    title : 'Telegram',
    to : 'https://www.t.me/mahdi_turrkk'
  },
  {
    text: '+98-9141023682',
    title : 'Whats app',
    to : 'https://www.wa.me/+989141023682'
  },
])


</script>

<style>
#app {
  font-family: 'JetBrains Mono', monospace !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.v-toolbar__content {
  height: auto !important;
}

.bigBtn {
  transform: scale(1.3);
}
</style>
