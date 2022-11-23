<template>
  <div id="aside-content">
    <CardIcon />
    <Announcement />
  </div>
  <div id="recent-posts">
    <PageLayout />
  </div>
</template>
<script lang="ts" setup>
  import PageLayout from '@/layouts/page/index.vue'
  import { CardIcon } from '@/components/AsideContent'
  import { Announcement } from '@/components/AsideContent'
</script>
<style scoped lang="scss">
  #aside-content {
    width: 25%;
    margin-right: 15px;
    > div {
      margin-bottom: 20px;
    }
  }
  #recent-posts {
    width: 75%;
  }
</style>
