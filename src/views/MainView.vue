
<template>
  <div>
    <el-menu mode="horizontal" :popper-offset="0" :ellipsis="false" class="topbar">
      <el-menu-item index="1" class="custom-menu-item" @click="methods.menuItemClick('MainView')">
        <template #title>
          <span class="custom-menu-item">主页</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <span class="custom-menu-item">攻击模拟</span>
        </template>
        <el-menu-item index="2-1" class="custom-menu-item-s"
          @click="methods.menuItemClick('DNSSEC')">DNSSEC</el-menu-item>
        <el-menu-item index="2-2" class="custom-menu-item-s" @click="methods.menuItemClick('IPv6')">IPv6</el-menu-item>
        <el-menu-item index="2-3" class="custom-menu-item-s"
          @click="methods.menuItemClick('DoHT')">DOH/DOT</el-menu-item>
        <!-- <el-menu-item index="2-3" class = "custom-menu-item-s">DOT</el-menu-item> -->
      </el-sub-menu>

      <el-menu-item index="3" class="custom-menu-item" @click="methods.menuItemClick('Detection')">
        <template #title>
          <span class="custom-menu-item">属性感知</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4" class="custom-menu-item">
        <template #title>
          <span class="custom-menu-item">载荷调整</span>
        </template>
      </el-menu-item>
    </el-menu>
<!-- 
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index">
        <span @click="item.click">{{ item.label }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb> -->

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
    
  }
  
  
  .custom-menu-item{
    background-color: transparent !important;
    color: #67c23a;
    font-size: large;
  }
  
  .custom-menu-item-s{
    background-color: transparent !important;
    color: #67c23a !important;
    font-size: large;
  }
  
  </style>