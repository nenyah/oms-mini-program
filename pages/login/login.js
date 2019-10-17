Page({
  data: {},
  onLoad() {},
  login(event){
    console.log(event)
    if(this._isAuthourized()) {
      dd.redirectTo({
        url:"/pages/index/index"
      })
    }
  },
  _isAuthourized(){
    return true
  },
});
