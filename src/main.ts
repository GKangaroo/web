import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/index.css';
import ElementPlus from 'element-plus';
import router from './router/index';

const app = createApp(App);

app.use(ElementPlus, {
	size: 'default',
});
app.use(router);
app.mount('#app');

