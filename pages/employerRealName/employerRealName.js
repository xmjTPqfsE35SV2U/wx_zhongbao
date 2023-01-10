// pages/employerRealName/employerRealName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用户名
    username:"",
    // 密码
    cardID:"",
    // 身份证正面
    frontoIdCardUrl:"",
    // 反面
    reverseSideIdCard:"",
    // 营业执照
    employerImg:""
  },
  // 正面
  afterRead(event){
    const { file } = event.detail;
    this.setData({
      frontoIdCardUrl:file
    })
  },
  // 反面
  afterReadFM(event){
    const { file } = event.detail;
    this.setData({
      reverseSideIdCard:file
    })
  },
  // 营业执照
  afterReadBusiness(event){
    const { file } = event.detail;
    this.setData({
      employerImg:file
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