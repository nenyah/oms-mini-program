/*
 * @Description: product.js
 * @Author: Steven
 * @Date: 2019-09-30 10:51:57
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-08 13:25:49
 */

Page({
  data: {
    array: ['商品名称', '商品编码'],
    index: 0,
    avater: "/images/home.png",
    // banner
    imgUrls: [
      "/images/product_detail1.jpg",
      "/images/product_detail1.jpg",
      "/images/product_detail1.jpg",
      "/images/product_detail1.jpg",
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    specIs: false,
  },
  onLoad() { },
  handletap(event) {
    console.log(event);
    dd.navigateTo({ url: '/pages/product_search/product_search' })
  },
  specFun() {
    this.setData({
      specIs: !this.data.specIs
    })
  },
  addCart() {
    this.specFun()
    dd.showToast({
      type: 'success',
      content: '加入购物车成功',
      duration: 1000,
      success: () => {

      },
    })
  },
});
