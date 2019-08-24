<template>
  <div class="record">
    <el-button type="primary" @click="logout">退出</el-button>
    <el-button type="primary" @click="checkYuan">查看心愿</el-button>
    <el-button type="primary" @click="checkNotice">查看公告</el-button>
    <el-button type="primary" @click="checkActivity">查看活动</el-button>
    <el-button type="primary" @click="checkRecord">日志</el-button>
    <el-button type="primary" @click="checkUserInfo">查勘用户信息</el-button>
    <el-button type="primary" @click="checkDaoju">查勘道具</el-button>
  </div>
</template>
<script>
import constant from '../utils/constant'
export default {
  data () {
    return {
    }
  },
  methods: {
    logout () {},
    checkYuan () {},
    checkNotice () {},
    checkActivity () {},
    checkRecord () {},
    checkUserInfo () {},
    checkDaoju () {}
  }
}
</script>
