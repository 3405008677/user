<template>
  <div id="recent">
    <div v-for="(item, index) in bean" :key="index">
      <HomeRecent :recent="item" :direction="index" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import dynamic from '@/api/dynamic'
  import { HomeRecent } from '@/components/HomeRecent'
  let page = ref(1)
  let limit = ref(10)
  // 获取用户动态
  let { bean } = await dynamic.thumbDetail({ pageNum: page.value, pageSize: limit.value })
</script>
<style scoped lang="scss"></style>
