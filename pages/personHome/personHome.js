// pages/personHome/personHome.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 个人优势
    advantageText:"翻译中迷失：“危险的”氨基酸如何中止蛋白质合成的延伸东京工业大学和兵库大学的研究人员发现，蛋白质合成翻译过程中的一个关键步骤，会被真核细胞中含有大量N端天冬氨酸和谷氨酸残基的氨基酸序列",

    // 工作经历
    wordExperience:{},
    // 教育经历
    educationalExperience:{},
    // 专业技能
    skills:"",
    // 作品图片
    fileList: [
      // {
      //   url: 'https://img.yzcdn.cn/vant/tree.jpg',
      //   deletable: true,
      // }
    ],
    // 专业技能数组
    result:[],
    skillList:[
      { name:"Java"},
      { name:"php"},
      { name:"javascript"},
      { name:"C"},
      { name:"C#"},
      { name:"go"},
      { name:"C++"},
    ],
    skillShow:false,

  },
  // 上传作品图片
  afterRead(event){
    const { file } = event.detail;
    this.setData({
      fileList:this.data.fileList.concat({
        url: file.url,
        deletable: true,
      })
    })
    console.log(this.data.fileList)
  },
  // 删除作品图片
  deleteImg(event){
    this.data.fileList.splice(event.detail.index,1)
    this.setData({
      fileList:this.data.fileList
    })
  },
  // 
  onChange(event) {
    this.setData({
      result: event.detail,
    });
  },
  // 选择技能弹窗
  selectKill(){
    console.log(123)
    this.setData({
      skillShow:true
    })
  },

  // 关闭技能弹窗
  showSkillClose(){
    this.setData({
      skillShow:false
    })
  },
  // 确认技能
  skillSubmit(){
    this.setData({
      skills:this.data.result.join("、")
    })
    console.log(this.data.skills)
    this.showSkillClose()
  },

  // 提交
  submit(){
    Toast.success('保存成功');
    // wx.redirectTo({
    //   url: '/pages/success/success',
    // })
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