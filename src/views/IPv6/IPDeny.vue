<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import axios from 'axios';
const methods = {
	onSubmit: async () => {
		const fetchUpdate = async () => {
			const response = await axios.get('/iPv6api2/amp');
			state.amp = response.data;
		};

		setInterval(fetchUpdate, 1000);

		state.isAttacking = !state.isAttacking;
        if (state.isAttacking) {
            state.buttonText = '停止攻击';
            state.buttonStyle.backgroundColor = 'red';
			const { data } = await axios.post('/iPv6api2/start?victim=' + state.form.victim + '&mod=' + state.form.mod);
        } else {
            state.buttonText = '继续攻击';
            state.buttonStyle.backgroundColor = 'blue';
			const { data } = await axios.post('/iPv6api2/stop');
		}
	}
};

interface UserForm {
	victim: string;
	mod: string;
}

const state = reactive({
	form: {
		victim: 'fd00::141',
		mod: 'ipv6',
	} as UserForm,
    buttonText: '开始攻击',
	buttonStyle: { backgroundColor: ''},
	isAttacking: false,
	amp:""
});
</script>

<template>
	<div class="display-flex j-c-c a-i-c height100">
		<div class="login-form">
			<h1 class="title">IP输入</h1>
			<el-form :model="state.form">
				<el-form-item prop="email" label="攻击的IPv6地址">
					<el-input v-model="state.form.victim" placeholder="请输入IPv6地址"></el-input>
				</el-form-item>
				
				<el-radio-group v-model="state.form.mod">
					<el-radio value="ipv6">IPv6模式</el-radio>
					<el-radio value="doh">DoH模式</el-radio>
					<el-radio value="dot">DoT模式</el-radio>
				</el-radio-group>

				<el-form-item class="button-container">
					<el-button class="Mybutton" type="primary" @click="methods.onSubmit"
						:style="{ backgroundColor: state.buttonStyle.backgroundColor }">
						{{ state.buttonText }}
					</el-button>
				</el-form-item>
			</el-form>
		</div>

    <div class="Output-form">
			<h1 class="title">攻击效果</h1>
			<el-form :model="state.form">
				<el-form-item prop="email">
					<el-input v-model="state.amp" placeholder="放大倍率"></el-input>
				</el-form-item>
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
	
}

.button-container {
  margin-top: 20px; /* 增加按钮与上方的距离 */
  text-align: center; /* 使按钮居中对齐 */
}
</style>