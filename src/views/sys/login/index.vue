<template>
  <div>
    <el-button @click="login">登录</el-button>
    <div id="toolbar">
      <!-- Add buttons as you would before -->
      <button class="ql-bold">1</button>
      <button class="ql-italic">2</button>

      <!-- But you can also add your own -->
      <button id="custom-button">3</button>
    </div>
    <div id="editor"></div>
  </div>
</template>
<script lang="ts" setup>
  import 'quill/dist/quill.snow.css'
  import Quill from 'quill'
  import { useRouter, useRoute } from 'vue-router'
  import { userStore } from '@/store'
  const router = useRouter()
  const route = useRoute()
  const login = async () => {
    await userStore.login({ username: 'admin', password: '123456' })
    console.log(22)
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
  // =================================================
  onMounted(() => {
    let quill = new Quill('#editor', {
      modules: {
        toolbar: '#toolbar',
      },
    })
    let customButton: any = document.querySelector('#custom-button')
    customButton.addEventListener('click', function () {
      console.log('Clicked!')
    })
  })
</script>
<style scoped lang="scss"></style>
