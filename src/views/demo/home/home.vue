<template>
  <div> hello word </div>
  <el-button @click="a">点击</el-button>
</template>
<script lang="ts" setup>
  import request from '@/utils/request'
  const a = () => {
    request({
      method: 'post',
      url: '/dynamic/append',
      data: {
        title: '1',
        content: '1111',
      },
    })
  }
</script>
<style scoped></style>
