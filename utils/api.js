/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 统一的api请求接口
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-21 13:41:06
 * @LastEditTime: 2019-03-21 20:53:11
 */
const app = getApp()

const config = {
  banner: 'banner'
}

/**
 * @description: 获取首页banner信息
 * @param {type} 
 * @return: 
 */
export function getBanner() {
  return app.request.get(config.banner)
}

