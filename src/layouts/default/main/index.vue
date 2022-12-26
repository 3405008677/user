<template>
  <div id="aside-content" v-if="appStore.isCardIcon">
    <CardIcon />
    <Announcement />
  </div>
  <div id="recent-posts" :class="appStore.isCardIcon ? '' : 'isCardHide'">
    <PageLayout />
  </div>
</template>
<script lang="ts" setup>
  import PageLayout from '@/layouts/page/index.vue'
  import { CardIcon } from '@/components/AsideContent'
  import { Announcement } from '@/components/AsideContent'
  import { appStore } from '@/store'
</script>
<style scoped lang="scss">
  #aside-content {
    position: sticky;
    top: 100px;
    width: 25%;
    margin-right: 15px;
    > div {
      margin-bottom: 20px;
    }
  }
  #recent-posts {
    width: 75%;
    background: #fff;
  }
  .isCardHide {
    width: 100% !important;
    padding: 20px;
    box-shadow: $--card-box-shadow;
  }

  @media screen and (max-width: 1000px) {
    #aside-content {
      display: none !important;
    }
    #recent-posts {
      width: 100% !important;
    }
  }
</style>
