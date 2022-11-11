<template>
  <div class="menu">
    <div class="flex-j-a item cursor-pointer" v-for="(item, index) in props.data" :key="index">
      <el-icon :size="18">
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { PropsType } from '../rule'
  const props = defineProps<{ data: Array<PropsType> | [] }>()
</script>
<style scoped lang="scss">
  .menu {
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 5px 20px -4px rgb(0 0 0 / 50%);
    overflow: hidden;
    .item {
      padding: 8px 16px;
      white-space: nowrap;
      &:hover {
        background-color: #75c8ffd5;
        color: #fff;
      }
    }
  }
</style>
