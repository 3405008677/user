<template>
  <div id="editor"></div>
</template>
<script lang="ts" setup>
  import 'quill/dist/quill.snow.css'
  import EmojiBlot from '../formats/emoji'
  import Quill from 'quill'
  const props = defineProps({
    modelValue: {},
  })
  const emit = defineEmits(['update:modelValue'])
  let gete: any
  nextTick(() => {
    const editor = new Quill('#editor', {
      theme: 'snow',
      placeholder: '输入正文',
      modules: {
        toolbar: {
          container: [
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
            'emoji',
          ],
          handlers: {
            emoji() {
              // 获取当前光标位置
              const index = editor.getSelection()?.index
              // 在当前光标处插入emoji（blotName）
              editor.insertEmbed(index!, 'emoji', {
                url: '/src/assets/vue.svg',
                width: '30px',
              })
            },
          },
        },
        history: {
          delay: 2000,
          maxStack: 100,
        },
      },
    })
    gete = () => {
      emit('update:modelValue', editor.root.innerHTML)
    }
  })
  // 扩展 icon
  const icons = Quill.import('ui/icons')
  icons.emoji = '<i class="iconfont icon-mogui"></i>'
  Quill.register('formats/emoji', EmojiBlot)
</script>
<style lang="scss" scoped></style>
