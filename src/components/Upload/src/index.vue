<template>
  <el-upload
    :headers="headers"
    v-loading="loading"
    :action="myUrl"
    list-type="picture-card"
    :auto-upload="autoUpload"
    :file-list="fileList"
    :before-upload="beforeUpload"
    :on-success="uploadSuccess"
    :on-remove="handleRemove"
    class="upCss"
  >
    <el-icon><Plus /></el-icon>
    <template #tip>
      <div class="el-upload__tip">图片上传格式支持 JPEG、JPG、PNG</div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
  import type { UploadProps, UploadFiles, UploadFile } from 'element-plus'
  import type { FileType } from '../rule'
  import { getToken } from '@/utils/auth'
  import UploadApi from '@/api/upload'

  import { convertFile } from '@/utils'
  const props = defineProps<{
    // 上传文件的地址 必填
    url: string
    // 是否自动上传文件
    autoUpload: boolean
    // 这里是为了当我们没有点击提交时 父组件通过绑定的数组进行删除上传的文件
    value?: []
    // 这里是为了显示文件
    fileData?: UploadFile[] | string[]
    // 上传文件的格式
    fileType?: []
    modelValue?: string[]
  }>()
  const emit = defineEmits(['update:modelValue'])
  const myUrl = ref<string>('')
  const fileList = ref<UploadFile[] | string[]>([])
  // 当前上传后的文件列表
  const arrayModel = ref<[]>([])
  const loading = ref<boolean>(false)
  const headers = ref({ ContentType: 'application/json;charset=UTF-8' })
  // 处理传过来的url 这里我传图片请求头要带token,如果不需要可删除
  myUrl.value = `${props.url}?token=${getToken()}`
  // 这里是为了如果传过文件 那么显示出来有文件
  fileList.value = props.fileData!
  // 删除文件时触发的钩子
  const handleRemove = async (file: UploadFile) => {
    // 看当前有多少个文件
    if (props.autoUpload) {
      for (let i = 0; i < fileList.value.length; i++) {
        // 要删除的文件 == 已经上传过的文件
        // @ts-ignore
        if (file.uid == fileList.value[i].uid) {
          // 从文件列表中删除
          fileList!.value.splice(i, 1)
          // 发起请求 删除文件
          await UploadApi.fileDelete({ fileName: arrayModel.value![i] })
          // 更新绑定的v-model
          arrayModel.value?.splice(i, 1)
          emit('update:modelValue', arrayModel.value)
        }
      }
    }
  }

  // 下载文件
  const handlePictureCardPreview = (file: any) => {
    loading.value = true
    if (!file.base) {
      ElMessage({
        message: '刚刚上传的文件还需要下载？',
        type: 'warning',
      })
      return
    }
    // 获取文件Base64格式
    //    this.$http({
    //      url: this.$http.adornUrl(`/sys/file/getFile`),
    //      method: "get",
    //      params: this.$http.adornParams({
    //        fileName: file.base
    //      })
    //    }).then(({ data }) => {
    //      // 下载文件
    //      dataURLtoFile(data.bean, file.name);
    //    });
  }

  //上传前的操作，一般来判断文件的格式和大小
  const beforeUpload = (file: FileType) => {
    // 设置默认上传文件格式（不知道的搜 MIME类型 ）
    let myType = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif']
    // 和传进来的文件格式合并一下
    if (props.fileType!) {
      for (let i = 0; i < props.fileType.length; i++) {
        myType.push(props.fileType[i])
      }
    }
    const isIMAGE = myType.includes(file.type)
    const isLt = file.size / 1024 / 1024 < 30
    if (!isIMAGE) {
      ElMessage.error('文件上传格式错误！')
      return false
    }
    if (!isLt) {
      ElMessage.error('文件大于30MB！')
      return false
    }
    console.log('auto-file', 2)
  }

  // 文件上传成功的钩子
  const uploadSuccess: UploadProps['onSuccess'] = (
    response: any,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles,
  ) => {
    if (response.code !== 200) return false
    // 这里 arrayModel存储的是后端返回的编译后的文件名
    arrayModel.value!.push(response.bean as never)
    // 上传成功则往v-model数据上添加
    emit('update:modelValue', arrayModel.value)
    // 更新一下 文件列表
    fileList.value = uploadFiles
    console.log('auto-file', 1)
  }
</script>

<style scoped lang="scss"></style>
