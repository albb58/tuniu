import state from '../state/advstate'
import mutations from '../mutation/advmutation'
import actions from '../action/advaction'
import getters from '../getter/advgetter'

export default  {
    namespaced : true,
    state,
    mutations,
    actions,
    getters
}