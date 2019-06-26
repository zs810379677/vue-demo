import Vue from 'vue'
// 引入Mint-ui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import './static/vendor/mui/dist/css/mui.css';
import './static/css/style.css';
import router from './router/index'
import App from './components/app.vue'
import store from './store/store'

Vue.use(MintUi);

new Vue({
    el: '#app',
    router,
    store,
    render: (c) => {
        return c(App)
    }
})