<template>
  <div class="blt-aside">
    <el-row class="tac">
      <el-col>
        <h5>cp系统临时后台</h5>
        <el-menu
          v-show="routerArr.length > 0"
          :defaultActive="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu :index="item.index" v-for="(item, routeIndex) in routerArr" :key="routeIndex">
              <template slot="title" v-if="item.title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item v-for="secondMenuItem in item.menuItems" :key="secondMenuItem.title" :index="secondMenuItem.index">{{secondMenuItem.title}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import constant from '../utils/constant'
export default {
  data () {
    return {
      routerArr: constant.routerArr
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
  mounted () {
    let loadingInstance = this.$loading()
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    setTimeout(() => {
      loadingInstance.close()
    }, 2000)
    if (!userInfo) {
      this.$router.replace({
        path: '/login'
      })
    } else {
      this.$router.replace({
        path: '/taskList'
      })
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
  background:rgba(45,53,60,1);
  transition: all .5s;
  .el-menu {
    border: none
  }
}
.hide{
  background-color: transparent !important;
  display: none;
  transition: all .5s;
}
.is-zhankai{
  position:absolute;
  bottom:50px;
  right:0;
  width:40px;
  height:30px;
  // .left{
  //   width:40px;
  //   height:30px;
  //   background:rgba(74,74,82,1);
  //   border-radius:15px 0px 0px 15px;
  // }
  .right{
    width:40px;
    height:30px;
    background:rgba(26,33,39,1);
    border-radius:15px 0px 0px 15px;
    color:#fff;
    line-height: 30px;
    font-size:16px;
    text-align: center;
  }
}
.top-0{
  bottom:50px;
  left:0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
