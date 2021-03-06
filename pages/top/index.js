// pages/top/index.js
import { getTopFilm } from '../../utils/api.js'

const app = getApp()
const regeneratorRuntime = app.regeneratorRuntime

Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: 0,  // 从第几个开始获取电影数据
    count: 10, // 一次获取多少条电影数据
    total: 10, // 电影数据的总数量
    filmList: [], // 电影数据的对象数组
    hasMore: true, // 是否还有数据了
  },

/**
 * @description: 每次获取10条最新热映的电影数据
 * @param {type} 
 * @return: 
 */  
  async getTopFilmList () {

    let start = this.data.start,
        count = this.data.count,
        total = this.data.total,
        filmList = this.data.filmList

    if (start >= total) {
      this.setData({
        hasMore: false
      })
    }

    try {
      const data = await getTopFilm(start, count)

      this.setData({
        start: start + count,
        count: data.count,
        total: data.total,
        filmList: filmList.concat(data.subjects)
      })

    } catch (e) {
      console.log(e)
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopFilmList()
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
    this.getTopFilmList()
  },

})