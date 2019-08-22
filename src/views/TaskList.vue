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
         是否视屏
       <el-select v-model="form.isRtc" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <el-input v-model="form.caseNumber" placeholder="请输入事故号或手机号"></el-input>
      </div>
      <div>
        <el-button @click="search" type='primary' class="h-38">查询</el-button>
      </div>
    </div>
    <div class="title">
      <span>已接通两条，未接通1条，未发起105条，已查勘33条，已接受42条，转线下3条</span>
    </div>
    <div class="list-con">
      <div class="list-table">
        <el-table
           :data="tableData"
           @selection-change="handleSelectionChange"
           v-loading="tableLoading"
           row-class-name="table-tr"
            style="width: 100%;">
           <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="accidentAddress"
            label="事故地点"
            width="240">
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
            prop="contactMobileNumber"
            label="报案人电话">
          </el-table-column>
           <el-table-column
            prop="contactName"
            label="报案人姓名">
          </el-table-column>
            <el-table-column
            prop="reportTime"
            width="200"
            sortable
            label="报案时间">
          </el-table-column>
          <el-table-column
            prop="accidentTime"
            width="200"
            sortable
            label="事故时间">
          </el-table-column>
          <el-table-column
            prop="userCode"
            label="查勘员工号">
          </el-table-column>
          <el-table-column
            prop="claimPhoneNumber"
            width="140"
            label="查勘员电话">
          </el-table-column>
          <el-table-column
            prop="plateNumber"
            label="车牌号">
          </el-table-column>
           <el-table-column
            label="操作">
              <template slot-scope="scope">
                <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button> -->
                <span @click="lookInfo(scope.row)" style='color:#019858'>查看</span>
              </template>
          </el-table-column>
        </el-table>
      </div>
       <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 11, 12, 13]"
        :page-size="11"
        layout="total, sizes, prev, pager, next, jumper"
        class="mt-30 h-38"
        :total='total'>
      </el-pagination>
    </div>
    <div class="v-mask" v-if='dialogVisible'></div>
    <el-dialog
      title="详细信息"
      :visible.sync="dialogVisible"
      width="40%"
      height='600px'
      style="z-index:333"
      :before-close="handleClose">
      <div class="table-Info">
        <div v-for='(item, idx) in tableDataInfo' :key='idx'><span>{{idx}}:</span>{{item}}</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import constant from '../utils/constant'
import axios from 'axios'
import qs from 'qs'
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      dialogVisible: false,
      tableLoading: false,
      currentPage4: 1,
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
        caseNumber: '',
        pageSize: '',
        currentPage: ''
      },
      tableData: [],
      currentPage: 1,
      total:0,
      tableDataInfo: '', //详细信息
      multipleSelection: [] // 选择
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    lookInfo (val) {
      console.log(val)
      this.dialogVisible = true
      this.tableDataInfo = val
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    search () {
      this.tableLoading = true
      setTimeout(()=>{
        this.tableLoading = false
      }, 1000)
      if (this.timeValue && this.timeValue.length > 0) {
        this.form.startTime = this.timeValue[0]
        this.form.endTime = this.timeValue[1]
      }
      axios({
        url: constant.baseUrl + constant.queryCaseByWhere,
        data: qs.stringify(this.form),
        method: 'post'
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.data
        if (this.tableData) {
          console.log(this.tableData.length)
          this.total= this.tableData.length
        }
      })
    },
    handleSizeChange (val) {
      this.form.pageSize = val
      console.log(`每页 ${val} 条`)
      this.search()
    },
    handleCurrentChange (val) {
      this.form.currentPage = val
      console.log(`当前页: ${val}`)
      this.search()
    }
  }
}
</script>
<style lang="scss">
  .record{
    height: 100%;
    padding:0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
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
      width: 100%;
      height:40px;
      background-color: #D9E0E7;
      line-height:40px;
      color:#606266;
      margin-left:20px;
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
    height:400px;
    overflow: scroll;
    div{
      margin-bottom: 10px;
      span{
        margin-right: 20px;
      }
    }
  }

</style>