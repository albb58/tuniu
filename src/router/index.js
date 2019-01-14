import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path : '',
        name : 'home',
        // component : resolve=>require(["@C/main/main"],resolve)//这是一个promise 必须在require的回调函数中resolve（）才会继续
        component :  r => require.ensure([], () => r(require('@C/main/main')), 'chunkname1')
        //[]里面可以放进去我们所要引用的组件所依赖的组件，因为我们只是想引入一个组件没有依赖，所以数组为空
        //第二个是一个回调函数，当第一个参数[]里面的依赖模块全部加载完毕后，执行这个回调，
        //第三个参数是一个字符串，代表我们webpack分模块打包之后会生成的模块的名字，我们自定义，名字一样的会打包到一起
        //https://blog.csdn.net/qq_27626333/article/details/76228578
    },
    {
        path : '/adv',
        name : 'adv',
        // component :  resolve=>require(["@C/main/advertising"],resolve)
        component :  r => require.ensure([], () => r(require('@C/main/advertising')), 'chunkname2'),
        beforeEnter: (to, from, next)=>{
            if(from.name==='home'){
                console.log('home')
            }
            console.log(from)
            next()
        },
        meta : {
            require : true
        }

    },
    {
        path : '/home',
        name : 'home',
        // component :  resolve=>require(["@C/main/main"],resolve)
        component :  r => require.ensure([], () => r(require('@C/main/main')), 'chunkname3')
    },
    {
        path : '/detail',
        name : 'detail',
        // component : resolve=>require(["@C/detail/detail"],resolve)
        component :  r => require.ensure([], () => r(require('@C/detail/detail')), 'chunkname4')
    }
]

export default new Router ({
    routes ,
    mode: 'history',
})