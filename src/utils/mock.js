export default {
  // 侧边栏的路由
  routerAdminArr: [
    {
      title: '超级管理员', // sub-menu
      index: '1',
      menuItems: [
        {
          title: 'record', // menu-item
          index: 'record',
          btns: []
        },
        {
          title: 'viewAccess',
          index: 'viewAccess',
          btns: []
        },
        {
          title: 'userAccess',
          index: 'userAccess',
          btns: []
        }
      ]
    }
  ],
  routerAdminArr: {
    title: '管理员',
    index: '2',
    menuItems: [
      {
        title: 'userAccess',
        index: 'userAccess',
        btns: []
      }
    ]
  }
}
