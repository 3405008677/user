<template>
  <div class="common-layout">
    <el-container>
      <el-header height="100%" class="no-padding"><Header /></el-header>
      <el-main height="100%"><Main /></el-main>
      <el-footer height="100%" class="no-padding"><Footer /></el-footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
  import Header from './header/index.vue'
  import Main from './main/index.vue'
  import Footer from './footer/index.vue'

</script>
<style scoped lang="scss">

</style>
