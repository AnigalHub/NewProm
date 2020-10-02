import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

// router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './routes'
const router = new VueRouter(
    {
        mode:'history',
        routes,
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        }
    });


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
