import { getCelebrity } from "../../utils/api";

const app = getApp()
const regeneratorRuntime = app.regeneratorRuntime

// pages/personInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyCelebrity: [], // 历史浏览人物记录
    celebrity: {}, // 人物资料
    filmList: [], // 电影列表
    id: '',  // 当前人物的id
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
    this.setData({
      id: options.id
    })

    this.initData(options.id)
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

})