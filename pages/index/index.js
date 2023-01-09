// index.js
// 获取应用实例
const app = getApp()
const { apiUrl } = require("../js/apiUrl")
Page({
  data: {
    active: 1,
    imgList:[
      {
        url:"/image/banner1.png"
      },
      {
        url:"/image/banner2.png"
      }
    ],
    count_money:"123",
    count_package:"123",
    count_developer:"123",

    // 控制：项目 -- 达人 
    selectOn:true,
    // 热门项目
    ProjectList:[],
    // 热门达人
    TanlentList:[]
  },
  // 切换项目 -- 达人
  selectOn(e){
    if(e.currentTarget.dataset.selectitem == 0){
      this.setData({
        selectOn: true
      })
    }
    if(e.currentTarget.dataset.selectitem == 1){
      this.setData({
        selectOn: false
      })
    }
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  onLoad() {
    this.getHotProject()
    this.getHotTanlent()
  },
  // 获取热门项目
  getHotProject(){
    let that = this
    wx.request({
      url: apiUrl+'/show_hot_project',
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
  // 获取热门达人
  getHotTanlent(){
    let that = this
    wx.request({
      url: apiUrl+'/show_hot_daren',
      method:"get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        if(res.data.code == 1){
          that.setData({
            TanlentList:res.data.data
          })
          console.log(that.data.TanlentList)
        }else{
          console.log("请求失败")
        }
      }
    })
  }
})
