// pages/projectManagement/projectManagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myProjectList:[
      {},
      {},
      {},
      {}
    ]
  },
  // 审核中
  goAuditProject(){
    wx.navigateTo({
      url: '/pages/auditProject/auditProject',
    })
  },
  // 审核通过
  goPassedProject(){
    wx.navigateTo({
      url: '/pages/projectDetail/projectDetail',
    })
  },
  // 项目完成
  goFinishProject(){
    wx.navigateTo({
      url: '/pages/finishProject/finishProject',
    })
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