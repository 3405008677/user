<template>
  <div>
    <div id="editor"> </div>
  </div>
</template>
<script lang="ts" setup>
  import 'quill/dist/quill.snow.css'
  import Quill from 'quill'
  onMounted(() => {
    const editor = new Quill('#editor', {
      theme: 'snow',
      placeholder: '输入正文',
      modules: {
        container: '#toolbar',
        toolbar: [
          'bold',
          'italic',
          'underline',
          'strike', 
          'blockquote',
          'code-block',
          { header: 1 },
          { header: 2 }, 
          { list: 'ordered' },
          { list: 'bullet' },
          { script: 'sub' },
          { script: 'super' }, 
          { indent: '-1' },
          { indent: '+1' },
          { direction: 'rtl' }, 
          { size: ['small', false, 'large', 'huge'] },
          { color: [] },
          { background: [] }, 
          { align: [] },
          'image',
        ],
        // toolbar: [
        //   'bold',
        //   'italic',
        //   'underline',
        //   { header: 1 },
        //   { header: 2 },
        //   'blockquote',
        //   'code-block',
        //   'code',
        //   'link',
        //   { list: 'ordered' },
        //   { list: 'bullet' },
        //   'image',
        // ],
        syntax: true,
        history: {
          delay: 3000,
          maxStack: 100,
        },
      },
    })
  })
</script>
<style lang="scss" scoped></style>
