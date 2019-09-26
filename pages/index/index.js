Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    imgUrls: [ 
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' 
    ],
    cates:[
      {title:'种类1', entitle: '种类1', icon:'/image/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/image/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/image/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/image/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/image/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/image/category.png'}
    ],
    brands:[
      {title:'品牌1', entitle: '品牌1', icon:'/image/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/image/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/image/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/image/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/image/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/image/category.png'},
    ]
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  handletap(event) {
    console.log(event);
    dd.navigateTo({url:'/pages/product_search/product_search'})
  },
});
