// pages/personHome/personHome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 个人优势
    advantageText:"翻译中迷失：“危险的”氨基酸如何中止蛋白质合成的延伸东京工业大学和兵库大学的研究人员发现，蛋白质合成翻译过程中的一个关键步骤，会被真核细胞中含有大量N端天冬氨酸和谷氨酸残基的氨基酸序列",


    // 作品图片
    piecesImg:""
  },

  // 作品图片
  afterRead(event){
    const { file } = event.detail;
    this.setData({
      piecesImg:file
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