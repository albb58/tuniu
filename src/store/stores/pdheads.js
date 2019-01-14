//商品头信息
import state from '../state/pdheadstate'
import mutations from '../mutation/pdheadmutation'
import actions from '../action/pdheadaction'
import getters from '../getter/pdheadgetter'

const store = {
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}
export default store