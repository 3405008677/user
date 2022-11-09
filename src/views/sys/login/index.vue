<template>
  <div>
    <el-button @click="login">登录</el-button>
    <el-button @click="login">查询当前用户动态</el-button>
    <el-button @click="add">新增动态</el-button>
    <el-button @click="login">删除动态</el-button>
    <el-button @click="login">点赞</el-button>
  </div>
</template>
<script lang="ts" setup>
  import { append } from '@/api/dynamic'
  import { userStore } from '@/store'
  const login = () => {
    userStore.login({ username: 'admin', password: '123456' })
  }
  const add = () => {
    append({ title: '标题', content: '内容' })
  }
</script>
<style scoped lang="scss"></style>
