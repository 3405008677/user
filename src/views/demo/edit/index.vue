<template>
  <div class="edit">
    <el-input v-model="appendTitle" placeholder="标题" />
    <Content v-model="appendContent" />
    <el-divider />
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
  import Header from './header/index.vue'
  import Content from './content/index.vue'
  import dynamic from '@/api/dynamic'
  const appendTitle = ref('')
  const appendContent = ref('')

  const submit = () => {
    dynamic.append({
      title: appendTitle.value,
      content: appendContent.value,
    })
  }
</script>
<style scoped lang="scss">
  .edit {
    position: relative;
    background-color: #fff;
  }
  .bottom {
    width: 100%;
    bottom: 0;
    line-height: 50px;
    justify-content: space-between;
  }
</style>
