<template>
  <div class="membership">
    {{ appConfig.title }}
  </div>
</template>

<script setup lang="ts">
import appConfig from '@/app.config.json'
</script>

<style scoped lang="scss">
.membership {
  width: 100%;
  height: 200px;
  color: v-bind('appConfig.color');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: v-bind('appConfig.backgroundImage');
}
</style>
