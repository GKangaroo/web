
<template>
    <div>
      <el-menu
        mode="horizontal"
        :popper-offset="0"
        :ellipsis="false"
        class="topbar"
  
        >
        <el-menu-item index="1" class = "custom-menu-item" @click="methods.menuItemClick('MainView')">主页</el-menu-item>
        
        <el-sub-menu index="2">
        <template #title >
          <span class="custom-menu-item">攻击模拟</span>
        </template>
        <el-menu-item index="2-1" class = "custom-menu-item-s">DNSSEC</el-menu-item>
        <el-menu-item index="2-2" class = "custom-menu-item-s">IPv6</el-menu-item>
        <el-menu-item index="2-3" class = "custom-menu-item-s">DOH</el-menu-item>
        <el-menu-item index="2-3" class = "custom-menu-item-s">DOT</el-menu-item>
        </el-sub-menu>
  
        <el-menu-item index="3" class = "custom-menu-item" @click="methods.menuItemClick('Detection')">属性感知</el-menu-item>
        <el-menu-item index="4" class = "custom-menu-item">载荷调整</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
</template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { onMounted } from 'vue';
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
    color: #fff
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