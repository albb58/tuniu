<template>
    <button class="default"  :class="size" :disabled="disabled" :style="{backgroundColor : color}" @click="fun">
        <slot>提交</slot>
        <div>{{nowdata}}</div>
    </button>    
</template>
<script>
export default {
    props : {
        size : "",
        color : "",
        myclick : "",
        time : ""
    },
    
    created(){
        this.gettime()
    },
    methods : {
        fun(){
            this.$emit("on-click")
        },
        gettime(){
            this.nowdata = this.time
            var a = this.nowdata
            if(this.nowdata){
                this.timer = setInterval(()=>{
                    console.log(54)
                    if(this.nowdata){
                        this.nowdata = --a
                    }else{
                        clearInterval(this.timer)
                        this.disabled =false
                    }
                },1000)
            }
            
        }
    },
    data(){
        return {
            disabled :true,
            nowdata : 0
        }
    },
    destroyed(){
        clearInterval(this.timer)
    }
    
}
</script>
<style lang="scss">
    .default{
        background: rebeccapurple;
        width: 100px;
        height: 100px;
    }
    .default.large{
        width: 200px;
        height: 200px;
    }
</style>

