<script setup lang="ts">
import { onMounted, reactive } from 'vue';
const methods = {
	onSubmit: async () => {
		state.isAttacking = !state.isAttacking;
        if (state.isAttacking) {
            state.buttonText = '停止攻击';
            state.buttonStyle.backgroundColor = 'red';
        } else {
            state.buttonText = '继续攻击';
            state.buttonStyle.backgroundColor = 'blue';
		}
		console.log(state.form.Ip)
		console.log(state.form.Mode)

	}
};

interface UserForm {
	Ip: '';
	Mode: '';
}

const state = reactive({
	form: {
		Ip: '',
		Mode: '',
	} as UserForm,
    buttonText: '开始攻击',
	buttonStyle: { backgroundColor: ''},
	isAttacking: false
});
</script>

<template>
	<div class="display-flex j-c-c a-i-c height100">
		<div class="login-form">
			<h1 class="title">Input</h1>
			<el-form :model="state.form" label-width="100px">
				<el-form-item prop="email" label="域名">
					<el-input v-model="state.form.Ip" placeholder="type domain"></el-input>
				</el-form-item>
				<el-form-item prop="email" label="递归解析器Ip">
					<el-input v-model="state.form.Ip" placeholder="type resolver_Ip"></el-input>
				</el-form-item>
				<el-form-item prop="email" label="攻击的Ip">
					<el-input v-model="state.form.Ip" placeholder="type attack_ip"></el-input>
				</el-form-item>
				<el-form-item prop="email" label="TTL">
					<el-input v-model="state.form.Ip" placeholder="type attack_ttl"></el-input>
				</el-form-item>


			</el-form>
			<el-form-item class="button-container">
				<el-button class="Mybutton" type="primary" @click="methods.onSubmit"
					:style="{ backgroundColor: state.buttonStyle.backgroundColor }">
					{{ state.buttonText }}
				</el-button>
			</el-form-item>
		</div>
	</div>
	<el-form :inline="true" class="Output">
		<el-form-item>
			<el-input placeholder="Dig前" clearable :rows="15" :autosize="{ minRows: 10, maxRows: 10 }" readonly="true"
				class="OutputBox" type="textarea" />
		</el-form-item>
		<el-form-item>
			<el-input placeholder="Dig后" clearable :rows="15" :autosize="{ minRows: 10, maxRows: 10 }" readonly="true"
				class="OutputBox" type="textarea" />
		</el-form-item>
	</el-form>

	<el-form :inline="true" class="Output">
			<el-form-item>
				<el-input  placeholder="程序输出" clearable :rows="15"
					:autosize="{ minRows: 10, maxRows: 10 }" readonly="true" class="OutputBox" type="textarea" />
			</el-form-item>
		</el-form>
</template>


<style lang="css" scoped>
.login-form {
	width: 400px;
	height: 320px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 2px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}

.OutputBox {
	width: 400px;
	height: 220px;
	margin: 0 auto;
	padding: 10px;
	margin-top: 30px;
	border-radius: 2px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}

.Output {
	position: relative;
	height: 240px;
	
	margin-top: 10px;
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