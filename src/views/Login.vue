<template>
  <div class="login-box">
    <div class="login-middle">
      <div class="md-content">
        <div class="md-input">
          <div class="input-top">一路行国寿准行管理平台</div>
          <div class="login-item">
            <el-input placeholder="请输入帐号" v-model.trim="userInfo.username" clearable  @keyup.enter.native="login"></el-input>
          </div>
          <div class="login-item">
            <el-input placeholder="请输入密码" v-model.trim="userInfo.pwd" show-password  @keyup.enter.native="login"></el-input>
          </div>
          <div class="rem-pwd" @click="rempwdCheck">
            <div class="blt-checkbox iconfont" :class="remPwd?'icon-true':''" ></div>记住密码
          </div>
          <el-button class="login-btn" type="primary" :loading="isLogin" @click="login">登录</el-button>
        </div>
      </div>
    </div>
    <div class="login-bottom">
      <p>版权所有&copy;alistar(feng--zao)</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo: {
        username: '',
        pwd: ''
      },
      remPwd: '',
      isLogin: false
    }
  },
  mounted () {
    let userInfo
    if (localStorage.getItem('userInfo')) {
      userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }
    let isRemeber = localStorage.getItem('isRemeber')
    if (isRemeber === 'true') {
      this.remPwd = true
      if (userInfo) {
        this.userInfo = userInfo
      }
    } else {
      this.remPwd = false
    }
  },
  methods: {
    rempwdCheck () {
      this.remPwd = !this.remPwd
    },
    login () {
      if (!this.userInfo.username) {
        this.$message({
          message: '用户名不能为空',
          type: 'error'
        })
        return
      }
      if (!this.userInfo.pwd) {
        this.$message({
          message: '密码不能为空',
          type: 'error'
        })
        return
      }
      this.isLogin = true
      setTimeout(() => {
        this.isLogin = false
      }, 2000)
      this.$axios.post(this.$constant.login, this.userInfo).then((res) => {
        this.$message({
          type: 'success',
          message: '登录成功'
        })
        localStorage.setItem('isRemeber', this.remPwd)
        if (this.remPwd) {
          localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        } else {
          localStorage.setItem('userInfo', '')
        }
        localStorage.setItem('token', res.token)
        this.$router.replace({
          path: '/dashboard'
        })
      })
    }
  }
}
</script>
<style lang="scss">
.login-box {
  position: absolute;
  background-color: #f0f7fb;
  width: 100%;
  height: 100%;
  .login-top {
    height: 52px;
    img {
      margin-top: 6px;
      height: 40px;
      margin-left: 60px;
    }
  }
  .login-middle {
    height: 540px;
    background: linear-gradient(
      90deg,
      rgba(14, 110, 83, 1),
      rgba(40, 78, 116, 1),
      rgba(192, 39, 44, 1)
    );
    .md-content {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      .md-china {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .md-bigimg {
        position: absolute;
        top: 76px;
        left: 178px;
        bottom: 108px;
      }
      .md-input {
        position: absolute;
        transform: translateX(-50%);
        bottom: 90px;
        left: 50%;
        width: 420px;
        height: 420px;
        background: #fff;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 30px;
        .input-top {
          width: 100%;
          height: 96px;
          font-size: 24px;
          font-weight: 400;
          line-height: 96px;
          text-align: center;
        }
        .login-btn {
          height: 40px;
          border-radius: 4px;
        }
      }
    }
  }

  .login-bottom {
    margin-top: 60px;
    font-size: 14px;
    color: #2e2e2e;
    text-align: center;
    p {
      margin-bottom: 20px;
    }
  }
}
.login-item {
  // 输入框
  width: 100%;
  height: 48px;
  margin-bottom: 22px;
  .el-input__suffix {
    right: 16px;
  }
  input {
    display: inline-block;
    padding: 14px 20px;
    height: 42px;
    line-height: 28px;
    background-color: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    transition: all 0.3s;
    &:focus {
      border-color: #019858;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(0, 186, 110, 0.2);
    }
  }
}
// 记住密码
.rem-pwd {
  margin-bottom: 24px;
  cursor: pointer;
  .blt-checkbox {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border: 0;
    border: 1px solid #ccc;
    margin-right: 10px;
    display: inline-block;
  }
  .icon-true {
    color: #fff;
    text-align: center;
    line-height: 18px;
    background-color: #019858;
    font-size: 14px !important;
  }
}
</style>
