<template>
  <div class="card-icon">
    <div class="card-info-icon">
      <el-avatar class="avatar-img avatar" :size="100" :src="circleUrl" />
      <p style="padding: 8px 0 16px 0; font-size: 24px">{{ userName }}</p>
    </div>
    <div class="card-info-data flex">
      <router-link to="">
        <p>文章</p>
        <p>10</p>
      </router-link>
      <router-link to="">
        <p>文章</p>
        <p>10</p>
      </router-link>
      <router-link to="">
        <p>分类</p>
        <p>10</p>
      </router-link>
    </div>
    <a class="goGithub flex-j-a" href="https://github.com/3405008677" target="view_window">
      <i class="iconfont icon-github-fill"></i>
      <span>Github</span>
    </a>
    <div class="card-info-social">
      <el-tooltip content="QQ" placement="bottom" effect="light">
        <i class="iconfont icon-qq"></i>
      </el-tooltip>
      <el-tooltip content="CSDN" placement="bottom" effect="light">
        <i class="iconfont icon-csdn"></i>
      </el-tooltip>
      <el-tooltip content="Gitee" placement="bottom" effect="light">
        <i class="iconfont icon-gitee"></i>
      </el-tooltip>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { userStore } from '@/store'
  const userName = computed(() => userStore.userInfo.name)
  const circleUrl = ref('https://qny.aqingya.cn/img/p26w3e.png')
</script>
<style scoped lang="scss">
  .avatar {
    &:hover {
      transform: rotate(360deg);
    }
  }
  .card-info-data {
    justify-content: space-around;
    > a {
      &:nth-child(2) {
        padding: 0 10px;
      }
      &:hover {
        color: #49b1f5;
      }
      p {
        &:first-child {
          padding-bottom: 8px;
        }
      }
    }
  }
  .goGithub {
    display: inline-flex;
    margin-top: 18px;
    width: 100%;
    height: 38px;
    background-color: #49b1f5;
    color: #fff;
    > i {
      display: inline-block;
      font-size: 20px;
      padding-right: 8px;
    }
    &:hover {
      background-color: #6dc5ff;
    }
  }
  .card-info-social {
    margin-top: 18px;
    i {
      padding: 0 10px;
    }
  }
</style>
