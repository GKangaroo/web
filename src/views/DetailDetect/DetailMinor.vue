<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import axios from 'axios';
const methods = {
	onSubmit: async () => {
		const { data } = await axios.post('127.0.0.1:5000/api/start',{
			"choice" : "main_auth",
			"value" :state.form.victim
		});
		state.mai = data

		const { data:data2 } = await axios.post('127.0.0.1:5000/api/start',{
			"choice" : "backup_auth",
			"value" :state.form.victim
		});
		state.bac = data2
	}
};

interface UserForm {
	victim: string;
	mod: string;
}

const state = reactive({
	form: {
		victim: 'baidu.com',
		mod: 'ipv6',
	} as UserForm,
    buttonText: '开始攻击',
	buttonStyle: { backgroundColor: ''},
	isAttacking: false,
	amp:"",
	mai: "",
	bac: ""
});
</script>

<template>
	<div class="display-flex j-c-c a-i-c height100">
		<div class="login-form">
			<h1 class="title">域名输入</h1>
			<el-form :model="state.form">
				<el-form-item prop="email" label="探测的域名">
					<el-input v-model="state.form.victim" placeholder="请输入域名"></el-input>
				</el-form-item>

				<el-form-item class="button-container">
					<el-button class="Mybutton" type="primary" @click="methods.onSubmit"
						:style="{ backgroundColor: state.buttonStyle.backgroundColor }">
						开始探测
					</el-button>
				</el-form-item>
			</el-form>
		</div>

    <div class="Output-form">
			<h1 class="title">探测结果</h1>
			<el-form :model="state.form">
				<el-form-item prop="email" label="主权威服务器">
					<el-input v-model="state.mai" placeholder="" disabled></el-input>
				</el-form-item>
				<el-form-item prop="email" label="辅权威服务器">
					<el-input v-model="state.bac" placeholder="" disabled></el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>


<style lang="css" scoped>
.login-form {
	width: 400px;
	height: 180px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 2px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}

.Output-form {
	width: 400px;
	height: 200px;
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
	
}

.button-container {
  margin-top: 20px; /* 增加按钮与上方的距离 */
  text-align: center; /* 使按钮居中对齐 */
}
</style>