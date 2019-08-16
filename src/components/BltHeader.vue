<template>
  <div class="blt-main-header">header
    <el-button type="primary" @click="logout">退出</el-button>
  </div>
</template>
<script>
import constant from '../utils/constant'
export default {
  methods: {
    logout () {
      this.$axios.post(constant.logout).then((res) => {
        if (res === '退出成功') {
          this.$router.replace({ path: '/login' })
          this.$store.dispatch('updateUserInfo', '')
        }
      })
    }
  }
}
</script>
