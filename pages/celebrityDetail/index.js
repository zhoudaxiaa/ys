import { getCelebrity } from "../../utils/api"

import { getDate, getTime } from '../../utils/util.js'

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
    celebrityCover: {}, // 人物封面资料，用来存于历史记录的
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
      console.log(data)
      let filmList = [],
          celebrityCover = {},
          works = ''  // 人物的作品

      // 提取名人的电影作品列表
      data.works.forEach((item) => {
        filmList.push(item["subject"])
      })

      // 提取名人的电影作品名称
      works = filmList.map((v) => {
        return v.title
      }).join('、')

      celebrityCover = {
        id: data.id,
        avatar: data.avatars.medium,
        name: data.name,
        nameEn: data.name_en,
        place: data.born_place,
        works
      }

      wx.setNavigationBarTitle({
        title: data.name
      })

      this.setData({
        celebrity: data,
        filmList,
        celebrityCover
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
  onUnload () {
      let historyCelebrity = wx.getStorageSync('historyCelebrity') || []
      // console.log(historyFilms)

      let data = {
        date: getDate(new Date()),
        time: getTime(new Date()),
        celebritys: this.data.celebrityCover
      }
      
      if (historyCelebrity.length === 0) {

        // 如果历史记录缓存为空，就把当前的数据push进去
        historyCelebrity.push(data)

        wx.setStorage({
          key: 'historyCelebrity',
          data: historyCelebrity
        })

        return
      }

    for (let i in historyCelebrity) {

      // 查找当前的人物信息是否存在历史记录缓存中
      if (historyCelebrity[i].celebritys.id === this.data.id) {
        
        // 如果存在就更新日期并把该对象提到数组前面去
        historyCelebrity[i].date = getDate(new Date())
        historyCelebrity[i].time = getTime(new Date())

        // 更新顺序
        historyCelebrity = historyCelebrity.splice(i,1).concat(historyCelebrity)
        // console.log(historyFilms)
        wx.setStorage({
          key: 'historyCelebrity',
          data: historyCelebrity
        })

        return
      }
    }

    // 不在历史记录缓存中，就加数组前面去并存储
    historyCelebrity.unshift(data)

    wx.setStorage({
      key: 'historyCelebrity',
      data: historyCelebrity
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

})