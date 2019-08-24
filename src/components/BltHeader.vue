<template>
  <div class="blt-main-header">
    <!-- <el-button type="primary" @click="logout">退出</el-button> -->
    <div class="left">
      <img src="../../public/images/mainLogo.png" alt="logo">
      <span>车险智能在线理赔服务平台</span>
    </div>
    <div class="right">
      <div class="is-work" @click='changeWork' :class="isWork?'is-work':'not-work'">
        <span></span>
        上线
      </div>
      <div class="layout">
        <span class="iconfont icon-set"></span>
        <span  @click="logout">退出账号</span>
      </div>
    </div>
  </div>
</template>
<script>
// import constant from '../utils/constant'
// import axios from 'axios'
export default {
  data () {
    return {
      isWork: true
    }
  },
  methods: {
    changeWork () {
      this.isWork = !this.isWork
    },
    logout () {
      // axios({
      //   url: constant.baseUrl + constant.queryCaseByWhere,
      //   data: qs.stringify(this.form),
      //   method: 'post'
      // }).then((res) => {
      //   if (res === 0) {
      //     this.$router.replace({ path: '/login' })
      //     this.$store.dispatch('updateUserInfo', '')
      //   }
      // })
    }
  }
}
</script>
<style lang='scss'>
.blt-main-header{
  width: 100%;
  height: 50px;
  padding: 0 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff !important;
  font-weight:400;
  box-sizing: border-box;
  color:#333;
  .left{
    display: flex;
    align-items: center;
    font-size: 18px;
    img{
      width:126px;
      height:34px;
    }
    span{
      font-size: 18px;
      margin-left: 27px;
    }
  }
  .right{
    display: flex;
    .is-work{
      width:78px;
      height:22px;
      background:rgba(240,246,251,1);
      border-radius:11px;
      color: #019858;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      font-size:14px;
      margin-right:20px;
      transition: all .5s;
      span{
        width:18px;
        height:18px;
        background:#019858;
        border-radius:50%;
      }
    }
    .not-work{
      flex-direction: row-reverse;
      justify-content: space-around;
      color: #FF9459 !important;
      transition: all .5s;
      span{
         background:#FF9459;
      }
    }
    .layout{
      .iconfont{
        color: #585663;
        margin-right: 20px;
      }
    }
  }
}
</style>
