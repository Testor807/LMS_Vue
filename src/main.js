import { createApp } from 'vue'
import App from './App2.vue'
//import App from './components/Home.vue'
//import App from './components/index/GridList.vue'
import router from './router'
import store from './js/store'
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(createPinia)
app.mount('#app')