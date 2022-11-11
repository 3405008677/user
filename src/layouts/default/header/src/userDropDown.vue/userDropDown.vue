<template>
  <el-dropdown>
    <div class="flex-a cursor-pointer">
      <el-image class="userImage" :src="imageUrl" style="width: 26px; height: 26px" fit="cover" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="House">主页</el-dropdown-item>
        <el-dropdown-item divided icon="Lock">锁定屏幕</el-dropdown-item>
        <el-dropdown-item icon="SwitchButton" @click="quit">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
  import { userStore } from '@/store'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const imageUrl = computed(() => {
    if (userStore.userInfo.image) {
      return userStore.userInfo.image
    } else {
      return 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    }
  })
  const quit = () => {
    ElMessageBox.confirm('是否确认退出系统?', '温馨提示!', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      userStore.logout()
      ElNotification({
        title: '提示',
        message: '退出成功',
        type: 'success',
      })
      router.replace('/login')
    })
  }
</script>
<style scoped lang="scss">
  * {
    color: $--header-size-color;
  }
  .flex-a {
    padding: 0 10px;
  }
  .userImage {
    border-radius: 4px;
  }
</style>
