
let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = ''
} else {
  // baseUrl = 'https://selfclaim.chinalife-p.com.cn'
  baseUrl = 'https://' + location.hostname + '/selfClaim'
}
const routerArr = [
  {
    title: '统计中心', // sub-menu
    index: '1',
    menuItems: [
      {
        title: '任务统计', // menu-item
        index: 'taskList'
      },
      {
        title: '工单统计',
        index: 'workOrderList'
      },
      {
        title: '查勘统计',
        index: 'checkList'
      }
    ]
  }
]
export default {
  baseUrl,
  routerArr,
  login: '/interface/loginOrganizationUser',
  queryCaseByWhere: '/interface/getCaseByWhere'
}
