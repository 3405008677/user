<template>
  <div
    class="flex-a menuItem hoverColor"
    @mouseenter="resMouseEvent(true)"
    @mouseleave="resMouseEvent(false)"
  >
    <el-icon :size="18">
      <component :is="props.data.icon" />
    </el-icon>
    <span>{{ props.data.title }}</span>
    <Menu v-show="hide" :data="props.data.children!" />
  </div>
</template>
<script lang="ts" setup>
  import type { PropsType } from './rule'
  import Menu from './menu.vue'
  const props = defineProps<{ data: PropsType }>()
  let mouseEvent = ref('')
  let hide = ref(false)
  const resMouseEvent = (judge: boolean) => {
    if (judge === true) {
      hide.value = true
      mouseEvent.value = 'menuItemHover'
    } else {
      hide.value = false
      mouseEvent.value = 'menuItemLeave'
    }
  }
</script>
<style scoped lang="scss">
  span {
    padding-left: 6px;
  }
  .menuItem {
    position: relative;
    padding: 0 10px;
  }
  .hoverColor {
    &::after {
      position: absolute;
      content: '';
      bottom: 10px;
      left: 0;
      width: 0%;
      height: 4px;
      animation: v-bind('mouseEvent') 0.2s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      background-color: #1aa5ff;
    }
  }
</style>
