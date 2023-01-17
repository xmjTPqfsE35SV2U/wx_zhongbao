// components/pickUpPackage/pickUpPackage.js
const store = require("../../js/store")
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 发包
    optionsList:[
      { text:"实名认证",url:"/pages/employerRealName/employerRealName",imgUrl:"/image/authentication.png" },
      { text:"我要发布",url:"/pages/publish/publish",imgUrl:"/image/bidding-projects.png" },
      { text:"项目管理",url:"/pages/projectManagement/projectManagement",imgUrl:"/image/projectStatus.png" },
      { text:"账号管理",url:"/pages/accountManagement/accountManagement",imgUrl:"/image/account-management.png" },
      { text:"问题反馈",url:"/pages/feedBack/feedBack",imgUrl:"/image/account-management.png" },
      { text:"消息管理",url:"/pages/message/message",imgUrl:"/image/problem-feedback.png" },
    ]

  },
  methods:{
    goOption(event){
      console.log(event.currentTarget.dataset.url)
      wx.navigateTo({
        url: event.currentTarget.dataset.url,
      })
    },
    // 切换接包方
    hardPackage(){
      store.store.switchPackage = true
      // 调用父组件的方法
      this.triggerEvent("parentComponentFunction");
    },
    // 退出登录
    exit(){
      wx.redirectTo({
        url: '/pages/login/login',
      })
    },
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