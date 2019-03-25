// pages/filmDetail/index.js
import { getFilmDetail } from '../../utils/api.js'

const app = getApp()
const regeneratorRuntime = app.regeneratorRuntime

Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmDetail: {},  // 电影详情数据对象
  },

  /**
   * @description: 初始化数据
   * @param {number} 根据电影id获取电影详情
   * @return: 
   */
  async initData (id) {
    try {
      const data = await getFilmDetail(id)

      this.setData({
        filmDetail: data
      })

      wx.setNavigationBarTitle({
        title: data.title
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

})