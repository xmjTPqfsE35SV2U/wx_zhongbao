// pages/talent/talent.js
const { apiUrl } = require("../../js/apiUrl")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 技能专长
    option1: {
      list: ['JAVA', 'PHP','C++','Go','Python','JavaScript'],
      result: [],
    },
    // 所属职位
    option2: {
      list: ['UI美工', '前端开发','后端开发','运维工程师','测试工程师'],
      result: [],
    },
    // 职位等级
    option3: {
      list: ['初级', '中级','高级'],
      result: [],
    },
    // 达人列表
    tanlentList:[]
  },

  // 改变
  onChange1(event) {
    // console.log(1)
    this.setData({
      ['option1.result']:event.detail
    });
  },
  onChange2(event) {
    // console.log(2)
    this.setData({
      ['option2.result']:event.detail
    });
  },
  onChange3(event) {
    this.setData({
      ['option3.result']:event.detail
    });
  },
  // 选择
  toggle1(event) {
    const { index } = event.currentTarget.dataset;
    // const checkbox = this.selectComponent(`.checkboxes-${index}`);
    const checkboxs = this.selectAllComponents(`.checkboxes-${index}`);
    checkboxs[0].toggle();
  },
  toggle2(event) {
    const { index } = event.currentTarget.dataset;
    const checkboxs = this.selectAllComponents(`.checkboxes-${index}`);
    checkboxs[1].toggle();
  },
  toggle3(event) {
    const { index } = event.currentTarget.dataset;
    const checkboxs = this.selectAllComponents(`.checkboxes-${index}`);
    checkboxs[2].toggle();
  },


  // 确认
  onConfirm1(){
    this.selectComponent('#item1').toggle();
    // 选中的值
    console.log(this.data.option1.result);
    // 发送请求
    
  },
  onConfirm2(){
    this.selectComponent('#item2').toggle();
  },
  onConfirm3(){
    this.selectComponent('#item3').toggle();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    // 获取达人列表
    wx.request({
      url: apiUrl+'/show_hot_daren',
      method:"get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        if(res.data.code == 1){
          that.setData({
            ProjectList:res.data.data
          })
          console.log(that.data.ProjectList)
        }else{
          console.log("请求失败")
        }
      }
    })
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