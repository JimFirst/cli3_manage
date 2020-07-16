import request from '../utils/request'
export default {
  // 获取招聘岗位列表
  getJobList() {
    return request({
      url: '/job/',
      method: 'get'
    })
  }
}
