const routerArr = [
  {
    title: '统计中心', // sub-menu
    index: '1',
    icon: 'Statis',
    menuItems: [
      {
        title: '任务列表', // menu-item
        icon: 'dian',
        index: 'taskList'
      },
      {
        title: '工单统计',
        icon: 'dian',
        index: 'workOrderList'
      },
      {
        title: '查勘统计',
        icon: 'dian',
        index: 'checkList'
      }
    ]
  }
]
export default {
  routerArr,
  login: 'api/v1/adminLogin',
  logout: 'admin/v1/adminLogout'
}
