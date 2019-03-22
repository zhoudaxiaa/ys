// pages/popular/index.js
import { getBanner } from '../../utils/api.js'

const app = getApp()
const regeneratorRuntime = app.regeneratorRuntime

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerData: {}
  },

  /**
   * @description: 初始化数据
   * @param {type} 
   * @return: 
   */
  async initData() {

    try {
      const data = await getBanner()
      console.log(data)
      this.setData({
        bannerData: data
      })
    } catch (e) {
      console.log(e)
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
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