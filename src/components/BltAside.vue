<template>
  <div class="blt-aside" :class="isCollapse? 'width64' : 'width200'">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组二</span>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <span slot="title">选项4</span>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <div  class="is-zhankai" @click='changeZhan'>
     <div class="left"></div>
     <div class="right">{{isCollapse?'&lt;&lt;':'&gt;&gt;'}}</div>
    </div>
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
  width:90px;
  height:30px;
  display: flex;
  justify-content: space-between;
  .left{
    width:40px;
    height:30px;
    background:rgba(74,74,82,1);
    border-radius:15px 0px 0px 15px;
  }
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
