<template>
    <article>
        <m-header></m-header>
        <top-swiper></top-swiper>
        <m-destination></m-destination>
        <p-header class="p_header"></p-header>
    </article>
</template>
<script>
import TopSwiper from './swiper/main_top_swiper'
import destination from './destination/destination'
import MHeader from '../head/head'
import PHeader from './product/prd'
import MLHead from './product/litle'
import Cookie from 'js-cookie'
console.log(Cookie,9554654545454)
            Cookie.set('chenzexin',6666)

export default {
    components :{
        TopSwiper : TopSwiper,
        MDestination : destination,
        MHeader : MHeader,
        PHeader,
    },
    beforeCreate(){
        console.log( navigator.geolocation)
        navigator.geolocation.getCurrentPosition(pos);
        function pos(poss){
            Cookie.set("mypositionlatitude",poss.coords.latitude)
            console.log(poss.coords)
            Cookie.set("mypositionlongitude",poss.coords.longitude)
        }
    }
}
</script>
<style lang="scss">
    .p_header{
        margin-top: 10px;
    }
</style>


