<template>
  <div id="aside-content">
    <CardIcon />
  </div>
  <div id="recent-posts">
    <PageLayout />
  </div>
</template>
<script lang="ts" setup>
  import PageLayout from '@/layouts/page/index.vue'
  import { CardIcon } from '@/components/AsideContent'
</script>
<style scoped lang="scss">
#aside-content{
  width: 25%;
  margin-right: 15px;
}
#recent-posts{
  width: 75%;
}
</style>
