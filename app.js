//app.js
const request = require('./utils/request.js')
import regeneratorRuntime from './utils/runtime.js'

App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null,
  },
  request,
  regeneratorRuntime
})