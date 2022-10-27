<template>
  <div class="membership" @click="click" v-text="text"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const click = () => {
  alert('hello')
}
const text = ref('hello')
</script>

<style scoped lang="scss">
.membership {
  font: {
    size: 20px;
    weight: bolder;
  }

  color: #90ee90;
}
</style>
