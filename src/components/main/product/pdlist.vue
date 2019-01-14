<template>
<div >
    <ul class="pd_list-block"
        ref = 'list'
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li class="pd_list_item" 
            :key='index' 
            v-for="(item,index) in pdlistdata"
            @click="gotodetail"
            >
            <div class="pd_list_head">
                <div class="pd_list_img_box">
                    <img class='pd_list_img' :src="item.imgUrl" alt="">
                    <div class="price">
                        ￥<em>{{item.promotionPrice}}</em>起
                    </div>
                    <div class="sati-peo">
                        <div class="peo">{{item.peopleCount}}人出游</div>
                        <div class="sati">{{item.satisfaction}}满意</div>
                    </div>
                    <div class="prdextra">
                        <i :class="icontype(item.iconType)" class="fa" style="marginRight:2px"></i>
                        <div>{{item.productTypeName}}</div>
                        <div>|</div>
                        <div>{{item.departCityName}}出发</div>
                    </div>
                </div>
            </div>
            <div class="pd_list_body">
                <h5>{{item.title}}</h5>
                <p>{{item.subTitle}}</p>
            </div>
        </li>
    </ul>
    </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
import { InfiniteScroll } from 'mint-ui';
const {mapActions,mapState,mapMutations} = createNamespacedHelpers('pdhstore')
export default {

    data(){
        return {
            loading : false,
        }
    },
    created() {

    },
    computed : {
        ...mapState(['pdlistdata','apiid','apipage'])
    },
    methods : {
        ...mapMutations(['PDLIST_API_PAGE']),
        loadMore(){
            this.loading = true;
            this.$store.dispatch({
                type : 'pdhstore/pdlist',
                page : this.apipage,
                apiid : this.apiid
            })
            this.PDLIST_API_PAGE();
            this.loading = false;
        },
        icontype(type){
            switch(type){
                case 1 : return 'fa-flag';
                case 2 : return 'fa-briefcase';
                default : return 'fa-flag'
            }
        },
        gotodetail(){
            this.$router.push({
                name : "detail",
                query : {
                    name :1
                }
            })
        }
    },
    mounted() {
        var a = 55 //{#}
    },
    updated() {
        this.$refs.list.scrollTop = 0
    },

}
</script>
<style lang="scss">
    .pd_list-block{
        width: 100%;
        position: relative;
        
        .pd_list_item{
            .pd_list_head{
                .pd_list_img_box{
                    height: 150px;
                    overflow: hidden;
                    position: relative;
                    .pd_list_img{
                        position: absolute;
                        top : 50%;
                        transform: translateY(-50%);
                        width: 100%;

                    }
                    image[lazy=loading] {
                        width: 375px;
                        height: 250px;
                        position: absolute;
                        top : 50%;
                        transform: translateY(-50%);
                        width: 100%;
                    }
                    .price{
                        color: white;
                        position: absolute;
                        bottom: 8px;
                        left: 6px;
                        width: 91px;
                        height: 31px;
                        background: #f70;
                        text-align: center;
                        line-height: 31px;
                        border-radius: 5px;
                        em{
                            font-size: 16px;
                        }
                    }
                    .sati-peo{
                        position: absolute;
                        bottom: 9px;
                        right: 12px;
                        .peo{
                            margin-right: 5px;
                        }
                        div{
                            float: left;
                            color: white;
                        }
                    }
                    .prdextra{
                        width: 144px;
                        height: 24px;
                        border-radius: 15px;
                        background: rgba($color: #000000, $alpha: 0.2);
                        position: absolute;
                        top: 0;
                        display: flex;
                        color: white;
                        padding: 0 15px;
                        align-items: center;
                        justify-content: center;
                        div:nth-of-type(2){
                            margin: 0 5px;
                        }
                    }
                }
            }
            .pd_list_body{
                padding:10px 15px; 
                h5{
                    font-size: 16px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-right: 10px;
                }
                p{
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-right: 10px;
                    line-height: 20px;
                }
            }
        }
    }
</style>


