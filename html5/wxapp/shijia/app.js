//app.js
import db from './assets/db.js'

App({
  onLaunch:function (){
    Object.assign(this.globalData,db);
  },
  //app 应用启动onlauch
  // //全局的 pages
  // onLaunch: function () {
  //   wx.request({
  //     url: 'https://resources.ninghao.net/wxapp-case/db.json',
  //     success: (response) => {
  //       console.log(response);
  //     },
  //     fail:(error) => {
  //       console.log(error);
  //     }
  //   })
    
  // },
  globalData: {
  }
})