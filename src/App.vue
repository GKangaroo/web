
<template>
<router-view :key="$route.fullPath"/>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
const router = useRouter();

onMounted(() => {
  router.push({ name: 'MainView' });
});

const methods = {
	menuItemClick: (name: string) => {
		router.push({
			name: name
		});
	}
};

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

.topbar {
  background: linear-gradient(to right, #81308f, #492b9f);
  padding: 0px 0;
  color: #fff
}

.back {
  background: #e9e0e7
}

.custom-menu-item{
  background-color: transparent !important;
}

.custom-menu-item-s{
  background-color: transparent !important;
  color: #000 !important;
  font-size: large;
}

</style>