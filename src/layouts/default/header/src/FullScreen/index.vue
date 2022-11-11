<template>
  <el-tooltip class="box-item" effect="dark" content="全屏" placement="bottom">
    <el-icon @click="toggle"><FullScreen /></el-icon>
  </el-tooltip>
</template>
<script lang="ts" setup>
  import { useFullscreen } from '@vueuse/core'
  const { toggle } = useFullscreen()
</script>
<style scoped lang="scss">
* {
  color: $--header-size-color;
}
</style>

