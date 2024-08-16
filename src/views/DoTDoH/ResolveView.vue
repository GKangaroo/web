<script setup lang="ts">
import { effect, onMounted, reactive } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
let IntervalId:number;
const methods = {
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
		victim: '2001:250:200:7:d703:82e0:a74b:3c88',
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
			<h1 class="title">Input</h1>
			<el-form :model="state.form">
				<el-form-item prop="email">
					<br/><br/>
					<el-input v-model="state.form.victim" placeholder="请输入Ipv6地址"></el-input>
				</el-form-item>
				<el-radio-group v-model="state.form.mode">
					<el-radio value="0">解析数据注入</el-radio>
					<el-radio value="1">解析数据篡改</el-radio>
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

.button-container {
  margin-top: 20px; /* 增加按钮与上方的距离 */
  text-align: center; /* 使按钮居中对齐 */
}

</style>