import './assets/main.css'

import { createApp } from 'vue'
//import App from './App.vue'
//import App from './components/index/VerticalList.vue'
import App from './components/PublicInfo/LibInfo.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
