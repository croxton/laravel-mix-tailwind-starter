import Vue from "vue";
Vue.config.productionTip = false;

import App from './components/ExampleComponent.vue';

// attach to an element
const mountTo = document.querySelector('#js-example-component');

new Vue({
    el: mountTo,
    data: {
    },
    template: '<App/>',
    components: {App}
});