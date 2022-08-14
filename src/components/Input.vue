<script setup>
    const props = defineProps(['placeholder'])
    const { placeholder } = props
</script>

<template>
    <input type="text" :placeholder="placeholder"/>
</template>

<style>

</style>