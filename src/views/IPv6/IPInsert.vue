<script setup lang="ts">
import { effect, onMounted, reactive } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
let IntervalId:number;
const methods = {
	Attack: async () => {
		state.isAttacking = !state.isAttacking;
		if (!state.isAttacking) {
			state.buttonText = '开始攻击';
			state.buttonStyle.backgroundColor = '#409eff';
			const { data } = await axios.post('/ipv6api/stop');
			state.polling = true;
		} else {
			state.buttonText = '停止攻击';
			state.buttonStyle.backgroundColor = 'red';
			const { data } = await axios.post('/ipv6api/start', state.form);
			state.polling = false;
		}

		const fetchUpdate = async () => {
			const response = await axios.get('/ipv6api/history');
			state.attackline = response.data.join('');
		};

		if (!state.polling) {
			IntervalId = setInterval(fetchUpdate, 1000);
		} else {
			const stopPolling = () => {
				clearInterval(IntervalId);
			};
		}
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
		//呵呵
		state.buttonText = '停止攻击';
		state.buttonStyle.backgroundColor = 'red';
		state.isAttacking = true;
	}
});

interface UserForm {
	victim: string;
	mode: string;
	domain: string;
	ip: string;
	ttl: string;
}

const state = reactive({
	form: {
		victim: '2001:250:200:7:d703:82e0:a74b:3c88',
		domain: 'www.stanford.edu',
		ip: '202.112.51.126',
		ttl: '86400',
		mode: '0',
	} as UserForm,
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
			<h1 class="title">请输入IPv6地址和模式</h1>
			<el-form :model="state.form">

				<div>
					<el-form :model="state.form" label-width="100px">
				<el-form-item prop="email" label="IPv6地址">
					<el-input v-model="state.form.victim" placeholder="请输入IPv6地址"></el-input>
				</el-form-item>
				<el-form-item prop="email" label="域名">
					<el-input v-model="state.form.domain" placeholder="请输入域名"></el-input>
				</el-form-item>
				<el-form-item prop="email" label="IP">
					<el-input v-model="state.form.ip" placeholder="请输入IP"></el-input>
				</el-form-item>
				<el-form-item prop="email" label="TTL">
					<el-input v-model="state.form.ttl" placeholder="请输入TTL"></el-input>
				</el-form-item>


			</el-form>
				</div>
				
				<el-radio-group v-model="state.form.mode">
					<el-radio value="0" v-model="state.form.mode">篡改模式</el-radio>
					<el-radio value="1" v-model="state.form.mode">注入模式</el-radio>
				</el-radio-group>

				<el-form-item class="button-container">
					<el-button class="Mybutton" type="primary" @click="methods.Attack"
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
            <el-form-item >
                <el-input 
                    v-model="state.attackline" 
                    placeholder="攻击输出" 
                    clearable 
					:rows="15"
					:autosize="{ minRows: 15, maxRows: 15 }"
					readonly="true"
					class = "OutputBox"
					type="textarea"
                />
            </el-form-item>
            <el-form-item>
                <el-input 
                    v-model="state.effect" 
                    placeholder="效果输出" 
                    clearable 
					:rows="15"
					:autosize="{ minRows: 15, maxRows: 15 }"
					readonly="true"
					class = "OutputBox"
					type="textarea"
                />
            </el-form-item>
        </el-form>
    </el-scrollbar>
</template>


<style lang="css" scoped>
.login-form {
	width: 400px;
	height: 370px;
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