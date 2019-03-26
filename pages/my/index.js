// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: 'https://static.sesine.com/wechat-weapp-movie//images/user_bg_1.jpg',
    isLogin: false,  // 是否登录
    avatar: '',  // 头像
    name: '',  // 昵称
    opList: [  // 功能操作列表
      {
        icon: 'favorite',
        title: '收藏',
        link: '/pages/favorite/index'
      },
      
      {
        icon: 'history',
        title: '浏览记录',
        link: '/pages/history/index'
      },
      
      {
        icon: 'shake',
        title: '摇一摇',
        link: '/pages/shake/index'
      },
      
      {
        icon: 'gallery',
        title: '相册',
        link: '/pages/gallery/index'
      },
      
      {
        icon: 'setting',
        title: '设置',
        link: '/pages/setting/index'
      },
      
    ], 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.setData({
                  avatar: res.userInfo.avatarUrl,
                  name: res.userInfo.nickName,
                  isLogin: true
                })
            }
          }, 3000);
 
        } else {
          this.setData({
            isLogin: false
          })
        }
      }
    })
  },

  getUserInfo(e) {
    this.setData({
      avatar: e.detail.userInfo.avatarUrl,
      name: e.detail.userInfo.nickName,
      isLogin: true
    })
  }

})