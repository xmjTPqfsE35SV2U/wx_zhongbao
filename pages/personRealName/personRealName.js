// pages/personRealName/personRealName.js
import Toast from '@vant/weapp/toast/toast';

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
  
  },
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
  // 实名提交
  submit(){
    // console.log(this.data.cardID.length)
    // 格式暂未确定
    if(this.data.username == ""){
      Toast('用户名不能为空');
    }else if(this.data.cardID == ""){
      Toast('身份证号不能为空');
    }else if(this.data.cardID.length !== 18){
      Toast('身份证号必须为18位');
    }else if(this.data.frontoIdCardUrl == "" || this.data.reverseSideIdCard == ""){
      Toast('请上传身份证正反面');
    }else{
      // 通过
      wx.redirectTo({
        url:"/pages/success/success"
      })
    }

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