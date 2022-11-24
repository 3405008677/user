<template>
  <div class="nav-item">
    <router-link :to="data.to">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-food-cookie"></use>
      </svg>
      <span>{{ props.data.title }}</span>
    </router-link>
    <div class="menu">
      <router-link :to="item.to" v-for="(item, index) in props.data.children" :key="index">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-food-cookie"></use>
        </svg>
        <span>{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { PropsType } from '../rule'
  const props = defineProps<{ data: PropsType }>()
</script>
<style scoped lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .nav-item {
    padding: 0 10px;
    color: #4c4948;
    font-weight: 700;
    &:hover {
      color: #49b1f5;
      .menu {
        display: inline-block;
      }
    }
    span {
      display: inline-block;
      padding-left: 6px;
    }
  }
  //
  .menu {
    display: none;
    color: #4c4948;
    position: absolute;
    top: 60px;
    font-size: 16px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 5px 20px -4px rgb(0 0 0 / 50%);
    overflow: hidden;
    animation: upTop 0.3s;
    animation-fill-mode: forwards;

    a {
      display: inline-block;
      line-height: 50px;
      padding: 0 10px;
      margin-left: 6px;
      border-radius: 6px;
      &:hover {
        background: $--text-bg-hover;
        color: #fff;
      }
      &:last-child {
        margin-right: 10px;
      }
      &:first-child {
        margin-left: 10px;
      }
    }
  }
</style>
