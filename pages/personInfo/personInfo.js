// pages/personInfo/personInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 头像
    userImg:"",

    name:"赵某某",

    eamil:"7777777777@qq.com",
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate: "",
    // 显示生日选择器
    birthShow:false,
  },
  // 选择
  birthSelect(){
    this.setData({
      birthShow:true
    })
  },
  // 时间完成
  birthConfirm(val){
    let birth = new Date(val.detail)
    this.setData({
      birthShow:false,
      currentDate:birth.getFullYear()+"年"+(birth.getMonth()+1)+"月"+birth.getDate()+"日"
    })
  },
  // 取消
  birthCancel(){
    this.setData({
      birthShow:false
    })
  },

  // 提交
  submit(){
    console.log("提交请求")
  },
  // 上传图片
  afterRead(event){
    const { file } = event.detail;
    this.setData({
      userImg:file
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