// es6 模块化语法 module
// js 变量或常量， 他的类型由值决定
const testDrive = () =>{
    // 用于来自微信的api
    // 原生的api 大部分的小程序html
    // webview nativeview
    // 性能比原生的慢一些。
    wx.showToast({
        title: '暂不支持'
    })
}

export default testDrive