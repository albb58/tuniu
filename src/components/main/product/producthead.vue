<template >
    <ul class="the_list_ul">
        <li class="the_list_li" 
        :m="index" 
        :class="{'active' : index==num}" 
        @click="()=>changeactive(index)" 
        :key="index" 
        v-for="(item,index) in arr">
            {{item.title}}
        </li>
    </ul>
</template>
<script>
import bus from '@LIB/bus'
export default {
    props : {
        arr : Array,
    },
    data(){
        return {
            num : 0
        }
    },
    methods : {
        changeactive(index){
            this.num = index
            bus.$emit('secindexchange',index)
            this.$store.commit({
                type : 'pdhstore/PDSECLIST',
                payload : {
                    num : 0
                }
            })
        }
    }
}
</script>
<style lang="scss" >
    .the_list_ul{
        position: relative;
        display: flex;
        height: 45px;
        &::after{
            content : '';
            width: 100%;
            height: 1px;
            background: #38bf5e;
            display: block;
            position: absolute;
            bottom: 0;
        }
        .the_list_li{
            flex: 1;
            text-align: center;
            height: 45px;
            background: white;
            color: black;
            font-size: 16px;
            line-height: 45px;
        }
        .the_list_li.active{
            border-bottom: 2px solid #38bf5e;
        }
    }
</style>


