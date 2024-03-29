// pages/myBidding/myBidding.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 竞标价格
    biddingPrice:"",
    // 竞标宣言
    biddingProclamation:""
  },
  // 提交
  submit(){
    if(this.data.biddingPrice == ""){
      Toast('竞标价格不能为空');
    }else if(this.data.biddingProclamation == ""){
      Toast('竞标宣言不能为空');
    }else{
      // 成功
      wx.redirectTo({
        url: '/pages/success/success',
      })
    }
  },

  // 空函数 绑定值改变时触发
  tempFun(){

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