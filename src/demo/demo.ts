import Vue from 'vue'
import App from './App.vue'

const el = document.querySelector('main')
el &&
	new Vue({
		el,
		render(h: Vue.CreateElement) {
			return h(App)
		},
	})
