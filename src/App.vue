
<template>
<router-view :key="$route.fullPath"/>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
const router = useRouter();

// onMounted(() => {
//   router.push({ name: 'MainView' });
// });


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
text-align: center;
  color: #2cb68f;
  margin-top: 0px;
}

</style>