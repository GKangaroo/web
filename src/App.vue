
<template>
  <div>
    <div class="topbar">
    <el-menu
      mode="horizontal"
      :popper-offset="0"
      style="background-color: transparent;"
      text-color="#fff"
      >
      <el-menu-item index="1" class = "custom-menu-item" @click="methods.menuItemClick('Mainpage')">主页</el-menu-item>
      <el-menu-item index="2" class = "custom-menu-item">攻击模拟</el-menu-item>
      <el-menu-item index="3" class = "custom-menu-item">脆弱性测量</el-menu-item>
      <el-menu-item index="4" class = "custom-menu-item">载荷调整</el-menu-item>
    </el-menu>
  </div>
  </div>
  
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

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
}

.back {
  background: #e9e0e7
}

.custom-menu-item:hover {
  background-color: transparent !important;
  color: #d679bf !important;
  font-size: large;
}
</style>