// pages/employerRealName/employerRealName.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 企业名称
    enterpriseName:"",
    // 统一社会信用代码
    creditCode:"",
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

  // 空函数
  tempBack(){},


  // 提交
  submit(){
    if(this.data.enterpriseName == ""){
      Toast('企业名称不能为空');
    }else if(this.data.creditCode == ""){
      Toast('统一社会信用代码不能为空');
    }else if(this.data.creditCode.length !== 18){
      Toast('统一社会信用代码必须为18位');
    }else if(this.data.frontoIdCardUrl == "" || this.data.reverseSideIdCard==""){
      Toast('请上传法人身份证正反面');
    }else if(this.data.employerImg == ""){
      Toast('请上传营业执照');
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