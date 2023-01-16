// pages/wholePack/wholePack.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 项目标题
    projectName:"",
    // 平台协议
    agreementCheck:false,
    // 项目类型列表
    projectTypeList:[
      { id:0, text:"Android",isCheck:false },
      { id:1,text:"小程序开发",isCheck:false },
      { id:10,text:"后台系统",isCheck:false },
      { id:3,text:"ISO开发",isCheck:false },
      { id:4,text:"3D建模",isCheck:false },
      { id:5,text:"平面设计",isCheck:false },
      { id:6,text:"区块链",isCheck:false },
      { id:7,text:"人工智能",isCheck:false },
      { id:8,text:"其它",isCheck:false },
    ],
    // 控制是否选中的样式 0：公开 1：保密  
    secrecy:0,
    // 项目类型
    projectType:[],
    // 项目预算
    budget:"",
    // 是否开票
    isinvoice:true,
    // 期望工期
    expectedDuration:"",
    // 联系人
    contact:"",
    // 联系电话
    phone:"",
    // 邮箱
    email:"",
    // 项目描述
    projectDescription:"",
    // 附件文本
    fileText:"",
    // 附件
    attachmentsFile:{},
    // 项目预算弹窗
    show: false,
    actions: [
      {
        name: '可议价',
      },
      {
        name: '1千-5千',
      },
      {
        name: '5千-1万',
      },
      {
        name: '1万-10万',
      }
    ],

  },

  // 项目预算
  showBudget(){
    this.setData({
      show:true
    })
  },
  // 关闭
  onClose() {
    this.setData({ show: false });
  },
  // 选择
  onSelect(event) {
    this.setData({
      budget:event.detail.name
    })
    // console.log(event.detail.name);
  },

  // 选择保密设置
  secrecyCheck(e){
    this.setData({
      secrecy:e.detail.value
    })
    // console.log(e.detail.value)
  },
  // 选择项目类型
  projectTypeCheck(e){
    this.data.projectTypeList.forEach((res,index)=>{
      // 小程序直接修改数据并不会动态渲染到页面，必须通过setData修改，页面数据才会变化
      if(res.id==e.currentTarget.dataset.id){
        this.setData({
          ['projectTypeList['+index+'].isCheck']:!res.isCheck
        })
      }
    })
  },
  // 是否开票
  invoiceCheck(e){
    console.log(e.detail.value)
    this.setData({
      isinvoice:e.detail.value==1?true:false
    })
  },

  // 项目类型改变触发
  projectTypeChange(event){
    this.setData({
      projectType:event.detail.value
    })
  },

  // 添加附件
  addAttachments(){
    console.log(123)
    let that = this
    if(that.data.fileText==""){
      // 从聊天框中选择文件 
      wx.chooseMessageFile({
        count: 1,
        success(res){
          console.log(res)
          that.setData({
            fileText:res.tempFiles[0].name,
            attachmentsFile:res.tempFiles[0]
          })
        }
      })
    }else{
      Toast('最多只能添加一个附件');
      return;
    }
    
  },
  // 删除附件
  deleteFile(){
    this.setData({
      fileText:""
    })
  },


  // 平台协议状态
  agreementOn(){
    this.setData({
      agreementCheck:!this.data.agreementCheck
    })
  },

  // 提交
  onSubmit(){
    // console.log(this.data.projectName)
    // console.log(this.data.secrecy)
    // console.log(this.data.projectType)
    // console.log(this.data.budget)
    // console.log(this.data.isinvoice)
    // console.log(this.data.expectedDuration)
    // console.log(this.data.contact)
    // console.log(this.data.phone)
    // console.log(this.data.email)
    // console.log(this.data.projectDescription)
    if(this.data.projectName==""){
      Toast('项目标题不能为空');
      return;
    }
    if(this.data.projectType.length==0){
      Toast('项目类型至少选择一项');
      return;
    }
    if(this.data.budget==""){
      Toast('项目预算不能为空');
      return;
    }
    if(this.data.expectedDuration==""){
      Toast('期望工期不能为空');
      return;
    }
    if(this.data.contact==""){
      Toast('联系人不能为空');
      return;
    }
    if(this.data.phone==""){
      Toast('联系电话不能为空');
      return;
    }
    if(this.data.email==""){
      Toast('邮箱不能为空');
      return;
    }
    if(this.data.projectDescription==""){
      Toast('项目描述不能为空');
      return;
    }
    if(this.data.agreementCheck==false){
      Toast('请先同意平台协议');
      return;
    }

    wx.redirectTo({
      url: '/pages/success/success',
    })

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