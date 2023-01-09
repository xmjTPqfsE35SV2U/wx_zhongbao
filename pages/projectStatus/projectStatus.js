// pages/projectStatus/projectStatus.js
const { apiUrl } = require("../js/apiUrl")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ProjectList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getHotProject()
  },
  // 获取热门项目
  getHotProject(){
    let that = this
    wx.request({
      url: apiUrl+'/show_hot_project',
      method:"get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        if(res.data.code == 1){
          that.setData({
            ProjectList:res.data.data
          })
          console.log(that.data.ProjectList)
        }else{
          console.log("请求失败")
        }
      }
    })
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