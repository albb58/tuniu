<template>
    <section class="des_container">
        <h2 class='des_title'><span>目的地推荐</span></h2>
        <div class="desc_recomend">
            <ul class="desc_recomend_tab">
                <li class="recomend"  @click="()=>changeactive(index)"  v-bind:class="{'active':item.active}"  :key="index" v-for="(item,index) in tab">
                    {{item.title}}
                </li>
            </ul>
            <ul class="desc_recomend_content">
                <li class="destinations" :class="{'active' : active(item.title)}" :key='index'  v-for="(item,index) in uniqueData">
                    <ul class='des_card_box'>
                        <li class="des_card_container" :key="index" v-for="(o,index) in  item.destinationsWithImg">
                            <a>
                                <div class="card">
                                    <!-- <img :src="o.imgUrl" style="display:block"> -->
                                    <div class="img_box"  :style="{backgroundImage:'url(' + o.imgUrl + ')'}"></div>
                                    <div class="info">
                                        <p>{{o.title}}</p>
                                        <p>{{o.subTitle}}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul class="city_box">
                        <li class="city_item" :key="index" v-for="(city,index) in item.destinationsWithoutImg">
                            <span>{{city.title}}</span>
                        </li>
                    </ul>
                    <router-link tag="div" :to="{path:'/adv'}" class="btn_img"  v-if="item.buttons" style="height:47px" :style="{backgroundImage:'url('+item.buttons[0].bottomImg+')'}"></router-link> 
                </li>
            </ul>
        </div>
        <ul>

        </ul>
    </section>
</template>
<script>
export default {
    data(){
        return {
            tab : [
                {active : true,title : '热门目的地' },
                {active : false,title : '海岛精选' },
                {active : false,title : '当季精选' }
            ],
            uniqueData : []
        }
    } ,
    created() {
        this.axios.get('http://localhost:8081/api/getUniqueData')
                  .then(res=>{
                    this.uniqueData = res.data.data.destinations.tabs
                  })
        
    },
    methods : {
        changeactive(index){
            this.tab.forEach((element,theindex) => {
                theindex==index?element.active=true:element.active=false
            });
        },
        active(title){
            let flag = false
            for(var i = 0 ;i<this.tab.length; i++){
                if(this.tab[i].active&&this.tab[i].title===title){
                    flag = true
                    break
                }
            }
            return flag
        },
        fun(){
            alert(1)
        },
        route(){
            this.$router.push({path : 'adv'})
        }
    }
}
</script>
<style lang="scss">
    .des_container{
        background: white;
        padding: 10px 10px 0 10px;
        margin-top : 10px;
            .des_title{
                font-size: 1.6rem;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 130px;
                margin: auto;
                margin-bottom: 18px;
                &::after,&::before{
                    content: '';
                    display: block;
                    width: 15px;
                    height: .1rem;
                    background: linear-gradient(to right,#878787, #dfdfdf);
                    /* position: absolute; */
                }
        }
    }
    .desc_recomend{
        .desc_recomend_tab{
            display: flex;
            justify-content: space-around;
            margin: 0 9px 20px;
            li{
                font-size: 14px;
                height: 27px;
                flex: 1;
                text-align: center;
                border-bottom: 2px solid #dfdfdf
            }
            .recomend.active{
                border-bottom: 2px solid red
            }

        }
        .desc_recomend_content{
            display: flex;
            margin-right: -19px;
            .destinations{
                display:none;
            }
            .destinations.active{
                display: block;
                flex: 1 0;
                .des_card_box{
                    display: flex ;
                    width: 100%;
                    margin-bottom: 10px;
                    .des_card_container{
                        flex: 1 0;
                        .card{
                            margin-right: 14px;
                            border: 1px solid #f6f6f8;
                            padding-bottom: 9px;
                            .img_box{
                                height: 80px;
                                background-position: center center;
                                background-size: cover;
                            }
                            .info{
                                p:nth-child(1){
                                    text-align: center;
                                    font-size: 14px;
                                    line-height: 23px;
                                    height: 23px;
                                }
                                p:nth-child(2){
                                    text-align: center;
                                    color: #666;
                                }
                            }

                        }
                    }
                }
                .city_box{
                    display: flex;
                    flex-wrap:wrap;
                    .city_item{
                        width: 111px;
                        text-align: center;
                        margin-right: 12px;
                        margin-bottom: 10px;
                        flex-grow:  1;
                        span{
                            display: block;
                            border: 1px solid #f6f6f8;
                            height: 38px;
                            font-size: 14px;
                            line-height: 38px;
                        }
                    }
                }
                .btn_img{
                    margin-top: -10px;
                    background-size: contain;
                    background-position: center center;
                    background-repeat: no-repeat;
                }
            }
        }
    }

</style>
