/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 统一的api请求接口
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-21 13:41:06
 * @LastEditTime: 2019-03-24 19:14:47
 */
const app = getApp()

const config = {
  movie: {
    theaters: 'movie/in_theaters'
  }
}

/**
 * @description: 获取首页banner信息
 * @param {type} 
 * @return: 
 */
export function getBanner() {
  return app.request.get('https://www.easy-mock.com/mock/5c931a935a0ac91327b40855/ys/banner')
}

/**
 * @description: 获取最新热映的电影信息
 * @param {number} start 从第几个数据开始获取
 * @param {number} count 一次获取的数据数量
 * @return: 
 */

export function getTheaters(start = 0, count = 20) {
  return app.request.get(`${config.movie.theaters}?start=${start}&count=${count}`)
}

