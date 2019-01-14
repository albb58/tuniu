import {NAV_ADV,DETAIL_ADV} from './type'

const mutations = {
    [NAV_ADV](state,payload){
        state.nav = payload.nav
    },
    [DETAIL_ADV](state,payload){
        state.detail = payload.detail
    },
}

export default mutations