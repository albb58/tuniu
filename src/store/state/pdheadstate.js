const state = {
    /**
     * 二级菜单数据 
     */
    pd : [
        {num : 0 , title : '当季热销'},
        {num : 1 , title : '出境游'},
        {num : 2 , title : '国内游'},
        {num : 3 , title : '周边游'},
    ],

    /**
     * 二级菜单数据 
     */
    pdsec : [{}],

    /**
     * 二级菜active单角标
     */
    pdsecindex : 0,

    /**
     * api的id
     * api的page
     */
    apiid : 15539530,
    apipage : 1,
    /**
     * 产品主列表
     */
    pdlistdata : []

}
export default state