import { createApp, h } from 'vue'

createApp({
  setup() {
    return () => h('div', { style: 'font-family: Arial, sans-serif; padding:20px; font-size:48px; font-weight:700; color:#111' }, 'Hello world')
  }
}).mount('#app')
