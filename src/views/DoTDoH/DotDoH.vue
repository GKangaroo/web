<template>
  <div class="button-container">
    <el-button type="primary" class="custom-button" @click="methods.menuItemClick('DoHInsert')">协议降级及绕过/拒绝服务</el-button>
    <el-button type="success" class="custom-button" @click="methods.menuItemClick('DoHDeny')">解析数据注入与篡改</el-button>
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

<style scoped>
.button-container {
  margin-top: 80px; /* 增加按钮与上方的距离 */
  text-align: center; /* 使按钮居中对齐 */
}

.custom-button {
  size: large; /* 这里是伪代码，el-button 不支持直接在 CSS 中设置 size */
  margin-right: 60px; /* 增加按钮之间的间距 */
}

/* 如果需要更改按钮的大小，可以使用以下方法 */
.custom-button {
  padding: 42px 90px; /* 根据需要调整按钮的内边距 */
}
</style>