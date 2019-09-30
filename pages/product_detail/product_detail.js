Page({
  data: {
    array: ['商品名称','商品编码'],
    index: 0,
    avater:"/image/home.png"
  },
  onLoad() {},
  handletap(event) {
    console.log(event);
    dd.navigateTo({url:'/pages/product_search/product_search'})
  },
});
