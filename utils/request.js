/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 封装wx.request
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-21 13:08:28
 * @LastEditTime: 2019-03-21 22:33:35
 */
const baseURL = 'https://www.easy-mock.com/mock/5c931a935a0ac91327b40855/ys/'

function request (url, method = 'GET', data = {}, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      data: data,
      method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: header, // 设置请求的 header
      success: function(res){
        if (res.statusCode === 200) resolve(res.data)
        
        // switch (res.statusCode) {
        //   404: 
        // }
      },
      fail: function(e) {
        reject(e)
      },
      complete: function() {
        // complete
      }
    })
  })
}

module.exports = {
  get (url, data) {
    return request(url, 'GET', data)
  },
  post (url, data) {
    return request(url, 'POST', data, {
      'content-type': 'application/json'
    })
  },
  post (url, data) {
    return request(url, 'PUT', data, {
      'content-type': 'application/json'
    })
  },
  post (url, data) {
    return request(url, 'DELETE', data, {
      'content-type': 'application/json'
    })
  }
}