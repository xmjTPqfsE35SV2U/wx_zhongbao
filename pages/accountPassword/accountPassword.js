// pages/accountPassword/accountPassword.js
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:"",
    confirmPassword:""
  },
  // 提交
  submit(){
    // 确认修改密码
    if(this.data.password==""){
      Toast('密码不能为空');
      return;
    }
    if(this.data.confirmPassword==""){
      Toast('确认密码不能为空');
      return;
    }
    if(this.data.password!==this.data.confirmPassword){
      Toast('两次密码不一致');
      return;
    }
    Dialog.confirm({
      title: '提示',
      message: '此操作将覆盖原密码，是否修改账号密码',
    })
    .then(() => {
      // on confirm
      wx.redirectTo({
        url: '/pages/success/success',
      })
    })
    .catch(() => {
      // on cancel
    });
  },
  // 空函数
  tempBack(){},
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