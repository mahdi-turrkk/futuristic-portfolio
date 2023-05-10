import {createApp} from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
        defaultTheme: 'primaryTheme',
        themes: {
            primaryTheme:
                {
                    dark: true,
                    colors: {
                        primary: '#DE2828',
                        secondary: '#FF3333',
                        error: '#DC143C',
                        info: '#F7F7F7',
                        success: '#32CD32',
                        warning: '#FFC107',
                        background: '#111111',
                    }
                }
        }
    }
})

createApp(App).use(vuetify).mount('#app')