/*
 * @Description: 订单详情
 * @Author: Steven
 * @Date: 2019-10-09 14:57:29
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-09 16:28:05
 */
import utils from '/utils/utils.js'
Page({
  data: {
    list: [{ //商品列表
      id: 2,
      img: '/images/product_detail1.jpg',
      title: "人血白蛋白",
      spec: "5g",
      price: 360.00,
      num: 2,
      select: false,
    },
    {
      id: 3,
      img: '/images/product_detail1.jpg',
      title: "人血白蛋白",
      spec: "10g",
      price: 360.01,
      num: 1,
      select: false
    }],
    address: { 'mobile': '159 **** 2694', 'name': '王天霸', 'city': ['浙江', '宁波', '北仑'], 'detailed': '大碶街道不知路不知号' },
    deliver_date:"",
    pay_date:"",
  },
  onLoad() { },
  _setDate(date_cate) {
    let today = utils.formatDate(new Date(),'-')
    dd.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: today,
      success: (res) => {
        this.setData({
          [date_cate]:res.date,
        })
      },
    })
  },
  choose_date(event){
    let date_cate = event.currentTarget.dataset.dateCate
    this._setDate(date_cate)
  },
});
