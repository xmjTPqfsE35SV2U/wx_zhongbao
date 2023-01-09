Component({
  properties: {
    title: {
      type: String,
      value: '',
    }
  },


  data: {
    // someData: {}
  },


  methods: {
    onClickLeft() {
      // 返回上一页
      wx.navigateBack({
        delta: 1
      });
    },
  }
})