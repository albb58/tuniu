import axios from 'axios'
const actions = {
    nava({commit}){
        axios.get('https://m.tuniu.com/mapi/global/getGlobalIndex?cityCode=200&channelCode=40000').then(res=>{
            commit({
                type : 'NAV_ADV',
                nav : res.data.data.tags
            })
        })
    }
}

export default actions