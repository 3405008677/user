<template>
  <div>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router'
  import { userStore } from '@/store'
  const router = useRouter()
  const route = useRoute()
  const login = async () => {
    await userStore.login({ username: 'admin', password: '123456' })
    signSuccess()
  }
  // login in go to page
  const signSuccess = () => {
    if (route.query.redirect) {
      router.replace(route.query.redirect as string)
    } else {
      router.replace('/home')
    }
  }
</script>
<style scoped lang="scss"></style>
