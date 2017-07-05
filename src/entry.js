/**
 * @file 入口文件
 * @author lewis
 */
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
const Application = new Vue({
    el: '#app',
    components: {
        app: App
    },
    render: h => h(App)
});
