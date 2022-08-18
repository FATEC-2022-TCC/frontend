<script setup>
import { useRouter, useRoute } from 'vue-router';
import Input from './components/Input.vue'
import Button from './components/Button.vue'
import Card from './Card.vue'

const router = useRouter()
const route = useRoute()

const push = () => {
    console.log(route.query)
    console.log(route.path)
    router.push('push')
}

const items = [
    "DOni",
    "Luiz",
    "Luiz",
    "Luiz"
]

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