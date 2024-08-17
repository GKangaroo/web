<template>
    <div class="button-container">
        <el-button type="primary" class="custom-button" @click="methods.menuItemClick('Poison')">第一种</el-button>
        <el-button type="success" class="custom-button" @click="methods.menuItemClick('DnssecDeny')">DNSSEC解析器拒绝服务攻击</el-button>
        <el-button type="warning" class="custom-button" @click="methods.menuItemClick('DnssecBypass')">DNSSEC加密机制绕过域名解析数据欺骗攻击</el-button>
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
    margin-top: 80px;
    /* 增加按钮与上方的距离 */
    text-align: center;
    /* 使按钮居中对齐 */
}

.custom-button {
    width: 300px;
  

    /* 增加按钮之间的间距 */
    margin-top: 20px;
}

/* 如果需要更改按钮的大小，可以使用以下方法 */
.custom-button {
    padding: 42px 90px;
    /* 根据需要调整按钮的内边距 */
}
</style>