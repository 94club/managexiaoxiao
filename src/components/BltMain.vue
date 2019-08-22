<template>
  <div class="blt-main">
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
  }
}
</script>

<style lang="scss">
  .blt-main {
    flex: 1;
    // display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #d9e0e7;
    &-content {
      flex:1;
      height: 100%;
      overflow: auto;
      // background: #999;
    }
  }
</style>
