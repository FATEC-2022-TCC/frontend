<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const push  = () => {
    router.push('push')
}

</script>

<template>
    <p>Hello World</p>
    <button @click="push()">Push</button>
</template>

<style>

</style>