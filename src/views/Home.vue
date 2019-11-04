<template>
  <div class="blt-container">
    <blt-header></blt-header>
    <div class="blt-bot">
      <blt-aside></blt-aside>
      <blt-main></blt-main>
    </div>
  </div>
</template>

<script>
import BltHeader from '../components/BltHeader'
import BltAside from '../components/BltAside'
import BltMain from '../components/BltMain'
export default {
  components: {
    BltAside,
    BltMain,
    BltHeader
  },
  created () {
    let loadingInstance = this.$loading()
    setTimeout(() => {
      loadingInstance.close()
    }, 2000)
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$axios.get(this.$constant.getUserInfo).then((res) => {
        this.$store.dispatch('updateUserInfo', res)
      })
    }
  }
}
</script>
<style lang="scss">
.blt-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width:100%;
  display: flex;
  flex-direction: column;
  // .blt-top{
  //   height: 50px;
  // }
  .blt-bot{
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>
