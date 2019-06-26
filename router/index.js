import Vue from 'vue'
import VueRouter from 'vue-router';

import App from '../components/app.vue'
import Home from '../components/home/home.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'default',path: '/',redirect: {name: 'home'}
        }, 
        {
            name: 'home',path: '/home',component: Home
        },
    ]
})

export default router