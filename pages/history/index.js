// pages/history/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyFilms: [], // 历史浏览电影记录
    historyCelebrity: [], // 历史浏览人物记录
    tabName: 'film', // tab所处的位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    const historyFilms = wx.getStorageSync('historyFilms') || []
    const historyCelebrity = wx.getStorageSync('historyCelebrity') || []
    console.log(historyCelebrity)
    this.setData({
      historyFilms,
      historyCelebrity
    })
  },

  /**
   * @description: 切换tab
   * @param {object} e 小程序提供的事件对象
   * @return: 
   */
  toggleTab (e) {

    this.setData({
      tabName: e.currentTarget.dataset.tab
    })
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
})