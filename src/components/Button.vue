<script setup>
    const props = defineProps(['btn_title'])
    const { btn_title } = props
</script>

<template>
    <button class="btn-primary" >{{ btn_title }}</button>
</template>

<style>
.btn-primary {
    border: 0;
    padding: 10px;
    background-color: #7918D9;
    border-radius: 7px;
    font-size: 12px;
    color: white;
    font-weight: bold;
    cursor: pointer;
}
</style>