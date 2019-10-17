Page({
  data: {    
    array: ['商品名称','商品编码'],
    index: 0,
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
      {title:'品牌1', entitle: '品牌1', icon:'/image/category.png'}
    ],
    },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
  onLoad() {},
  onItemTap(event){
    console.log(event)
    dd.navigateTo({
      url:"/pages/product_lists/product_lists"
    })
  },
});
