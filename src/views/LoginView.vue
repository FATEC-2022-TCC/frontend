<script setup>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

import { useRouter } from 'vue-router';
const router = useRouter()

const push = name => {
    router.push(name)
}
</script>

<template>
    <div class="father">
        <form>
            <Input placeholder="Digite seu usuário" />
            <Input placeholder="Digite sua senha" />
            <Button title="Adote Agora" />
            <Button @click="push('createAccount')" title="Quer adotar?" />
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