<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const push  = () => {
    console.log(route.query)
    console.log(route.path)
    router.push('push')
}

</script>

<template>
    <p>Hello World</p>
    <button @click="push()">Push</button>
</template>

<style>

</style>