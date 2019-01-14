<template>
<div class="adv_big_box">
    <div class="ssticky">
        <nav  style="height: 520px" ref="bs_wrapper" >
            <ul class="adv_nav_box">
                <!-- {{nav}} -->
                <li class="adv_nav" 
                    :key="index" 
                    v-for="(item,index) in nav"
                    @touchstart="()=>changeactive(index)"
                    :class="{'active' :index == num}"
                >
                <!-- 通过当前data的num和li的index是否相同来添加active -->
                    <span >
                        {{item.tagName}}
                    </span>
                </li>
            </ul>
        </nav>
        <div class="abox" >
        </div>
    </div>
    <div class="adv_info" ref="top" >
        <ul style="padding-top: 1px;">
            <li :key="index" v-if="index!=0" v-for="(item,index) in advgetter(num)">
                <!-- num对应左边列表的编号,左边列表和右边内容的顺序和角标是一一对应的，所以可以根据num getter想要的第几个数据 -->
                <ul>
                    <li class="floors" :key="index" v-for="(floors,index) in item.floors" >
                        <div class="floors_floorsname">{{floors.floorName}}</div>
                        <ul>
                            <li v-if="element.touristNum" :class="{'bigimg':element.touristNum}" :key="index" v-for="(element,index) in floors.element">
                                <div  class="bigimg_img" :style="{backgroundImage:'url('+element.imgUrl+')'}"  alt=""></div>
                                <div class="font_box">
                                    <h3 class="element_name">{{element.eleName}}</h3>
                                    <p class="element_description">{{element.description}}</p>
                                </div>
                            </li>
                            <li v-else :class="computedClass(floors.element)">
                                <div  class="smallimg_img" :style="{backgroundImage:'url('+element.imgUrl+')'}"  alt=""></div>
                                <div class="font_box">
                                    <h3 class="element_name">{{element.eleName}}</h3>
                                </div>
                            </li>

                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- {{advgetter(this.num)}} -->
    </div>
</div>

</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapActions,mapGetters,mapState} = createNamespacedHelpers('advstore')
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            num : 0
        }
    },
    async created() {
        this.nava().then()

    },
    methods : {
        ...mapActions(['nava']),
        changeactive(index){
            this.num = index
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0

        },
        fun(i){
            console.log(i)
        },
        computedClass(ele){
            switch(ele.length){
                case 4 : return 'fourImg';
                case 3 : return 'threeimg' ;
                default : return ''
            }
        }
    },
    computed : {
        ...mapState(['nav']),
        ...mapGetters(['advgetter']),
        //advgetter返回的是一个方法，方法中要传入一个index，也即是this.num
    },
    mounted(){
        this.$nextTick(()=>{
            setTimeout(()=>{
            new this.BS(this.$refs.bs_wrapper,{
                click : true,
                bounce : false
            })
            },100)
        })
    }
}
</script>
<style lang="scss">
    @mixin clearfix {
        &::after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            overflow: hidden;
        }
    }
    .ssticky{
        position: sticky;
        height: 555px;
        top : 50px;
    }
    .adv_big_box{
        display: flex;
    }
    .adv_info{
        flex: 1 0;
        padding: 0 8px;
        background: white;
        .floors{
                margin-top: 13px;
                margin-left: -5px;
                @include clearfix;
                .floors_floorsname{
                    font-size: 14px;
                    color: #999;
                    height: 20px;
                    /* border-left: #2dbb55 solid 2px ; */
                    padding-left: 15px;
                    line-height: 20px;
                    position: relative;
                    margin-bottom: 10px;
                    &::before{
                        content: "";
                        width: 3px;
                        height: 14px;
                        background: #2dbb55;
                        display: block;
                        position: absolute;
                        left: 5px;
                        top: 4px;
                    }
                }
                .bigimg{
                    padding: 5px;
                    .bigimg_img{
                        background-position-y:center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        height: 90px; 
                    }
                    .font_box{
                        border:solid #dfdfdf 1px;
                        padding-bottom: 10px;

                        .element_name{
                            font-size: 18px;
                            /* padding-top: ; */
                            padding:5px 9px  0px;
                        }
                        .element_description{
                            font-size: 12px;
                            color: #999;
                            padding:5px 9px  0px;
                        }
                    }
                }
                .fourImg{
                    width: 32.9%;
                    /* display: inline-block; */
                    float: left;
                    height: 91px;
                    padding-left: 5px;
                    .smallimg_img{
                        height: 55px;
                        background-position-y: center;
                        background-size: cover;
                    }
                    .font_box{
                        border:solid #dfdfdf 1px;
                        height: 36px;
                        line-height: 36px;
                        font-size: 16px;
                        color: #222;
                        padding-left: 9px; 
                    }
                }
                .threeimg{
                    width: 49%;
                    height: 111px;
                    float: left;
                    padding-left: 5px;
                    .smallimg_img{
                        height: 82px;  
                        background-position-y: center;
                        background-size: cover;
                    }
                    .font_box{
                        border:solid #dfdfdf 1px;
                        height: 36px;
                        line-height: 36px;
                        font-size: 16px;
                        color: #222;
                        padding-left: 9px; 
                    }
                }

        }

    }
    .adv_nav_box{
        width: 75px;
        position: sticky;
        top: 0px;
        /* background: #fff; */
        color:  #666;
        font-size: 14px;
        line-height: 43px;
        overflow: hidden;
        text-align: center;
        .adv_nav{
            border-bottom: 1px solid #e9e9ea;
            border-left: 3px solid transparent;
        }
        .adv_nav.active{
            background: white;
            border-left: 3px solid #2dbb55;
        }
    }
        .abox{
            width: 75px;
            height: 100px;
            background: white;
            position: fixed;
            bottom: 0;
        }
</style>
