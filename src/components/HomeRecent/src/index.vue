<template>
  <div id="recent">
    <div class="recent-item flex">
      <div class="recent-item-img" v-if="direction && props.recent.coverImage">
        <el-image style="width: 100%; height: 100%" :src="imgFromData" fit="cover" />
      </div>
      <div class="recent-item-text flex-c" :style="props.recent.coverImage ? '' : 'width:100%;'">
        <h2 @click="goToArticle" class="text-hide">
          {{ props.recent.title }}
        </h2>
        <p style="padding-top: 10px">{{ props.recent.content }}</p>
        <div class="item-meta">
          <span
            @click="isThumb(props.recent.id)"
            :class="thumb ? 'item-meta-click' : 'item-meta-2 cursor-pointer'"
          >
            <el-icon :size="iconSize"><CaretTop /></el-icon>&nbsp;赞同{{
              props.recent.thumb_number
            }}
          </span>
          <span
            @click="isTrample(props.recent.id)"
            :class="trample ? 'item-meta-click' : 'item-meta-2 cursor-pointer'"
          >
            <el-icon :size="iconSize"><CaretBottom /></el-icon>
          </span>
          <span class="item-meta-3 cursor-pointer">
            <el-icon :size="iconSize"><Comment /></el-icon>&nbsp;评论{{ props.recent.thumb }}
          </span>
          <span @click="collect(props.recent.id)" class="item-meta-4 cursor-pointer">
            <el-icon :style="isCollect" :size="iconSize"><StarFilled /></el-icon>&nbsp;收藏
          </span>
          <span class="item-meta-5 cursor-pointer">
            <el-icon :size="iconSize"><Promotion /></el-icon>&nbsp;分享
          </span>
        </div>
        <div class="item-meta flex-a">
          <span style="margin: 0 10px 0 0">
            <el-icon><Calendar /></el-icon>&nbsp;&nbsp;{{ props.recent.createTime }}
          </span>
          <span style="margin: 0 10px 0 0">
            <el-icon><CollectionTag /></el-icon>&nbsp;&nbsp;{{}}
          </span>
        </div>
      </div>
      <div class="recent-item-img" v-if="!direction && props.recent.coverImage">
        <el-image style="width: 100%; height: 100%" :src="imgFromData" fit="cover" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { Recent } from '../rule'
  import dynamic from '@/api/dynamic'
  import upload from '@/api/upload'
  import { userStore } from '@/store'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const props = defineProps<{ recent: Recent; direction: number }>()
  let iconSize = 20
  let direction = computed(() => props.direction % 2)
  let imgFromData = ref()
  let isCollect = ref('')
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
  const isThumb = async (id: number) => {
    await dynamic.thumb({ dynId: id, byUserId: userStore.userInfo.id })
    if (thumb.value) {
      thumb.value = !thumb.value
      props.recent.thumb_number--
    } else {
      if (trample.value === true) trample.value = !trample.value
      thumb.value = !thumb.value
      props.recent.thumb_number++
    }
  }
  /**
   * 已经踩
   * 则 取消踩 数量不变
   * else
   * 没有踩
   *   是否点赞
   *     点赞了则 数量--
   *     没点赞则  不变
   */
  const isTrample = (id: number) => {
    dynamic.trample({ dynId: id })
    if (trample.value) {
      trample.value = !trample.value
    } else {
      if (thumb.value === true) {
        thumb.value = !thumb.value
        props.recent.thumb_number--
      }
      trample.value = !trample.value
    }
  }
  // 初始化
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
    if (props.recent.isCollect) {
      isCollect.value = 'color:#056de8;'
    }
  }
  // 收藏
  const collect = (id: number) => {
    dynamic.collect({ dynId: id })
    isCollect.value == '' ? (isCollect.value = 'color:#056de8;') : (isCollect.value = '')
  }
  // 获取图片
  if (props.recent.coverImage) {
    upload.fileGet({ fileName: props.recent.coverImage }).then((res) => {
      imgFromData.value = res.bean
    })
  }
  // 跳转详情页面
  const goToArticle = () => {
    router.push({
      name: '/article',
      params: { dynId: 123 },
    })
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
      transition: filter 375ms ease-in 0.2s, transform 0.6s;
    }
    &:hover .el-image {
      transform: scale(1.1);
    }
    .recent-item-img {
      width: 35%;
      height: 240px;
      max-height: 240px;
      overflow: hidden;
    }
    .recent-item-text {
      width: 65%;
      padding: 20px;
      p {
        margin-bottom: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    .item-meta {
      color: #8590a6;
      height: 35px;
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
  @media screen and (max-width: 630px) {
    .recent-item-img {
      display: none !important;
    }
    .recent-item-text {
      width: 100% !important;
      padding: 14px !important;
    }
  }
</style>
