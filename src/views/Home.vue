<template>
  <div class="blt-container">
    <blt-aside></blt-aside>
    <blt-main></blt-main>
  </div>
</template>

<script>
import BltAside from '../components/BltAside'
import BltMain from '../components/BltMain'
export default {
  components: {
    BltAside,
    BltMain
  },
  created () {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (!userInfo) {
      this.$router.replace({
        path: '/login'
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
}
.blt-main {
  background: #999;
}
</style>
