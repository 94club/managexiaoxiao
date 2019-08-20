<template>
  <div class="blt-main-header">header
    <el-button type="primary" @click="logout">退出</el-button>
  </div>
</template>
<script>
// import constant from '../utils/constant'
// import axios from 'axios'
export default {
  methods: {
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
