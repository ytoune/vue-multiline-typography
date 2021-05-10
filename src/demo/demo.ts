import { createApp } from 'vue'
import App from './App.vue'

const el = document.querySelector('main')
el && createApp(App).mount(el)
