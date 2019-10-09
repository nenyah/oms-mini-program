/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-09-26 10:10:23
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-09 16:09:42
 */
const app = getApp()
Page({
  data: {
    total: false, //是否全选
    totalPrice: 0, //总价
    list: [
      {
        'id': 1, 'select': false, 'img': '/images/product_detail1.jpg', 'title': '人血白蛋白', 'spec': '1.5g', 'price': 360, 'num': 99
      },
      {
        'id': 2, 'select': false, 'img': '/images/product_detail1.jpg', 'title': '人血白蛋白', 'spec': '1.5g', 'price': 360, 'num': 99
      },
      {
        'id': 3, 'select': false, 'img': '/images/product_detail1.jpg', 'title': '人血白蛋白', 'spec': '1.5g', 'price': 360, 'num': 99
      },
      {
        'id': 4, 'select': false, 'img': '/images/product_detail1.jpg', 'title': '人血白蛋白', 'spec': '1.5g', 'price': 360, 'num': 99
      },
      {
        'id': 5, 'select': false, 'img': '/images/product_detail1.jpg', 'title': '人血白蛋白', 'spec': '1.5g', 'price': 360, 'num': 99
      },
    ],
    isEdit: false
  },
  totalPrice() {//计算总价
    let that = this
    let price = 0
    for (let i = 0; i < that.data.list.length; i++) {
      if (that.data.list[i].select) {
        price = price + that.data.list[i].price * that.data.list[i].num
      }
    }
    this.setData({
      totalPrice: price.toFixed(2)
    })

  },
  totalFun() { //全选
    this.data.total = !this.data.total
    // for (let i = 0; i < this.data.list.length; i++) {
    //   if (this.data.total) {
    //     this.data.list[i].select = true
    //   }else{
    //     this.data.list[i].select = false
    //   }
    // }
    this.data.list.map((v, k) => {
      if (this.data.total) {
        v.select = true
      } else {
        v.select = false
      }
    })
    this.setData({
      list: this.data.list,
      total: this.data.total
    })

    this.totalPrice()
  },
  labelFun(e) {//单选
    let that = this
    let num = 0
    for (let i = 0; i < that.data.list.length; i++) {
      if (that.data.list[i].id == e.currentTarget.dataset.id) {
        if (!that.data.list[i].select) {
          that.data.list[i].select = true
        } else {
          that.data.list[i].select = !that.data.list[i].select
        }
        that.setData({
          list: that.data.list
        })
      }

      if (that.data.list[i].select) {
        num++
        if (num == that.data.list.length) {
          that.setData({
            total: true
          })
        } else {
          that.setData({
            total: false
          })
        }
      }
    }
    this.totalPrice()
  },
  editFun() { //编辑
    this.setData({
      isEdit: !this.data.isEdit
    })

    if (!this.data.isEdit) {
      console.log(this.data.list)
      app.http('v1/order/editCart', { list: this.data.list }, "POST")
        .then(res => {
          console.log(res)
        })
    }
  },
  plusFun(item) { //增加商品数量
    this.data.list.map((v, k) => {
      if (v.id == item.target.dataset.item.id) {
        this.data.list[k].num++
      }
    })

    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  reduceFun(item) { //减少商品数量
    this.data.list.map((v, k) => {
      if (v.id == item.target.dataset.item.id) {
        if (this.data.list[k].num > 1) {
          this.data.list[k].num--
        }
      }
    })
    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  delItemFun(item) { //删除单商品

    let id = item.target ? item.target.dataset.item.id : item.id

    this.data.list.map((v, k) => {
      if (v.id == id) {
        this.data.list.splice(k, 1)
      }
    })

    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  delFun() { //选中删除
    let list = []

    this.data.list.map((v, k) => {
      if (!v.select) {
        list.push(v)
      }
    })

    this.setData({
      list: list
    })

    this.totalPrice()

  },
  closeFun: function () {
    let list = []
    let listTotal = []
    this.data.list.map((v, k) => {
      if (v.select) {
        list.push(v)
      } else {
        listTotal.push(v)
      }
    })
    dd.navigateTo({
      url: '/pages/generate_order/generate_order'
    })
    // app.http('v1/order/set', { goods: list }, "POST").then(res => {
    //   if (res.code == 200) {
    //     app.http('v1/order/editCart', { list: listTotal }, "POST")
    //       .then(res => {
    //         console.log(res)
    //       })
    //     wx.navigateTo({
    //       url: "/pages/orderDetails/index?id=" + res.data._id
    //     });
    //   }
    // })

  },
  onLoad() { },
  onShow: function () {
    // app.http('v1/order/cartList').then(res => {
    //   console.log(res.data)
    //   let list = []
    //   res.data.map((v, k) => {
    //     list.push({
    //       img: v.img,
    //       num: v.num,
    //       price: v.price,
    //       spec: v.spec,
    //       title: v.title,
    //       id: v.id,
    //       select: false
    //     })
    //   })
    //   this.setData({
    //     list: list,
    //     total: false,
    //     totalPrice: 0,
    //   })
    // })
  },
});
