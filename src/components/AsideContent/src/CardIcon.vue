<template>
  <div class="card-icon">
    <div class="card-info-icon">
      <el-avatar
        class="avatar"
        :size="100"
        :src="circleUrl"
        @mouseenter="resMouseEvent(true)"
        @mouseleave="resMouseEvent(false)"
      />
      <p>{{ userName }}</p>
    </div>
    <div class="card-info-data">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p></p>
    <div class="card-info-social"></div>
  </div>
</template>
<script lang="ts" setup>
  import { userStore } from '@/store'
  const userName = computed(() => userStore.userInfo.name)
  let mouseEvent = ref('')
  const resMouseEvent = (judge: boolean) => {
    if (judge === true) {
      mouseEvent.value = 'vatarRotateStart'
    } else {
      mouseEvent.value = ''
      mouseEvent.value = 'vatarRotateEnd'
    }
  }
  const circleUrl = ref('https://qny.aqingya.cn/img/p26w3e.png')
</script>
<style scoped lang="scss">
  .card-icon {
    width: 100%;
    position: relative;
    padding: 20px 24px;
    box-shadow: $--card-box-shadow;
    text-align: center;
  }
  .avatar {
    animation: v-bind('mouseEvent') 1s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }
</style>
