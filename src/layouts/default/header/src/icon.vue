<template>
  <div class="bottom">
    <el-icon class="icon cursor-pointer" @click="goContent" size="30"><ArrowDownBold /></el-icon>
  </div>
</template>
<script setup lang="ts">
  const goContent = () => {
    const dom = document
      .querySelector(`.el-main`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    // dom!.scrollIntoView(true)
    // window.scroll({
    //   top: 100,
    //   left: 0,
    //   behavior: 'smooth',
    // })
  }
</script>
<style lang="scss" scoped>
  .bottom {
    padding-bottom: 20px;
    color: #fff;
    .icon {
      animation: topAndBottomMove 1.5s ease-in infinite;
      animation-fill-mode: forwards;
    }
  }
</style>
