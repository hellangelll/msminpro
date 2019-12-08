//index2.js
//获取应用实例
const app = getApp()

Page({
  data:{
    articles:[
      "https://mp.weixin.qq.com/s/jWJA2R0UsIPI1fXgBzFNzQ",
      "https://mp.weixin.qq.com/s/SgNFU_h5amCrJ6A5K3ZbxA"
    ]
  },
  toDetail: function(e){
    var that = this
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      // url: that.data.articles[id],
      url: "../gzhwz/gzhwz",
    })
  }
})