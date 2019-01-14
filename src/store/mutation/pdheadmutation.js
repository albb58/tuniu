import {PDHEAD,PDLIST,PDSECLIST,PDLIST_API_PAGE,PDLIST_API_PAGE_NUM,NEWPDLIST,NEWAPIID} from './type'
const mutation = {
    [PDHEAD](state,{payload}){
        state.pdsec = payload
    },
    [PDLIST](state,{payload}){  
        let sth = state.pdlistdata
        state.pdlistdata = sth.concat(payload)
    },
    //二级菜单数据角标更改
    [PDSECLIST](state,{payload}){
        state.pdsecindex = payload.num
    },
    [PDLIST_API_PAGE](state){
        state.apipage++ 
    },
    [PDLIST_API_PAGE_NUM](state){
        state.apipage = 1
    },
    [NEWPDLIST](state,{payload}){
        state.pdlistdata = payload
    },
    [NEWAPIID](state,{payload}){
        state.apiid = payload.id
    }
}
export default mutation