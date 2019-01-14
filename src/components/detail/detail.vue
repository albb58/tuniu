<template>
    <div>
        <i-button size="large" color="green" @click.native="fun" time="10">
            <!-- asdadasdasd -->
        </i-button>
        {{$route.query.name}}
        <h1></h1>
        <router-link 
            tag="div"
            :to="'/'"
        >gogogogogogogogogo</router-link>
    </div>
</template>
<script>
import button from '../util/button'
export default {
    data(){
        return {
            
        }
    },
    components : {
        IButton : button 
    },
    methods : {
        fun(){
            console.log(999999999999)
        }
    },
    created(){
        console.log(this.$route.query.name)
        console.log("https://m.tuniu.com/tour/210605059#")
        console.log(decodeURIComponent(decodeURI(decodeURI("https://m.tuniu.com/wap-detail/api/self/detail/getProductInfo?d=%7B%22productId%22%3A%22210225896%22%2C%22journeyId%22%3A0%2C%22bookCityCode%22%3A%22200%22%7D&_=1544022030530"))) )
    }
}
</script>
<style lang="scss">

</style>


