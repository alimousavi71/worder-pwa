import Vue from 'vue'
import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const options = {
  rtl: true,
  position: 'bottom-center',
  transition: 'Vue-Toastification__slideBlurred',
  timeout: 20000,
}

Vue.use(Toast, options)
