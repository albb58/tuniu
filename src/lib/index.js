import Vue from 'vue'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import BS from 'better-scroll'
import 'mint-ui/lib/style.css'
import { InfiniteScroll ,Lazyload} from 'mint-ui';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(InfiniteScroll)
Vue.use(Lazyload);
// import zepto from 'zepto'
require('../mock/api/mock')
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.BS = BS
// Vue.prototype.$ = zepto