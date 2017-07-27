/**
 * @file 入口文件
 * @author lewis
 */
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);
const Application = new Vue({
    el: '#app',
    components: {
        app: App
    },
    render: h => h(App)
});
