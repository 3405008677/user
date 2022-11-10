<template>
  <div id="foot-wrap">
    <div>&copy;{{ createTiem }}&nbsp;-&nbsp;{{ nowTime }}</div>
    <div>Hi,welcome to my blog</div>
    <div class="footer-records">{{ putOnRecords }}</div>
  </div>
</template>
<script lang="ts" setup>
  import { getDateYear } from '@/utils/index'
  let createTiem = '2020',
    nowTime = getDateYear(),
    putOnRecords = '浙 ICP 备 2022003320 号'
</script>
<style scoped lang="scss">
  #foot-wrap {
    font-size: 14px;
    position: relative;
    padding: 40px 20px;
    text-align: center;
    div {
      margin-bottom: 10px;
    }
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      content: '';
    }
    .footer-records {
      display: inline-block;
      padding-left: 26px;
      background: url(https://s2.loli.net/2022/07/06/VyJHdkvMitnIXbG.png) no-repeat;
    }
  }
</style>
