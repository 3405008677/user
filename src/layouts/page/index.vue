<template>
    <Suspense>
      <template #default>
        <router-view v-slot="{ Component, route }">
          <transition>
            <div style="height: 100%">
              <keep-alive>
                <component :is="Component" :key="route.path" v-if="route.meta.keepAlive" />
              </keep-alive>
              <component :is="Component" :key="route.path" v-if="!route.meta.keepAlive" />
            </div>
          </transition>
        </router-view>
      </template>
      <template #fallback>Loading...</template>
    </Suspense>
  </template>
  <script lang="ts" setup></script>
  <style scoped lang="scss"></style>
  