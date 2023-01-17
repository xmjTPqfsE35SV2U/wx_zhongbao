// pages/register/register.js
let api = require("../../js/apiUrl")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 账号
    phone:"",
    // 密码
    password:"",

    showCaptcha:true,
    timer:60
  },
  // 去登录
  goLogin(){
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },

  // 发送验证码
  captcha(){
    this.setData({
      showCaptcha:false
    })
    let that = this
    let timer = setInterval(function(){
      if(that.data.timer>1){
        that.setData({
          timer:that.data.timer-1
        })
        console.log(that.data.timer)
      }else{
        clearInterval(timer)
        that.setData({
          showCaptcha:true,
          timer:60
        })
      }
    },1000)


  },

  // 注册
  register(){
    // 状态419，请求后端权限
    wx.request({
      url: api.apiUrl+"/reg",
      method:"post",
      data:{
        phone:this.data.phone,
        password:this.data.password
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        // console.log(res)
      },
      
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