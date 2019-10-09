/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-10-08 13:38:38
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-08 15:40:09
 */
import utils from '../../utils/utils.js'

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
    data: null,
    isEdit: false,
    items: ['标准订单', '调货发货订单', '退货订单', '调货退货订单', '红票折让'],
    order_cate: '',
    client: '请选择客户',
    ship_date: '',
    pay_date: '',
  },
  onLoad() { },
  choose_order_cate() {
    dd.showActionSheet({
      items: this.data.items,
      success: (res) => {
        console.log(res)
        this.setData({
          order_cate: this.data.items[res.index]
        })
      },
    })
  },
  choose_ship_date(e) {
    // console.log(e)
    var today = new Date()
    today = utils.formatDate(today, '-')
    dd.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: today,
      success: (res, ) => {
        this.setData({
          ship_date: res.date,
        })
      },
    })
  },
  choose_pay_date(e) {
    // console.log(e)
    var today = new Date()
    today = utils.formatDate(today, '-')
    dd.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: today,
      success: (res, ) => {
        this.setData({
          pay_date: res.date,
        })
      },
    })
  },
});
