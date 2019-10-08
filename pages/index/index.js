Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    imgUrls: [ 
      '/images/banner1.jpg', 
      '/images/banner2.jpg', 
      '/images/banner3.jpg' 
    ],
    cates:[
      {title:'种类1', entitle: '种类1', icon:'/images/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/images/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/images/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/images/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/images/category.png'},
      {title:'种类1', entitle: '种类1', icon:'/images/category.png'}
    ],
    brands:[
      {title:'品牌1', entitle: '品牌1', icon:'/images/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/images/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/images/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/images/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/images/category.png'},
      {title:'品牌1', entitle: '品牌1', icon:'/images/category.png'},
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
