<template>
  <div class="common-layout">
    <el-container>
      <el-header height="100%" class="no-padding"><Header /></el-header>
      <el-main height="100%"><Main /></el-main>
      <el-footer height="100%" class="no-padding"><Footer /></el-footer>
      <BackTop />
    </el-container>
  </div>
</template>
<script lang="ts" setup>
  import Header from './header/index.vue'
  import Main from './main/index.vue'
  import Footer from './footer/index.vue'
  import { BackTop } from '@/components/BackTop'
</script>
<style scoped lang="scss">
  .el-main {
    padding: 40px 25px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    max-width: 1200px;
  }
</style>
