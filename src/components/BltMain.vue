<template>
  <div class="blt-main" :class="isCollapse? 'width-64' : 'width-200'">
    <div class="blt-main-content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>

<style lang="scss">
  .blt-main {
    display: inline-block;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #d9e0e7;
    &-content {
      flex:1;
      height: 100%;
      overflow: auto;
      background: #999;
      padding: 20px 0;
    }
  }
</style>
