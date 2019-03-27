/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 统一的api请求接口
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-21 13:41:06
 * @LastEditTime: 2019-03-27 16:37:25
 */
const app = getApp()

const config = {
  movie: 'movie',
  in_theaters: 'movie/in_theaters',
  subject: 'movie/subject',
  celebrity: 'movie/celebrity',
  coming_soon: 'movie/coming_soon',
  top250: 'movie/top250',
}

/**
 * @description: 获取首页banner信息
 * @param {type} 
 * @return: 
 */
export function getBanner() {
  return app.request.get('http://www.sosoapi.com/pass/mock/14362/banner')
}

/**
 * @description: 获取最新热映的电影信息
 * @param {number} start 从第几个数据开始获取
 * @param {number} count 一次获取的数据数量
 * @return: 
 */
export function getTheaters(start = 0, count = 20) {
  return app.request.get(`${config.in_theaters}?start=${start}&count=${count}`)
}

/**
 * @description: 根据电影id获取电影详情
 * @param {number} id 电影的id 
 * @return: 
 */
export function getFilmDetail (id) {
  return app.request.get(`${config.subject}/${id}`)
}

/**
 * @description: 根据id获取名人的信息
 * @param {number} id 名人的id 
 * @return: 
 */
export function getCelebrity(id) {
  return app.request.get(`${config.celebrity}/${id}`)
}

/**
 * @description: 获取即将上映的电影信息
 * @param {number} start 从第几个数据开始获取
 * @param {number} count 一次获取的数据数量
 * @return: 
 */
export function getComingSoon(start = 0, count = 20) {
  return app.request.get(`${config.coming_soon}?start=${start}&count=${count}`)
}

/**
 * @description: 获取排行前250的电影信息
 * @param {number} start 从第几个数据开始获取
 * @param {number} count 一次获取的数据数量
 * @return: 
 */
export function getTopFilm(start = 0, count = 20) {
  return app.request.get(`${config.top250}?start=${start}&count=${count}`)
}



