<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Login from './Login.vue';
import Topbar from './components/Topbar.vue';
import Botbar from './components/Botbar.vue';
</script>

<template>
  <Topbar/>
  <RouterView />
  <Botbar/>
</template>

<style scoped>

</style>
