import { createApp } from 'vue'
//import App from './App.vue'
//import App from './components/Home.vue'
import App from './components/Profile.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')