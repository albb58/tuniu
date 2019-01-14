const getters = {
    pdheadgetter(state){
        return (index)=>{
            console.log(state.pdsec[index])
            return state.pdsec[index]
        }
    }
}
export default getters