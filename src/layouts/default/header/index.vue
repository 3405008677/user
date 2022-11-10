<template>
  <div id="header-wrap" class="full_page" :style="'background-image: url(' + backImg + ');'">
    <nav class="flex-a nav">
      <div class="header-left cursor-pointer">
        {{ name }}
      </div>
      <div class="header-right flex">
        <template v-for="(item, index) in data" :key="index">
          <MenuItem :data="item" />
        </template>
      </div>
    </nav>
    <div><Text /></div>
    <div><Icon /></div>
  </div>
</template>
<script lang="ts" setup>
  import type { Ref } from 'vue'
  import type { PropsType } from './src/rule'
  import MenuItem from './src/menuItem.vue'
  import Text from './src/text.vue'
  import Icon from './src/icon.vue'
  let backImg = 'https://qny.aqingya.cn/img/p26w3e.png'
  let name = 'Blog'
  let data: Ref<PropsType[]> = ref([
    {
      title: '主页',
      icon: 'HomeFilled',
      children: [
        { title: '主页1', icon: 'HomeFilled' },
        { title: '主页2', icon: 'HomeFilled' },
        { title: '主页3', icon: 'HomeFilled' },
      ],
    },
    {
      title: '主页',
      icon: 'HomeFilled',
      children: [
        { title: '主页1', icon: 'HomeFilled' },
        { title: '主页2', icon: 'HomeFilled' },
        { title: '主页3', icon: 'HomeFilled' },
      ],
    },
    {
      title: '主页',
      icon: 'HomeFilled',
      children: [
        { title: '主页1', icon: 'HomeFilled' },
        { title: '主页2', icon: 'HomeFilled' },
        { title: '主页3', icon: 'HomeFilled' },
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
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: space-between;
    text-align: center;
  }
  .full_page {
    height: 100vh;
    background-attachment: fixed;
  }
  .flex-a {
    justify-content: space-between;
  }
  .nav {
    padding: 0 30px;
    line-height: 60px;
    background: rgba(255, 255, 255, 0.8);
  }
</style>
