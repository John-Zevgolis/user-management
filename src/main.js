import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Alert from './components/ui/Alert.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('alert', Alert);

app.mount('#app')
