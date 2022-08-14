<script setup>
import { useRouter, useRoute } from 'vue-router';
import Input from './components/Input.vue'

const router = useRouter()
const route = useRoute()

const push = () => {
    console.log(route.query)
    console.log(route.path)
    router.push('push')
}

</script>

<template>
    <div class="father">
        <form>
            <Input placeholder="Digite seu usuário" />
            <Input placeholder="Digite sua senha" />
            <button @click="push()">Login</button>
        </form>
    </div>
</template>

<style scoped>
.father {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
form {
    display: flex;
    flex-direction: column;
}
</style>