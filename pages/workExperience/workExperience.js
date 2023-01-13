// pages/workExperience/workExperience.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 公司名
    companyName:"",
    // 部门名
    department:"",
    // 入职时间
    onboardingTime:"",
    // 离职时间
    dimissionTime:"",
    // 入职时间戳
    onboardingTimer:"",
    // 离职时间戳
    dimissionTimer:"",
    // 工作内容
    jobContent:"",
    // 时间戳
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return `${value}日`;
    },
    // 弹窗控制
    showBoarding:false,
    showDimission:false,
  },
  // 选择入职时间
  selectOnboardingTime(){
    this.setData({
      showBoarding:true
    })
  },
  // 选择离职时间
  selectDimissionTime(){
    this.setData({
      showDimission:true
    })
    console.log(this.data.showDimission)
  },
  // 关闭弹窗
  onClose(){
    this.setData({
      showBoarding:false,
      showDimission:false
    })
  },
  // 入职时间确认
  boardingConfirm(event){
    let dateTimer = new Date(event.detail);
    let year = dateTimer.getFullYear();
    let month = dateTimer.getMonth()+1;
    let data = dateTimer.getDate();
    this.setData({
      onboardingTime: year+"年"+month+"月"+data+"日",
      onboardingTimer:dateTimer
    });
    this.onClose();
  },
  // 离职时间确认
  dimissionConfirm(event){
    let dateTimer = new Date(event.detail);
    let year = dateTimer.getFullYear();
    let month = dateTimer.getMonth()+1;
    let data = dateTimer.getDate();
    this.setData({
      dimissionTime: year+"年"+month+"月"+data+"日",
      dimissionTimer:dateTimer
    });
    this.onClose();
  },

  // 取消
  boardingCancel(){
    this.onClose();
  },

   // 修改上一个的数据
   reviseBackData(){
    let pages = getCurrentPages();
    let prevPage = pages[pages.length -2]; //上一个页面
    prevPage.setData({
      wordExperience:{
        companyName:this.data.companyName,
        department:this.data.department,
        onboardingTime:this.data.onboardingTime,
        dimissionTime:this.data.dimissionTime,
        jobContent:this.data.jobContent
      }
    });
    wx.navigateBack({
      delta: 1,
    });
  },


  // 提交
  submit(){
    if(this.data.companyName == ""){
      Toast('公司名不能为空');
      return;
    }
    if(this.data.department == ""){
      Toast('部门不能为空');
      return;
    }
    if(this.data.onboardingTime == ""){
      Toast('请选择入职时间');
      return;
    }
    if(this.data.dimissionTime == ""){
      Toast('请选择离职时间');
      return;
    }
    if(this.data.jobContent == ""){
      Toast('工作内容不能为空');
      return;
    }
    if(new Date(this.data.onboardingTimer).getTime()>new Date(this.data.dimissionTimer).getTime()){
      Toast('入职时间不能大于离职时间');
      return;
    }
    this.reviseBackData();
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
    console.log(this.data.showDimission)
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