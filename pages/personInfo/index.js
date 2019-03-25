import { getCelebrity } from "../../utils/api";

const app = getApp()
const regeneratorRuntime = app.regeneratorRuntime

// pages/personInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    celebrity: {}, // 名人的信息
    filmList: [], // 电影列表
  },

/**
 * @description: 初始化数据
 * @param {number} id 根据id获取名人的信息 
 * @return: 
 */

  async initData (id) {
    try {
      const data = await getCelebrity(id)
      let filmList = []

      // 提取名人的电影作品列表
      data.works.forEach((item) => {
        filmList.push(item["subject"])
      })

      wx.setNavigationBarTitle({
        title: data.name
      })

      this.setData({
        celebrity: data,
        filmList
      })



    } catch (e) {
      console.log(e)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})