// pages/login/login.js

let api = require("../js/apiUrl")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    password:""
  },
  // 立即登录
  login(){
    console.log(this.data.phone)
    console.log(this.data.password)
    wx.request({
      url: api.apiUrl+'/login',
      method:"post",
      data:{
        phone:this.data.phone,
        password:this.data.password
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res)
      }
    })

    
    
  },
  // 去注册
  goRegister(){
    wx.redirectTo({
      url: api.apiUrl+'/pages/register/register',
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
    console.log(123)
    wx.request({
      url: api.apiUrl+'/show_hot_project',
      method: "get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res)
      }
    })
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