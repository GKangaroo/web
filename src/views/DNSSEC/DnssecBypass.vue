<script setup lang="ts">
import { onMounted, reactive,ref } from 'vue';
import axios from 'axios';
const methods = {
	test: async () => {
		const {data} = await axios.post('/liushimingApi2/test',{domain:state.victim});
        if(data.code == "200"){
            //
            state.isSuppot = "支持DNSSEC";
        }else{
            state.isSuppot = "不支持DNSSEC";
        }
	},
    attack: async () => {
		const {data} = await axios.post('/liushimingApi2/capture',{"url":state.victim});
        state.externalHtmlBefore = data.data

        state.amp += '*********已发起攻击*********\n'
        await axios.post('/liushimingApi2/attack',{domain:state.victim});
        state.amp += '*********域名已劫持*********\n'

        const {data: data2} = await axios.post('/liushimingApi2/capture',{"url":state.victim});
        state.externalHtmlAfter = data2.data
	}
};

interface UserForm {
	victim: string;
	mod: string;
}

const state = reactive({
	victim: 'http://www.dnssec-bypass-victim.icu',

    buttonText: '开始攻击',
	buttonStyle: { backgroundColor: ''},
    isSuppot: '',
    amp: "",
    externalHtmlBefore: '',
    externalHtmlAfter: '',
    sb: ref(`
    <!DOCTYPE html>
        < html >
        <head>
        <title>Hello, world! </title>
        </head>

    </html>`),
    bigsb: `srcdoc="<p>Hello world!</p>"`
    //<!DOCTYPE html><html><head><title>Hello, world!</title></head> </html>
});
</script>

<template>
    <div class="display-flex j-c-c a-i-c height100">
        <div class="login-form">
            <h1 class="title">域名输入</h1>
            <el-form >
                <el-form-item prop="email" label="域名">
                    <el-input v-model="state.victim" placeholder="请输入域名"></el-input>
                </el-form-item>

                <el-form-item class="button-container">
                    <el-button class="Mybutton" type="primary" @click="methods.test"
                        :style="{ backgroundColor: state.buttonStyle.backgroundColor }">
                        检测DNSSEC
                    </el-button>
                    <el-button class="Mybutton" type="primary" @click="methods.attack"
                        :style="{ backgroundColor: state.buttonStyle.backgroundColor }">
                        发起攻击
                    </el-button>
                </el-form-item>
                <!-- <el-button class="Mybutton" type="primary"
                    :style="{ backgroundColor: state.buttonStyle.backgroundColor }">
                    发起攻击
                </el-button> -->
            </el-form>
        </div>
    </div>
    <div class="Output-form">
        <h1 class="title">输出框</h1>
        <el-form>
            <el-form-item prop="email">
                <el-input v-model="state.isSuppot" placeholder="" disabled></el-input>
            </el-form-item>
        </el-form>
    </div>

    <div class="card-container">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>攻击前</span>
                </div>
            </template>
            <iframe :src=state.sb></iframe>
            <div>{{state.externalHtmlBefore}}</div>
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>攻击后</span>
                </div>
            </template>
            <div v-html="state.externalHtmlAfter"></div>
        </el-card>
    </div>

</template>


<style lang="css" scoped>
.login-form {
	width: 400px;
	height: 220px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 2px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}

.box-card {
  width: 100%;
  height: 400px;
  max-width: 500px;
  margin-top: 20px;

  padding: 20px;
}

.Output-form {
	width: 400px;
	height: 160px;
	margin: 0 auto;
	padding: 30px;
  margin-top: 10px;
	border-radius: 2px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}

.code-box {
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
}

.Output {
	position: relative;
	margin-top: 10px;
}

.Mybutton {
	text-align: center;
	margin: 0 auto;
	width: 130px;
}

.card-container {
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: center; /* 水平居中对齐 */
    gap: 20px; /* 设置卡片之间的间距 */
    margin-top: 20px; /* 为卡片容器增加上边距 */
}

.button-container {
  margin-top: 20px; /* 增加按钮与上方的距离 */
  text-align: center; /* 使按钮居中对齐 */
}
</style>