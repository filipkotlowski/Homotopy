import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueFeather from 'vue-feather'
import router from './router'

// vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

// toastification
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  position:POSITION.TOP_CENTER
};


// i18n
import { createI18n } from 'vue-i18n'

import * as enGB from '@/const/i18n/en-GB.json'
import * as plPL from '@/const/i18n/pl-PL.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en-GB',
    globalInjection: true,
    messages: {
        'en-GB': { ...enGB },
        'pl-PL': { ...plPL },
    },
})

const app = createApp(App);
app.component(VueFeather.name,VueFeather)
app.use(vuetify)
app.use(router)
app.use(Toast,options);
app.use(i18n as any)
app.mount('#app')