import Vue from 'vue'
import Vuex from 'vuex'
import advstore from '@S/stores/advstore'
import pdhstore from '@S/stores/pdheads'
Vue.use(Vuex)


export default new Vuex.Store({
    modules : {
        advstore,
        pdhstore
    }
})
