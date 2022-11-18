<template>
  <div>
    <div id="editor"> </div>
  </div>
</template>
<script lang="ts" setup>
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css';
  import Quill from 'quill'
  onMounted(() => {
    const editor = new Quill('#editor', {
      theme: 'bubble',
    })
  })
</script>
<style lang="scss" scoped></style>
