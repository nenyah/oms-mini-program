Page({
  data: {

  },
  onLoad() {
    dd.httpRequest({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        from: '钉钉',
        production: 'Dingtalk',
      },
      dataType: 'json',
      success: function(res) {
        dd.alert({content: 'success'});
      },
      fail: function(res) {
        dd.alert({content: 'fail'});
      },
      complete: function(res) {
        dd.alert({content: 'complete'});
      }
    })
  },

});
