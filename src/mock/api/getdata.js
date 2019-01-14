import $ajax from './config'

/*登录接口*/
export const login = data => $ajax.get('/api/login',data)

/*忘记密码 */
export const forgetpassword = data =>$ajax.get('/api/forgetpassword',data)

/*近三个月数据统计 */
export const threemonth = data =>$ajax.get('/api/threemonth',data)

export const getgirls = () =>$ajax.get('/api/girls')

/*获得二级菜单的数据 */
export const getsecdata = ()=>$ajax.get('/api/advsecmenu')

/*获取商品列表*/
export const getpdlist = (page,apiid)=>$ajax.get(`https://m.tuniu.com/mapi/home/getProductList?cityCode=200&moduleId=${apiid}&currentPage=${page}&pageLimit=10`)
