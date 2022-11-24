<template>
  <div class="edit">
    <input class="title" v-model="appendTitle" placeholder="请输入标题..." />
    <el-divider style="margin-bottom: 26px" />
    <Content v-model="appendContent" />
    <el-divider style="margin: 26px 0" />
    <p>发布设置</p>
    <div class="bottom flex-a">
      <div class="flex-j-a">
        <p>回到顶部</p>
      </div>
      <div class="flex-j-a">
        <el-button @click="submit">预览</el-button>
        <el-button @click="submit">发布</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Content from './content/index.vue'
  import dynamic from '@/api/dynamic'
  import { appStore } from '@/store'
  const appendTitle = ref('')
  const appendContent = ref('')
  appStore.setCarIcon()

  const submit = () => {
    // dynamic.append({
    //   title: appendTitle.value,
    //   content: appendContent.value,
    // })
  }
  onBeforeUnmount(() => {
    appStore.setCarIcon()
  })
</script>
<style scoped lang="scss">
  .edit {
    position: relative;
    background-color: #fff;
    .title {
      width: 100%;
      border: none;
      font-size: 32px;
      font-weight: 600;
      padding: 12px 0;
    }
  }
  .bottom {
    width: 100%;
    bottom: 0;
    line-height: 50px;
    justify-content: space-between;
  }
  .ql-toolbar {
    position: absolute;
    top: 0;
  }
</style>
