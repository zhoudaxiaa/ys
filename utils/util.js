const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getDate = date => {
  const year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate()
  
  return [year, month, day].map(formatNumber).join('-')
}

const getTime = date => {
  const hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds()
  
        return [hour, minute, second].map(formatNumber).join('：')
      }

module.exports = {
  formatTime,
  getDate,
  getTime
}
