<template>
  <div>{{ num }}</div>
  <div>{{ double }}</div>
  <div>{{ name }}</div>

  <p>
    <input type="text" v-model = "phrase" />
    <div>{{ reversedPhrase }}</div>
  </p>
  <button type="button" @click.prevent="increment" >clicker</button>

  <AppAlert :user="user"></AppAlert>
  <button type="button" ref="btn">Button</button>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted} from "vue";
import {useNumber} from "@/hooks/number";
import { usePhrase } from "@/hooks/phrase";
import AppAlert from "@/components/Alert.vue";

const btn = ref(null);
onBeforeMount(() => {
  console.log('before mount');
});
onMounted(() => {
  console.log('mounted');
  btn.value.addEventListener('click', () => {
    increment();
  });
});

const user = reactive({
  name: 'Liam',
  age: 28,
});

setTimeout(() => {
  user.name = "Jacob";
}, 3000);



const { num, increment, double } = useNumber();
const { phrase, reversedPhrase } = usePhrase();

const { name } = toRefs(user);
</script>
