<template>
  <div
    id="header-wrap"
    :class="appStore.isHome ? 'full-page' : 'full-page-is'"
    :style="'background-image: url(' + backImg + ');'"
  >
    <nav class="flex-a nav">
      <div class="header-left cursor-pointer">
        {{ name }}
      </div>
      <div class="header-right flex">
        <template v-for="(item, index) in data" :key="index">
          <Menu :data="item" />
        </template>
      </div>
      <UserDropDown />
    </nav>
    <div class="home-text"><Text /></div>
    <div class="home-icon" v-if="appStore.isHome"><Icon /></div>
  </div>
</template>
<script lang="ts" setup>
  import type { Ref } from 'vue'
  import type { PropsType } from './src/rule'
  import Menu from './src/menu/menu.vue'
  import Text from './src/text.vue'
  import Icon from './src/icon.vue'
  import UserDropDown from './src/userDropDown.vue/userDropDown.vue'
  import { appStore } from '@/store'

  let backImg = 'https://qny.aqingya.cn/img/p26w3e.png'
  let name = 'Blog'
  let data: Ref<PropsType[]> = ref([
    {
      title: '主页',
      icon: 'HomeFilled',
      to: '/home',
    },
    {
      title: '文章',
      icon: 'HomeFilled',
      to: '',

      children: [
        { title: '找文章', icon: 'HomeFilled', to: 'home' },
        { title: '我的文章', icon: 'HomeFilled', to: 'home' },
        { title: '写文章', icon: 'HomeFilled', to: '/edit' },
      ],
    },
    {
      title: '好友',
      icon: 'HomeFilled',
      to: '',

      children: [
        { title: '列表', icon: 'HomeFilled', to: 'home' },
        { title: '消息', icon: 'HomeFilled', to: 'home' },
        { title: '添加', icon: 'HomeFilled', to: 'home' },
      ],
    },
  ])
</script>
<style scoped lang="scss">
  #header-wrap {
    position: relative;
    width: 100%;
    background-color: #49b1f5;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      content: '';
      left: 0;
    }
  }
  .full-page {
    height: 100vh;
    background-attachment: fixed;
  }
  .full-page-is {
    height: 400px;
    background-attachment: fixed;
    align-content: center;
  }
  .nav {
    min-width: 390px;
    position: fixed;
    top: 00px;
    left: 0;
    padding: 0 30px;
    line-height: 60px;
    background: rgba(255,255,255,0.5);
    backdrop-filter: saturate(180%) blur(20px);
    z-index: 999;
    width: 100%;
    justify-content: space-between;
  }
  .home-icon {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .home-text {
    position: absolute;
    width: 100%;
    top: 43%;
  }
</style>
