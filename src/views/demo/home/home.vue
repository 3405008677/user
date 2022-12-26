<template>
  <div id="recent">
    <div v-for="(item, index) in beanArr" :key="index">
      <HomeRecent :recent="item" :direction="index" />
    </div>
    <div class="flex-j-a loading" v-show="loading">
      <span>努力加载中···&nbsp;&nbsp;</span><el-icon><Loading /></el-icon>
    </div>
    <div class="flex-j-a loading" v-show="!loading">
      <span>已经到底了哦~&nbsp;&nbsp;</span><el-icon><Bell /></el-icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import dynamic from '@/api/dynamic'
  import { HomeRecent } from '@/components/HomeRecent'
  let beanArr = ref<[]>([])
  let page = ref(1)
  let limit = ref(10)
  let loading = ref(true)
  // 获取用户动态
  const getThumb = async () => {
    if (loading.value) {
      dynamic.thumbDetail({ pageNum: page.value, pageSize: limit.value }).then((res) => {
        // @ts-ignore
        beanArr.value.push(...res.bean)
        // beanArr.value.concat(res.bean)
        if (res.bean.length > 0) {
          page.value++
          loading.value = true
        } else {
          loading.value = false
        }
      })
    }
    loading.value = false
  }
  getThumb()
  onMounted(() => {
    window.onscroll = () => {
      // 变量scrollTop 是滚动条滚动时距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight 是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight 是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight > scrollHeight - 160) {
        getThumb()
      }
    }
  })
  onUnmounted(() => {
    window.onscroll = null
  })
</script>
<style scoped lang="scss">
  .loading {
    line-height: 30px;
    padding-top: 30px;
  }
</style>
