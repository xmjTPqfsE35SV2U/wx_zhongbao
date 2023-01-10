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
    // 接单状态
    checked: true,
    // 接包-发包
    optionsList:[
      { text:"实名认证",url:"/pages/personRealName/personRealName",imgUrl:"/image/authentication.png" },
      { text:"竞标项目",url:"/pages/biddingProjects/biddingProjects",imgUrl:"/image/bidding-projects.png" },
      { text:"项目状态",url:"/pages/projectStatus/projectStatus",imgUrl:"/image/projectStatus.png" },
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
    // 接单状态更新
    onChange({ detail }) {
      // 需要手动对 checked 状态进行更新
      this.setData({ checked: detail });
    },
    // 切换发包方
    hardPackage(){
      store.store.switchPackage = false
      wx.redirectTo({
        url: '/pages/person/person',
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