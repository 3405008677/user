<template>
  <div id="recent">
    <div
      class="recent-item flex"
      v-for="(item, index) in recent"
      :key="index"
      @mouseenter="resMouseEvent(true)"
      @mouseleave="resMouseEvent(false)"
    >
      <div class="recent-item-img">
        <el-image style="width: 100%; height: 100%" :src="item.image" fit="cover" />
      </div>
      <div class="recent-item-text flex-c">
        <h2 class="text-hide">
          {{ item.title }}
        </h2>
        <p style="padding-top: 10px">{{ item.content }}</p>
        <div class="item-meta">
          <span class="item-meta-1 cursor-pointer">
            <el-icon :size="iconSize"><CaretTop /></el-icon>&nbsp;赞同{{ item.thumb }}
          </span>
          <span class="item-meta-2 cursor-pointer">
            <el-icon :size="iconSize"><CaretBottom /></el-icon>
          </span>
          <span class="item-meta-3 cursor-pointer">
            <el-icon :size="iconSize"><Comment /></el-icon>&nbsp;评论{{ item.thumb }}
          </span>
          <span class="item-meta-4 cursor-pointer">
            <el-icon :size="iconSize"><StarFilled /></el-icon>&nbsp;分享
          </span>
          <span class="item-meta-5 cursor-pointer">
            <el-icon :size="iconSize"><Promotion /></el-icon>&nbsp;收藏
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  let iconSize = 20
  let mouseEvent = ref('')
  const resMouseEvent = (judge: boolean) => {
    if (judge === true) {
      mouseEvent.value = 'recentBig'
    } else {
      mouseEvent.value = 'recentMsall'
    }
  }
  const recent = [
    {
      id: '',
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: '111', //点赞
      comment: '', //评论
      share: '', //分享
      collect: '', //收藏
    },
    {
      id: '',
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: '111', //点赞
      comment: '', //评论
      share: '', //分享
      collect: '', //收藏
    },
    {
      id: '',
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: '111', //点赞
      comment: '', //评论
      share: '', //分享
      collect: '', //收藏
    },
    {
      id: '',
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: '111', //点赞
      comment: '', //评论
      share: '', //分享
      collect: '', //收藏
    },
    {
      id: '',
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: 'Endnotes20 破解版安装及使用简单教程',
      time: '2022-4-26',
      content: '',
      thumb: '111', //点赞
      comment: '', //评论
      share: '', //分享
      collect: '', //收藏
    },
  ]
  const clickThumb = (thumb: number, type: number) => {}
</script>
<style scoped lang="scss">
  .recent-item {
    margin-bottom: 20px;
    box-shadow: $--card-box-shadow;
    border-radius: 6px;
    overflow: hidden;
    .el-image {
      animation: v-bind('mouseEvent') 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    .recent-item-img {
      width: 35%;
      height: 240px;
      max-height: 240px;
    }
    .recent-item-text {
      width: 65%;
      padding: 0 40px;
      p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    .item-meta {
      color: #8590a6;
      line-height: 30px;
      span {
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        margin: 0 8px;
        &:hover {
          color: #5986da;
        }
      }
      .item-meta-1,
      .item-meta-2 {
        border-radius: 4px;
        padding: 0 8px;
        color: #056de8;
        background: rgba(5, 109, 232, 0.1);
        height: 100%;
        &:hover {
          background-color: rgba(5, 109, 232, 0.15);
        }
      }
      .item-meta-1 {
        margin-left: 0;
      }
      .item-meta-2 {
        margin-left: 0;
      }
      .item-meta-click {
        color: #fff;
        background: #056de8;
      }
    }
  }
</style>
