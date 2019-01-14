<template>
    <el-carousel  :interval="500" arrow="never" ref='carousel' autoplay loop height='75px'>
        <el-carousel-item v-for="(item) in swiperUrl" :key="item" >
            <img v-lazy='item' style="width:100%" >
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import { Carousel,CarouselItem} from 'element-ui'
export default {
    data () {
        return {
            swiperUrl : [
                "https://m.tuniucdn.com/fb2/t1/G2/M00/81/20/Cii-TFj0m3WII6uwAAFUmD33YmUAAJQzwN-ED8AAVSw27_w640_h0_c0_t0_w640_h0_c0_t0_w640_h0_c0_t0.jpeg",
                'https://m1.tuniucdn.com/fb2/t1/G5/M00/7E/56/Cii-tFvbuyKIUhpeAAKLCsYAE70AAP90QIASfcAAosi54_w640_h0_c0_t0_w640_h0_c0_t0_w640_h0_c0_t0.jpeg',
                'https://m3.tuniucdn.com/fb2/t1/G5/M00/97/10/Cii-s1vuq2WIey0LAAHeQcZOVfgAAQliwOsd_8AAd5Z09_w640_h0_c0_t0_w640_h0_c0_t0_w640_h0_c0_t0.jpeg',
                'https://m3.tuniucdn.com/fb2/t1/G5/M00/A4/93/Cii-tFv3thSIHIM1AAJKXFgKnp4AAQ1HgBWar4AAkp072_w640_h0_c0_t0_w640_h0_c0_t0_w640_h0_c0_t0.jpeg'
            ]
        }
    },
    methods : {
        a(index,e){
            if(index<this.swiperUrl.length){
                // this.$refs.carousel.setActiveItem(index+1)
                console.log(e)
                // console.log(e.changedTouches[0].clientX)
                // this.$refs.carousel.prev()
            }
        }
    },
    components : {
        [Carousel.name] : Carousel,
        [CarouselItem.name] : CarouselItem
    }

}
</script>

<style>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    height : 30px;
    }

    .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    }
    .el-carousel__indicator{
        padding: 4px 4px !important;
    }
    .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    }
    .el-carousel__button{
        width: 15px !important;
    }
    .is-active button{
        background:#23cc77;
    }
</style>