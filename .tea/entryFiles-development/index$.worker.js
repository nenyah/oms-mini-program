if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../pages/login/login');
require('../../pages/index/index');
require('../../pages/test/test');
require('../../pages/cart/cart');
require('../../pages/about/about');
require('../../pages/product_search/product_search');
require('../../pages/product_lists/product_lists');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}