<template>
  <div class="blt-aside">
    <el-row class="tac">
      <el-col>
        <h5>国寿总控后台</h5>
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
  width: 200px;
  background: #666;
  overflow: auto;
  .el-menu {
    border: none
  }
}
</style>
