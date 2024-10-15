<template>
  <div v-if="!flag" style="color: red">NAME CHANGEDJ</div>
</template>
<script>
import {computed} from "vue";

export default {
  props: ['user'],
  setup(props) {
    const flag = computed(() => {
      return props.user.name === 'Liam';
    });
    return {
      flag,
    };
  },
};
</script>