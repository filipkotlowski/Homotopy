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


const app = createApp(App);
app.component(VueFeather.name,VueFeather)
app.use(vuetify)
app.use(router)
app.use(Toast,options);
app.mount('#app')