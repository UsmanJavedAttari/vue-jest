import Vue from 'vue';
import AppComponent from './app.component';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: h => h(AppComponent)
}).$mount('#app');
