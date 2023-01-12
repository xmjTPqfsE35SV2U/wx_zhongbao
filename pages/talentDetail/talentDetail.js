// pages/talentDetail/talentDetail.js
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 个人优势
    personalStrengths:"来自国际贸易专业英语翻译,致力为企业成长的成长和培训,外贸干货,运营技巧,时讯动态,故事案例。"

    // 工作经历

  },
  
  // 邀请投标
  invitationBid(){
    Dialog.confirm({
      title: '提示',
      message: '是否邀请该用户进行投标？',
    }).then(() => {
      // on confirm
      // 判断自己的项目是否有岗位，有则可以邀请，无则提示用户
      // 后端暂未提供数据，固默认无岗位
      // if(){}
      // 
      Toast.fail('暂无岗位分配');

    }).catch(() => {
        // on cancel
    });
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