// components/tabbar/tabbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
  },
  onChange(event) {
    if(event.detail==0){
      wx.switchTab({
        url: '/pages/index/index',
      })
    }else if(event.detail==1){
      wx.switchTab({
        url: '/pages/project/project',
      })
    }else if(event.detail==2){
      wx.switchTab({
        url: '/pages/talent/talent',
      })
    }else if(event.detail==3){
      wx.switchTab({
        url: '/pages/person/person',
      })
    }
    this.setData({ active: event.detail });
    console.log(event.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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