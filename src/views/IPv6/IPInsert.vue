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
			<el-form :model="state.form">
				<el-form-item prop="email">
					<el-input v-model="state.form.Ip" placeholder="type IPv6"></el-input>
				</el-form-item>
				<el-radio-group v-model="state.form.Mode">
					<el-radio value="0">模式:0</el-radio>
					<el-radio value="1">模式:1</el-radio>
				</el-radio-group>

				<el-form-item class="button-container">
					<el-button class="Mybutton" type="primary" @click="methods.onSubmit"
						:style="{ backgroundColor: state.buttonStyle.backgroundColor }">
						{{ state.buttonText }}
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>

	<el-scrollbar class="Output"> <!-- 设置最大高度以允许滚动 -->
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="Approved by">
                <el-input 
                    v-model="state.form.Ip" 
                    placeholder="Approved by" 
                    clearable 
                    maxlength="20"
                />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-input 
                    v-model="state.form.Ip" 
                    placeholder="Activity zone" 
                    clearable 
                    maxlength="20"
                />
            </el-form-item>
        </el-form>
    </el-scrollbar>
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

.code-box {
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
}

.Output {
	position: relative;
	margin-top: 50px;
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