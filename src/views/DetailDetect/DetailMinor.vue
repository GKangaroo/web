<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import axios from 'axios';
const methods = {
	onSubmit: async () => {
		state.isAttacking = !state.isAttacking;
        if (state.isAttacking) {
            state.buttonText = '停止攻击';
            state.buttonStyle.backgroundColor = 'red';
			const { data } = await axios.post('/ipv6api2/stop');
        } else {
            state.buttonText = '继续攻击';
            state.buttonStyle.backgroundColor = 'blue';
			const { data } = await axios.post('/ipv6api2/start', state.form);
		}
		const fetchUpdate = async () => {
			const response = await axios.get('/ipv6api2/amp');
			state.amp = response.data.join('');
		};

		setInterval(fetchUpdate, 1000);

		// const { data } = await axios.post('/api/auth/login/', state.form);
		// if (data.code != 200) {
		// 	ElMessage({
		// 		message: data.data.message,
		// 		type: 'error'
		// 	});
		// } else {
		// 	ElMessage({
		// 		type: 'success',
		// 		message: 'login succeeded',
		// 		onClose: () => {
		// 			setLoginStorage(data);
		// 			updateNotificationItem(NOTIFICATION_USAGE_TIP, true);
		// 			const redirect = router.currentRoute.value.query.redirect;
		// 			if (redirect) {
		// 				router.push(redirect as string);
		// 			} else {
		// 				router.push({
		// 					name: 'Upload'
		// 				});
		// 			}
		// 		}
		// 	});
		// }
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
	amp:""
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
					<el-input v-model="state.form.Ip" placeholder="" disabled></el-input>
				</el-form-item>
				<el-form-item prop="email" label="辅权威服务器">
					<el-input v-model="state.form.Ip" placeholder="" disabled></el-input>
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