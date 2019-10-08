App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  request: function (url, data='', method="GET") { //封装http请求
    const apiUrl = 'https://wx.yogalt.com/api/' //请求域名
    console.log(this.globalData)
    const currency = {
      openid: this.globalData.openid
    }
    return new Promise((resolve, reject) => {
      dd.request({
        url: apiUrl + url,
        data: Object.assign(currency,data),
        method: method,
        success: function (res) {
          if(res.data.code != 200){
            wx.showModal({
              title: '提示',
              content: res.data.message,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
          resolve(res.data)
        },
        fail: function (res) {
          reject(res);
        },
        complete: function () {
          console.log('complete');
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    openid:null
  }
});
