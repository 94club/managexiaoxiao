<template>
  <div class="record">
    <div class="sel-list">
      <div>
        时间选择
        <el-date-picker
          v-model="timeValue"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd HH:mm:ss"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div>
         是否绑定
       <el-select v-model="form.isBind" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <el-button @click="search" type='primary' class="h-38">查询</el-button>
      </div>
    </div>
    <div class="list-con">
      <div class="list-table">
        <el-table
            :data="tableData"
            v-loading="tableLoading"
            row-class-name="table-tr"
            border
            style="width: 100%;">
          <el-table-column
            prop="nickName"
            label="昵称"
            width="240">
          </el-table-column>
          <el-table-column
            prop="cpName"
            label="绑定对象"
            width="180">
          </el-table-column>
          <el-table-column
            prop="cpMoney"
            label="心愿币">
          </el-table-column>
          <el-table-column
            prop="activeNumber"
            label="活跃指数">
          </el-table-column>
           <el-table-column
            prop="lastSignTime"
            label="上一次登录时间">
          </el-table-column>
            <el-table-column
            prop="createTime"
            width="200"
            label="创建时间">
          </el-table-column>
        </el-table>
      </div>
       <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="form.pageNo"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        class="mt-30 h-38"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      timeValue: '',
      options: [
        {
          value: 2,
          label: '绑定'
        },
        {
          value: 1,
          label: '未绑定'
        }
      ],
      form: {
        startTime: '',
        endTime: '',
        pageSize: 10,
        pageNo: 1,
        isBind: ''
      },
      tableData: [],
      tableLoading: false,
      ruleForm: {},
      addShow: false
    }
  },
  created () {
    this.getuserList()
  },
  methods: {
    search () {
      this.tableLoading = true
      setTimeout(() => {
        this.tableLoading = false
      }, 1000)
      if (this.timeValue && this.timeValue.length > 0) {
        this.form.startTime = this.timeValue[0]
        this.form.endTime = this.timeValue[1]
      }
      this.getuserList()
    },
    handleSizeChange (val) {
      this.form.pageSize = parseInt(val)
      if (this.tableData.length > 0) {
        this.search()
      }
    },
    handleCurrentChange (val) {
      this.form.pageNo = parseInt(val)
      if (this.tableData.length > 0) {
        this.search()
      }
    },
    getuserList () {
      this.$axios.get(this.$constant.getUser, { params: this.form }).then((res) => {
        this.tableData = res
      }).catch((err) => {
        console.log(err)
      })
    }
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
</style>
