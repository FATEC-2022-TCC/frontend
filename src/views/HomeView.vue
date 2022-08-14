<script setup>
import { useCounterStore } from '../stores/counter';

const storeCounter = useCounterStore()

</script>

<template>
    {{ storeCounter.counter }}<br/>
    {{ storeCounter.doubleCount }} <br/>
    {{ `${storeCounter.isOdd}` }} <br/>
    <button @click="storeCounter.increment()">Increment</button>
    <button @click="storeCounter.decrement()">Decrement</button>
</template>
