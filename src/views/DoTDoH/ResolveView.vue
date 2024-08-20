<script setup lang="ts">
import { effect, onMounted, reactive } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
let IntervalId:number;
const methods = {
	ticker:1,
	GetEffect: async () => {
		const fetchUpdate = async () => {
			const response = await axios.post('/cuishiboApi3/dig-monitor', state.form);
			state.effect=response.data;
		};
		methods.ticker = setInterval(fetchUpdate, 1500);
	},
	
	attack: async () => {
		if(state.mode == "0"){
			const { data } = await axios.post('/cuishiboApi2/inject-dns',state.form);
			state.attackline = data;
		}else{
			const { data } = await axios.post('/cuishiboApi2/poison-dns',state.form);
			state.attackline = data;
		}

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
	target_ip: string;
	target_domain: string;
	injection_value: string;
	ttl: number;
}

const state = reactive({
	form: {
		target_ip: '192.168.2.2',
		target_domain: 'www.example.com',
		injection_value: '0.0.0.0',
		ttl: 300
	} as UserForm,
	mode: "0",
    buttonText: '开始攻击',
	buttonStyle: { backgroundColor: ''},
	isAttacking: false,
	effect: '',
	attackline : "",
	polling: false
});
</script>

<template>
	<div class="display-flex j-c-c a-i-c height100">
		<div class="login-form">
			<h1 class="title">输入</h1>
			<el-form :model="state.form">

				<el-form :model="state.form" label-width="100px">
					<el-form-item prop="email" label="目标攻击IP">
						<el-input v-model="state.form.target_ip" placeholder="type domain"></el-input>
					</el-form-item>
					<el-form-item prop="email" label="目标域名">
						<el-input v-model="state.form.target_domain" placeholder="type resolver_Ip"></el-input>
					</el-form-item>
					<el-form-item prop="email" label="注入IP">
						<el-input v-model="state.form.injection_value" placeholder="type attack_ip"></el-input>
					</el-form-item>
					<el-form-item prop="email" label="TTL">
						<el-input v-model="state.form.ttl" placeholder="type attack_ttl"></el-input>
					</el-form-item>
				</el-form>

				<el-radio-group v-model="state.mode">
					<el-radio value="0">解析数据注入</el-radio>
					<el-radio value="1">解析数据篡改</el-radio>
				</el-radio-group>

				<el-form-item class="button-container">
					<el-button class="Mybutton" type="primary" @click="methods.GetEffect"
						:style="{ backgroundColor: state.buttonStyle.backgroundColor }">
						{{ state.buttonText }}
					</el-button>
					<el-button class="Mybutton" type="primary" @click="methods.GetEffect">
						更新效果
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>

	<el-scrollbar class="Output">
		<el-form :inline="true" class="demo-form-inline">
			<el-form-item>
				<el-input v-model="state.attackline" placeholder="攻击输出" clearable :rows="15"
					:autosize="{ minRows: 15, maxRows: 15 }" readonly="true" class="OutputBox" type="textarea" />
			</el-form-item>
			<el-form-item>
				<el-input v-model="state.effect" placeholder="效果输出" clearable :rows="15"
					:autosize="{ minRows: 15, maxRows: 15 }" readonly="true" class="OutputBox" type="textarea" />
			</el-form-item>
		</el-form>
	</el-scrollbar>
</template>


<style lang="css" scoped>
.login-form {
	width: 600px;
	height: 400px;
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

.button-container {
  margin-top: 20px; /* 增加按钮与上方的距离 */
  text-align: center; /* 使按钮居中对齐 */
}

</style>