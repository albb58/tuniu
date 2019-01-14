const getters = {
    advgetter : (state)=>{
        return (index)=>{
            return state.nav[index].modules
        }
    }
}
export default getters