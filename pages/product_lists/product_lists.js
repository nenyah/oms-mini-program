Page({
  data: {
    array: ['商品名称','商品编码'], 
    index: 0,
    navbarActiveIndex: 0,
    navbarTitle: [
      '全部',
      '美容',
      '依婉',
      '幸福缪斯'
    ]
    },
  onLoad() {},
  /**
   * 点击导航栏
   */
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex      
    })
  },

  /**
   * 
   */
  onBindAnimationFinish: function ({detail}) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  }
});
