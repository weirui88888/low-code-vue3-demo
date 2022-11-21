<template>
  <div>配置的标题:{{ parsedAppConfig.eventTitle }}</div>
  <div>这个是主分支</div>
  <div class="membership"></div>
  <div class="back"></div>
</template>

<script setup lang="ts">
import appConfig from '@/appConfig/app.config.json'
import { parseAppConfig } from '@/parseAppConfigJson'
const parsedAppConfig = parseAppConfig(appConfig)
</script>

<style scoped lang="scss">
.membership {
  width: 100%;
  height: 100px;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: v-bind('parsedAppConfig.headerImageUrl');
}

.back {
  width: 50px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: v-bind('parsedAppConfig.backImageUrl');
}
</style>
