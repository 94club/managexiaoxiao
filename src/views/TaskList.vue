<template>
  <div class="record">
    <span class="demonstration">时间选择：</span>
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
    是否视屏<el-select v-model="form.isRtc" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input v-model="form.caseNumber" placeholder="请输入事故号或手机号"></el-input>
    <el-button @click="search">查询</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="accidentAddress"
        label="事故地点"
        width="180">
      </el-table-column>
      <el-table-column
        prop="caseNumber"
        label="事故号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="claimName"
        label="查勘员">
      </el-table-column>
      <el-table-column
        prop="userCode"
        label="查勘员工号">
      </el-table-column>
      <el-table-column
        prop="claimPhoneNumber"
        label="查勘员电话">
      </el-table-column>
      <el-table-column
        prop="plateNumber"
        label="车牌号">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[20, 50, 100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>
<script>
import constant from '../utils/constant'
import axios from 'axios'
import qs from 'qs'
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
      options: [{
        value: 1,
        label: '是'
      }, {
        value: 0,
        label: '否'
      }],
      form: {
        isRtc: '',
        startTime: '',
        endTime: '',
        caseNumber: ''
      },
      tableData: [],
      currentPage: 1
    }
  },
  methods: {
    search () {
      if (this.timeValue && this.timeValue.length > 0) {
        this.form.startTime = this.timeValue[0]
        this.form.endTime = this.timeValue[1]
      }
      axios({
        url: constant.baseUrl + constant.queryCaseByWhere,
        data: qs.stringify(this.form),
        method: 'post'
      }).then((res) => {
        this.tableData = res.data.data
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
