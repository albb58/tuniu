import {getsecdata,getpdlist} from '@API/getdata'
const actions = {
    pdsecmenu({commit}){
        getsecdata().then((res)=>{
            const title = res.data.title
            commit({
                type : 'PDHEAD',
                payload : title
            }) 
        })
    },
    pdlist({commit},{page,apiid}){
        getpdlist(page,apiid).then((res)=>{
            if(res.data.data.totalPageCount!==0){
                commit({
                    type : 'PDLIST',
                    payload : res.data.data.products
                })
            }else{
                console.log('无更多数据')
            }
        })
    },
    newpdlist({commit},{page,apiid}){
        getpdlist(page,apiid).then((res)=>{
            if(res.data.data.totalPageCount!==0){
                commit({
                    type : 'NEWPDLIST',
                    payload : res.data.data.products
                })
                commit({
                    type : "PDLIST_API_PAGE_NUM"
                })
            }else{
                console.log('无更多数据')
            }
        })
    }
}
export default actions