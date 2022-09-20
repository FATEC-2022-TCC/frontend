<script setup>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
</script>

<template>
    <div class="father">
        <form>
            <Input placeholder="Digite seu usuário" />
            <Input placeholder="Digite sua senha" />
            <Button @click="push()" btn_title="Adote Agora"></Button>
        </form>
    </div>
</template>

<style scoped>
.father {
    /* background-color: red; */
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}

form {
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
}
</style>