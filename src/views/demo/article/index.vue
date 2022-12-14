<template></template>
<script setup lang="ts">
  import { useRoute } from 'vue-router'
  const route = useRoute()
  console.log(route.params);
  console.log(route);
  
</script>
<style lang="scss" scoped></style>
