// pages/filmDetail/index.js
import { getFilmDetail } from '../../utils/api.js'

import { getDate, getTime } from '../../utils/util.js'

const app = getApp()
const regeneratorRuntime = app.regeneratorRuntime

Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmDetail: {},  // 电影详情数据对象
    filmCover: {}, // 电影封面信息
    historyFilms: [], // 本地缓存的
    id: '', // 当前电影的id
  },

  /**
   * @description: 初始化数据
   * @param {string} 根据电影id获取电影详情
   * @return: 
   */
  async initData (id) {
    try {
      const data = await getFilmDetail(id)
      let filmCover = {},  // 电影封面信息
          director = '',  // 导演名字
          casts = ''  // 演员名字

      // 获取导演名字数组
      director = data.directors.map((item) => {
        return item.name
      }).join('/')

      // 获取演员名字数组
      casts = data.casts.map((item) => {
        return item.name
      }).join('/')

      filmCover = {
        id: data.id,
        imgUrl: data.images.medium,  // cover图片链接
        title: data.title,  // 标题
        director,
        casts,
        rating: data.rating.average, // 评分,
        year: data.year  // 上映年份
      }

      this.setData({
        filmDetail: data,
        filmCover
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
  onLoad (options) {
    this.setData({
      id: options.id
    })
    
    this.initData(options.id)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    let historyFilms = wx.getStorageSync('historyFilms') || []
console.log(historyFilms)

    let data = {
      date: getDate(new Date()),
      time: getTime(new Date()),
      films: this.data.filmCover
    }
    
    if (historyFilms.length === 0) {

      // 如果历史记录缓存为空，就把当前的数据push进去
      historyFilms.push(data)

      wx.setStorage({
        key: 'historyFilms',
        data: historyFilms
      })

      return
    }

  for (let i in historyFilms) {

    // 查找当前的电影信息是否存在历史记录缓存中
    if (historyFilms[i].films.id === this.data.id) {
      
      // 如果存在就更新日期并把该对象提到数组前面去
      historyFilms[i].date = getDate(new Date())
      historyFilms[i].time = getTime(new Date())

      // 更新顺序
      historyFilms = historyFilms.splice(i,1).concat(historyFilms)
      console.log(historyFilms)
      wx.setStorage({
        key: 'historyFilms',
        data: historyFilms
      })

      return
    }
  }

  // 不在历史记录缓存中，就加 进去并存储
  historyFilms.unshift(data)

  wx.setStorage({
    key: 'historyFilms',
    data: historyFilms
  })

  }

})