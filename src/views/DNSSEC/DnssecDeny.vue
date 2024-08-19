<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import axios from 'axios';

const methods = {
	ticker:1,

	onSubmit: async () => {
		state.isButtonDisabled=true
		const prefunc = async () => {
			const response = await axios.post('/liushimingApi1/log', state.logForm);
			state.result+="攻击前目标服务器的丢包率："+response.data.rate*100+'%\n';
		};
		await prefunc()

        const { data } = await axios.post('/liushimingApi1/attack', {ip:state.ip});
		state.result+="设置目标解析器地址: "+state.ip + '\n----------------------------------------------------------------\n';
		
		const fetchUpdate = async () => {
			const response = await axios.post('/liushimingApi1/log', state.logForm);
			state.result+="当前目标解析器的丢包率："+response.data.rate*100+'%\n';
		};

		methods.ticker = setInterval(fetchUpdate, 1500);
		console.log(methods.ticker)
	},
	stop: async ()=> {
		clearInterval(methods.ticker);
		const nomifunc = async () => {
			const response = await axios.post('/liushimingApi1/log', {ip:state.ip,log:false});
			state.result+="攻击停止\n";
		};
		nomifunc()
		state.isButtonDisabled=false
	}
};

interface UserForm {
	ip: string;
	log:boolean;
}

const state = reactive({
	logForm: {
		ip: '192.168.2.25',
		log: true,
	} as UserForm,
    buttonText: '开始攻击',
	ip: '192.168.2.25',
	result: '',
	isButtonDisabled: false,
	
});
</script>

<template>
	<div class="display-flex j-c-c a-i-c height100">
		<div class="login-form">
			<h1 class="title">IP输入</h1>
			<el-form>
				<el-form-item prop="email" label="攻击的IP地址">
					<el-input v-model="state.ip" placeholder="请输入IPv6地址"></el-input>
				</el-form-item>

				<el-form-item class="button-container">
					<el-button class="Mybutton" type="primary" @click="methods.onSubmit" :disabled="state.isButtonDisabled" >
						{{ state.buttonText }}
					</el-button>
					<el-button class="Mybutton" type="primary" @click="methods.stop" :disabled="!state.isButtonDisabled" >
						攻击停止
					</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="Output-form">
			<h1 class="title">攻击效果</h1>
			<el-form>
				<el-input v-model="state.result" clearable :rows="15" :autosize="{ minRows: 13, maxRows: 13 }"
					readonly="true" class="OutputBox" type="textarea" />
			</el-form>
		</div>
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

.Output-form {
	width: 400px;
	height: 360px;
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
	height: 260px;
	position: relative;
	margin: 10px;
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