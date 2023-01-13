// pages/feedBack/feedBack.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标题
    title:"",
    // 内容
    contentText:"",
  },

  // 空函数
  tempBack(){},

  // 提交
  submit(){
    if(this.data.title == ""){
      Toast('标题不能为空');
    }else if(this.data.contentText == ""){
      Toast('反馈内容不能为空');
    }else{
      wx.redirectTo({
        url: '/pages/success/success',
      })
    }
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