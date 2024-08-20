<script setup lang="ts">
import { effect, onMounted, reactive } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
let IntervalId:number;
const methods = {
	Attack: async () => {
		const { data } = await axios.post('/cuishiboApi1/run_attack', {"target_ip":state.form.victim});
		state.effect = data
	},
	GetEffect: async () => {
		const { data } = await axios.get('/ipv6api/getresult');
		state.effect = data
	},
	GetStatus: async () => {
		const { data } = await axios.get('/ipv6api/status');
		state.effect = data
	}
};

onMounted(async () => {
	const { data } = await axios.get('/ipv6api/status');
	console.log(data);

	if(data == 2 || data == 0 || data == 3){
		//呵呵
	}else{
		state.buttonText = '停止攻击';
		state.buttonStyle.backgroundColor = 'red';
	}
});

interface UserForm {
	victim: string;
	mode: string;
}

const state = reactive({
	form: {
		victim: '192.168.2.3',
		mode: '0',
	} as UserForm,
    buttonText: '开始攻击',
	buttonStyle: { backgroundColor: ''},
	isAttacking: false,
	effect: '',
	attackline : "",
	polling: false,
	url: "192.168.2.3:8000"
});
</script>

<template>
	<div class="display-flex j-c-c a-i-c height100">
		<div class="login-form">
			<h1 class="title">请输入目标攻击IP地址</h1>
			<el-form :model="state.form">
				<el-form-item prop="email">
					<br /><br />
					<el-input v-model="state.form.victim" placeholder="请输入Ip地址"></el-input>
				</el-form-item>

				<el-form-item class="button-container">
					<el-button class="Mybutton" type="primary" @click="methods.Attack"
						:style="{ backgroundColor: state.buttonStyle.backgroundColor }">
						{{ state.buttonText }}
					</el-button>
					<!-- <el-button class="Mybutton" type="primary" @click="methods.GetEffect">
						更新效果
					</el-button> -->
				</el-form-item>
			</el-form>
		</div>
	</div>

	<el-form>
		<div class="card-container">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>被攻击的页面此时的状况</span>
					</div>
				</template>
				<iframe src=state.url width="350"
				height="300"></iframe>
			</el-card>
		</div>
	</el-form>
</template>


<style lang="css" scoped>
.login-form {
	width: 400px;
	height: 270px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 2px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}

.OutputBox {
	font-family: Cascadia;
	width: 545px;
	height: 320px;
	margin: 0 auto;
	padding: 10px;
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

.box-card {
  width: 100%;
  height: 400px;
  max-width: 420px;
  margin-top: 20px;

  padding: 20px;
}


</style>