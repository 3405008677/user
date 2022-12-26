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
        <Upload v-model="imgData" :autoUpload="false" url="/api/file/upload" />
      </div>
      <!-- 创作声明​ -->
      <div>
        <div>
          <p>创作声明​</p>
          <i class="iconfont icon-kongxinwenhao"></i>
        </div>
        <div>
          <el-select class="m-2" placeholder="无声明" size="large"> </el-select>
        </div>
      </div>
      <!-- 文章话题​ -->
      <div>
        <div>
          <p>文章话题​</p>
          <i class="iconfont icon-kongxinwenhao"></i>
        </div>
        <div>
          <el-select v-model="topic" class="m-2" placeholder="未添加" size="large">
            <el-option
              v-for="(item, index) in topicArr"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </div>
      </div>
      <!-- 权限 -->
      <div>
        <div>
          <p>权限</p>
          <i class="iconfont icon-kongxinwenhao"></i>
        </div>
        <div>
          <el-select v-model="auth" class="m-2" placeholder="未添加" size="large">
            <el-option
              v-for="(item, index) in authArr"
              :key="index"
              :label="item"
              :value="index"
            ></el-option>
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
  const imgData = ref<string[]>()
  // 创作声明
  const creation = ref('')
  // 文章话题
  const topicArr = ref<string[]>()
  // 选中的话题
  const topic = ref<string>()
  // 权限列表
  const authArr = ['所有人可见', '仅粉丝可见', '指定用户可见(开发中)']
  // 选中的权限
  const auth = ref<number>()

  // 提交
  const submit = async () => {
    // dynamic.append({
    //   title: appendTitle.value,
    //   content: appendContent.value,
    //   coverImage: imgData.value![0] as unknown as string,
    //   auth:auth.value
    //   topicName:topic.value
    // })
  }

  // 获取文章话题
  dynamic.topic().then((res) => {
    // topics.value = Object.values(res.bean as string[])
    topicArr.value = Array.from(res.bean)
  })

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
        // :deep('.el-select-dropdown__item') {
        //   padding: 0 32px 0 20px;
        // }
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
