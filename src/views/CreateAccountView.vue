<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

const router = useRouter();

const axios = inject('axios')

const username = ref("")
const password = ref("")

const login = () => {
    axios.post(
        'http://localhost:8080/user',
        {
            "id": -1,
            "name": "asdasdasd",
            "username": `${username.value}`,
            "password": `${password.value}`,
            "email": "string",
            "roles": [
            ],
            "animals": [
            ]
        }
    )
        .then(res => {
            const { data: { data }} = res
            console.log(JSON.stringify(data))
            router.push('login')
        })
        .catch(error => {
            const {response: { data: { message } }} = error
            alert(message)
        })
}

</script>

<template>
    <div class="father">
        <form>
            <Input type="text" placeholder="Digite seu usuário" v-model="username" />
            <Input type="password" placeholder="Digite sua senha" v-model="password" />
            <Button @click="login" title="Adote Agora"></Button>
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