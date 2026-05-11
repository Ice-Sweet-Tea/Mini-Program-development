// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 发起GET数据请求
  getInfo() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: 20
      },
      success: (res) => {
        console.log(res.data);
      }
    })
  },
  // 发起POST数据请求
  postInfo(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/post',
      method:"POST",
      data:{
        name:'ls',
        age:33
      },
      success:(res)=>{console.log(res.data);}
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getInfo()
    this.postInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  // 通过编程式导航跳转到 tabBar 页面
  gotoMessage(){
    wx.switchTab({
      url: '/pages/message/message',
    })
  },
  // 通过编程式导航，跳转到 info 页面
  gotoInfo(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  // 通过编程式导航，跳转到 info 页面，并携带参数
  gotoInfo2(){
    wx.navigateTo({
      url: '/pages/info/info?name=ls&gender=男',
    })
  }, 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})