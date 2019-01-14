<template>
    <header class="m_header sticky_header">
        <div class="m_header_bar">
            <div class="mhb_left">
                <div class="logo"></div>
                <a class="cities">
                    北京
                </a>
            </div>
            <div class="mhb_center">
                <div class="search_holder">
                     <i class="fa fa-search" style="color:#bbb;fontSize:16px"></i>
                     <span>日本</span>
                </div>
            </div>
            <div class="mhb_right">
                <a href="" class="headicon">
                    <i class="fa fa-user-o"></i>
                </a>
                <div class="head_nav">
                    <span>导航</span>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .m_header{
        &::before{
            content: '';
            display: block;
            width: 100%;
            height: 1px;
        }
    }
    .m_header{
        z-index: 1000;
        height: 50px;
        background: #2dbb55;
        position : sticky;
        padding-right: 100px;
        top: 0px;
        .m_header_bar{
            display: flex;
            align-items: center;
            height: 100%;
            .mhb_left{
                .logo{
                    width: 45px;
                    height: 50px;
                    padding:10px 5px 10px 10px;
                    box-sizing: border-box;
                    background: url(https://img1.tuniucdn.com/site/m2015/images/index/logo-2x.png) no-repeat;
                    background-position: center;
                    background-size: 30px 30px;
                    float: left;
                }
                .cities{
                    font-size: 16px;
                    color: white;
                    float: left;
                    display: block;
                    height: 50px;
                    line-height: 30px;
                    position: relative;
                    padding: 10px 22px 10px 5px;
                    width: 64px;
                    box-sizing: border-box;
                    &::after{
                        content: "";
                        display: block;
                        position: absolute;
                        border-left: 1px solid white;
                        border-bottom: 1px solid white;
                        width: 7px;
                        height: 7px;
                        right: 11px;
                        top: 21px;
                        transform: rotate(-45deg)
                    }
                }
            }
            .mhb_center{
                flex: 1;       
                .search_holder{
                    /* width: 160px; */
                    height: 30px;
                    background:white;
                    padding-left: 10px; 
                    border-radius: 2px;
                    box-sizing: content-box;
                    line-height: 30px;
                    color:#bbb;
                    font-family: "Helvetica"!important;
                    i{
                        font-size:14px;
                        padding-right: 5px;
                    }
                    span{
                        font-size: 14px
                    }
                }

            }
            .mhb_right{
                position: absolute;
                right: 0;
                top: 0;
                height: 50px;
                line-height: 50px;

                .headicon{
                    float: left;
                    color: white;
                    font-size: 24px;
                    font-weight: 100;
                    padding-left: 15px;
                    width: 40px;
                }
                .head_nav{
                    position: relative;
                    float: left;
                    width: 60px;
                    font-size: 16px;
                    color: white;
                    padding-right: 10px;
                    
                    span{
                        display: block;
                        width: 40px;
                    }
                    &::after{
                        content: "";
                        display: block;
                        position: absolute;
                        border-left: 1px solid white;
                        border-bottom: 1px solid white;
                        width: 7px;
                        height: 7px;
                        right: 11px;
                        top: 21px;
                        transform: rotate(-45deg)
                    }
                }
                       
            }
        }
    }

</style>


