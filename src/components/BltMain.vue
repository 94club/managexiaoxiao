<template>
  <div class="blt-main">
    <blt-header></blt-header>
    <div class="blt-main-content">
      <router-view />
    </div>
  </div>
</template>
<script>
import BltHeader from './BltHeader'
export default {
  components: {
    BltHeader
  }
}
</script>

<style lang="scss">
  .blt-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    &-header {
      height: 60px;
      background: #eee;
    }
    &-content {
      flex:1;
      overflow: auto;
      background: #999
    }
  }
</style>
