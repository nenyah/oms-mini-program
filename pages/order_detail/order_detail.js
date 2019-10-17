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
    order_cate:"标准订单",
    client:"宁波北仑人民医院",
    contract_code:"SL100005296",
    deliver_date:"2019-09-30",
    payment_way:"帐期",
    pay_date:"2019-10-30",
    ship_way:"",
  },
  onLoad() { },
});
