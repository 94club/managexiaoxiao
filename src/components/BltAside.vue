<template>
  <div class="blt-aside" :class="isCollapse? 'width64' : 'width200'">
    <el-menu
      :defaultActive="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#2d353c"
      text-color="#fff"
      active-text-color="#019858"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
    >
      <el-submenu :index="item.index" v-for="(item, routeIndex) in routerArr" :key="routeIndex">
        <template slot="title" v-if="item.title">
          <i class="iconfont" :class="'icon-'+item.icon" style="color:#fff;"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="secondMenuItem in item.menuItems"
            :key="secondMenuItem.title"
            :index="secondMenuItem.index"
          >
            <i class="iconfont" :class="'icon-'+secondMenuItem.icon"></i>
            {{secondMenuItem.title}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div class="is-zhankai" @click="changeZhan">
      <div class="right">{{isCollapse?'&gt;&gt;':'&lt;&lt;'}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerArr: [
        {
          title: '统计中心', // sub-menu
          index: '1',
          icon: 'Statis',
          menuItems: [
            {
              title: '统计面板', // menu-item
              icon: 'dian',
              index: 'dashboard'
            },
            {
              title: '新增道具',
              icon: 'dian',
              index: 'daojuList'
            },
            {
              title: '心愿记录',
              icon: 'dian',
              index: 'yuanList'
            },
            {
              title: '用户列表',
              icon: 'dian',
              index: 'userList'
            },
            {
              title: '公告列表',
              icon: 'dian',
              index: 'noticeList'
            },
            {
              title: '记录列表',
              icon: 'dian',
              index: 'recordList'
            }
          ]
        }
      ]
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    defaultActive () {
      return this.$route.path.substr(1)
    },
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    changeZhan () {
      this.$store.dispatch('updateIsCollapse', !this.isCollapse)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.blt-aside {
  position: relative;
  width: 200px;
  height: 100%;
  float: left;
  overflow: scroll;
  background: rgba(45, 53, 60, 1);
  transition: all 0.5s;
  .el-menu {
    border: none;
  }
}
.hide {
  background-color: transparent !important;
  display: none;
  transition: all 0.5s;
}
.is-zhankai {
  position: absolute;
  bottom: 50px;
  right: 0;
  width: 40px;
  height: 30px;
  // .left{
  //   width:40px;
  //   height:30px;
  //   background:rgba(74,74,82,1);
  //   border-radius:15px 0px 0px 15px;
  // }
  .right {
    width: 40px;
    height: 30px;
    background: rgba(26, 33, 39, 1);
    border-radius: 15px 0px 0px 15px;
    color: #fff;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
  }
}
.top-0 {
  bottom: 50px;
  left: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
