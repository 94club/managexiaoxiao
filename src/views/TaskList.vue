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
<style lang="scss">
  .record{
    position: relative;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .sel-list{
      display: flex;
      background-color: #fff;
      padding:0 20px;
      padding-top:10px;
      box-sizing: border-box;
    }
    .sel-list>div{
      height: 38px;
      margin-right:20px;
      padding-bottom: 14px;
    }
    .sel-list>div:last-child{
      margin-right:0;
    }
    .title{
      width: calc(100% - 20px);
      height:40px;
      background-color: #D9E0E7;
      line-height:40px;
      color:#606266;
      // margin-left:20px;
      padding-left:20px;
      span{
        width:4px !important;
        height:20px;
        border-left:4px solid rgba(1,152,88,1);
        padding-left:10px;
      }
    }
    .list-con{
      flex:1;
      background-color: #fff;
      padding:0 20px;
      padding-top:10px;
      box-sizing: border-box;
      .list-table{
        max-height:650px;
        overflow: scroll;
      }
    }
  }
  .table-Info{
    width: 100%;
    height:600px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    z-index:199;
    padding: 20px;
    overflow: scroll;
    box-sizing: border-box;
    .info {
      width: calc(100% - 20px);
      padding: 10px;
      display: flex;
      margin: 20px 0;
      .item {
        flex: 1;
      }
    }
    .tab-banner{ // 蓝色横条
      width:100%;
      height:48px;
      background:rgba(141,155,185,1);
      font-size:16px;
      font-weight:400;
      color:#FFF;
      display: flex;
      div{
        flex:1;
        cursor: pointer;
      }
      div:first-child{
        display: flex;
        span{
          display: inline-block;
          width:101px;
          height:100%;
          text-align: center;
          line-height: 48px;
        }
        span:hover,span:active{
          background-color: #4B608D;
        }
      }
      div:last-child{
        text-align: right;
        line-height: 48px;
        padding-right:20px;
      }
    }
    .tab-input{
      display: flex;
      
    }
  }
</style>
