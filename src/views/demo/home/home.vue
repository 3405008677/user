<template>
  <div id="recent">
    <div v-for="(item, index) in recent" :key="index">
      <HomeRecent :recent="item" :direction="index" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import dynamic from '@/api/dynamic'
  import { HomeRecent } from '@/components/HomeRecent'
  let page = ref(1)
  let limit = ref(10)
  // 获取用户动态
  let { bean } = await dynamic.thumbDetail({ pageNum: page.value, pageSize: limit.value })
  console.log(bean)

  const recent = [
    {
      id: 0,
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: 111, //点赞
      comment: 22, //评论
      share: '', //分享
      collect: '', //收藏
      isThumb: 0,
    },
    {
      id: 1,
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content:
        'ndnotes20 破解版安装及使用简ndnotes20 破解版安装及使用简ndnotes20 破解版安装及使用简ndnotes20 破解版安装及使用简',
      thumb: 345345, //点赞
      comment: 234, //评论
      share: '', //分享
      collect: '', //收藏
      isThumb: 1,
    },
    {
      id: 2,
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: 12312, //点赞
      comment: 423, //评论
      share: '', //分享
      collect: '', //收藏
      isThumb: 2,
    },
    {
      id: 3,
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: 12, //点赞
      comment: 34, //评论
      share: '', //分享
      collect: '', //收藏
    },
    {
      id: 4,
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: 312, //点赞
      comment: 34, //评论
      share: '', //分享
      collect: '', //收藏
    },
  ]
  const clickThumb = (thumb: number, type: number) => {}
</script>
<style scoped lang="scss"></style>
