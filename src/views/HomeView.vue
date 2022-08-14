<script setup>
import TheWelcome from '@/components/TheWelcome.vue'

import { useCounterStore } from '../stores/counter';

const storeCounter = useCounterStore()

</script>

<template>
  <main>
    {{ storeCounter.counter }}<br/>
    {{ storeCounter.doubleCount }} <br/>
    {{ `${storeCounter.isOdd}` }} <br/>
    <button @click="storeCounter.increment()">Increment</button>
    <button @click="storeCounter.decrement()">Decrement</button>
  </main>
</template>
