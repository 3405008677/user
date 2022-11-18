<template>
  <div id="recent">
    <div
      class="recent-item flex"
      @mouseenter="resMouseEvent(true)"
      @mouseleave="resMouseEvent(false)"
    >
      <div class="recent-item-img" v-if="direction">
        <el-image style="width: 100%; height: 100%" :src="props.recent.image" fit="cover" />
      </div>
      <div class="recent-item-text flex-c">
        <h2 class="text-hide">
          {{ props.recent.title }}
        </h2>
        <p style="padding-top: 10px">{{ props.recent.content }}</p>
        <div class="item-meta">
          <span @click="isThumb" :class="thumb ? 'item-meta-click' : 'item-meta-2 cursor-pointer'">
            <el-icon :size="iconSize"><CaretTop /></el-icon>&nbsp;赞同{{ props.recent.thumb }}
          </span>
          <span
            @click="isTrample"
            :class="trample ? 'item-meta-click' : 'item-meta-2 cursor-pointer'"
          >
            <el-icon :size="iconSize"><CaretBottom /></el-icon>
          </span>
          <span class="item-meta-3 cursor-pointer">
            <el-icon :size="iconSize"><Comment /></el-icon>&nbsp;评论{{ props.recent.thumb }}
          </span>
          <span class="item-meta-4 cursor-pointer">
            <el-icon :size="iconSize"><StarFilled /></el-icon>&nbsp;分享
          </span>
          <span class="item-meta-5 cursor-pointer">
            <el-icon :size="iconSize"><Promotion /></el-icon>&nbsp;收藏
          </span>
        </div>
      </div>
      <div class="recent-item-img" v-if="!direction">
        <el-image style="width: 100%; height: 100%" :src="props.recent.image" fit="cover" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { Recent } from '../rule'
  const props = defineProps<{ recent: Recent; direction: number }>()
  let iconSize = 20
  let mouseEvent = ref('')
  let direction = computed(() => props.direction % 2)
  const resMouseEvent = (judge: boolean) => {
    if (judge === true) {
      if ((mouseEvent.value = 'recentMsall')) {
        mouseEvent.value = 'recentBig'
      }
    } else {
      if ((mouseEvent.value = 'recentBig')) {
        mouseEvent.value = 'recentMsall'
      }
    }
  }

  // 点赞
  let thumb = ref(false)
  // 踩
  let trample = ref(false)
  /**
   * 已经点赞
   * 则 取消点赞 数量减少
   * else
   * 没有点赞
   * 则 点赞 数量增加
   */
  const isThumb = () => {
    if (thumb.value) {
      thumb.value = !thumb.value
      --props.recent.thumb
    } else {
      if (trample.value === true) trample.value = !trample.value
      thumb.value = !thumb.value
      ++props.recent.thumb
    }
  }
  const isTrample = () => {
    if (trample.value) {
      trample.value = !trample.value
      --props.recent.trample
    } else {
      if (thumb.value === true) thumb.value = !thumb.value
      trample.value = !trample.value
      ++props.recent.trample
    }
  }

  const clickThumb = () => {
    if (props.recent.isThumb === 0) {
      // 两个都不亮
    } else if (props.recent.isThumb === 1) {
      // 点赞了
      thumb.value = true
    } else if (props.recent.isThumb === 2) {
      // 踩了
      trample.value = true
    }
  }
  onMounted(() => {
    clickThumb()
  })
</script>
<style scoped lang="scss">
  .recent-item {
    margin-bottom: 20px;
    box-shadow: $--card-box-shadow;
    border-radius: 6px;
    overflow: hidden;
    .el-image {
      animation: v-bind('mouseEvent') 0.5s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    .recent-item-img {
      width: 35%;
      height: 240px;
      max-height: 240px;
      overflow: hidden;
    }
    .recent-item-text {
      width: 65%;
      padding: 0 40px;
      p {
        padding: 16px 0;
        text-indent: 2em;
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
      }
      .item-meta-1,
      .item-meta-2 {
        margin-left: 0;
        border-radius: 4px;
        padding: 0 8px;
        color: #056de8;
        background: rgba(5, 109, 232, 0.1);
        height: 100%;
        transition: opacity 0.3s;
        &:hover {
          color: #5986da;
          background-color: rgba(5, 109, 232, 0.15);
        }
      }
      .item-meta-click {
        margin-left: 0;
        border-radius: 4px;
        padding: 0 8px;
        height: 100%;
        color: #fff;
        background: #056de8;
        transition: hover 0.3s;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
