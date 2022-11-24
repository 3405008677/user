<template>
  <div class="edit">
    <input class="title" v-model="appendTitle" placeholder="请输入标题..." />
    <el-divider style="margin-bottom: 26px" />
    <Content v-model="appendContent" />
    <el-divider style="margin: 26px 0" />
    <p style="font-size:18px padding-bottom: 10px;">发布设置</p>
    <div class="publish">
      <!-- 添加封面 -->
      <div>
        <div>添加封面</div>
        <Upload v-model="imgData" url="http://121.43.225.214:9400/sys/user/reviseHead" />
      </div>
      <!-- 创作声明​ -->
      <div>
        <div>
          <p>创作声明​</p>
          <i class="iconfont icon-kongxinwenhao"></i>
        </div>
        <div>
          <el-select v-model="creation" class="m-2" placeholder="无声明" size="large">
            <el-option label="原创" :value="0" />
            <el-option label="抄袭" :value="1" />
            <el-option label="抄袭" :value="2" />
          </el-select>
        </div>
      </div>
      <!-- 文章话题​ -->
      <div>
        <div>
          <p>文章话题​</p>
          <i class="iconfont icon-kongxinwenhao"></i>
        </div>
        <div>
          <el-select v-model="topics" class="m-2" placeholder="未添加" size="large">
            <el-option label="原创" :value="0" />
            <el-option label="抄袭" :value="1" />
            <el-option label="抄袭" :value="2" />
          </el-select>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="bottom flex-a">
      <div class="flex-j-a">
        <p>回到顶部</p>
      </div>
      <div class="flex-j-a">
        <el-button @click="submit">发布</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Content from './content/index.vue'
  import dynamic from '@/api/dynamic'
  import { Upload } from '@/components/Upload'
  import { appStore } from '@/store'
  // 隐藏卡片
  appStore.setCarIcon(false)
  appStore.setIsHome(false)
  // 标题
  const appendTitle = ref('')
  //内容
  const appendContent = ref('')
  //封面
  const imgData = ref<[]>([])
  // 创作声明
  const creation = ref('')
  // 文章话题
  const topics = ref('')
  // 提交
  const submit = () => {
    console.log(appendContent.value)
    // dynamic.append({
    //   title: appendTitle.value,
    //   content: appendContent.value,
    // })
  }
  onBeforeUnmount(() => {
    appStore.setCarIcon(true)
    appStore.setIsHome(true)
  })
</script>
<style scoped lang="scss">
  .edit {
    position: relative;
    background-color: rgb(255, 255, 255);
    .title {
      width: 100%;
      border: none;
      font-size: 32px;
      font-weight: 600;
      padding: 12px 0;
    }
  }

  .publish {
    > div {
      display: flex;
      padding: 10px 0;
      > div {
        &:first-child {
          display: flex;
          align-items: center;
          width: 100px;
        }
        p {
          padding-right: 6px;
        }
      }
    }
  }
  // foot
  .bottom {
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #fff;
    box-shadow: $--card-box-shadow;
    width: 100%;
    padding: 14px 40px;
    justify-content: space-between;
    z-index: 999;
  }
</style>
