import { createApp } from 'vue'
import App from './App.vue'
import configInstall from '@/config'

createApp(App).use(configInstall).mount('#app')
