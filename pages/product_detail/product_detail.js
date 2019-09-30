/*
 * @Description: product.js
 * @Author: Steven
 * @Date: 2019-09-30 10:51:57
 * @LastEditors: Steven
 * @LastEditTime: 2019-09-30 14:20:33
 */

Page({
  data: {
    array: ['商品名称', '商品编码'],
    index: 0,
    avater: "/image/home.png",
    // banner
    imgUrls: [
      "https://m.360buyimg.com/n12/jfs/t11317/108/1080677336/325163/f4c2a03a/59fd8b17Nbe2fcca3.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/jfs/t11575/282/348533702/60173/d75cd1cc/59edb8d6N688b420f.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/jfs/t11536/279/360605865/15194/442cab0b/59edb8d3N163a7608.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/s750x750_jfs/t9733/126/2033941175/68120/a4eb4468/59edb8d6N37bea6f7.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/s750x750_jfs/t10744/195/2053933852/71608/94425578/59edb8d6Ne28c70ff.jpg!q70.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
  },
  onLoad() { },
  handletap(event) {
    console.log(event);
    dd.navigateTo({ url: '/pages/product_search/product_search' })
  },
});
