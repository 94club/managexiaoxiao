<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../public/css/main.scss';
@import './style/iconfont.scss';
#app{
  font-size: 16px;
  font-family:Microsoft YaHei;
}
.width-200 {
  width: calc(100% - 200px)!important;
}
.width-64 {
  width: calc(100% - 64px)!important;
}

.wdith200 {
  width: 200px!important;
}
.width64 {
  width: 64px!important;
}
</style>
