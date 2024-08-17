<script setup lang="ts">
import { onMounted, reactive,ref } from 'vue';

const cities = ['http_fp', 'system_fp', 'dot', 'doh', 'ipv6_support', 'response_validation', '0x20', 'port_rand', '任播（未完成）','version_bind']
const checkboxGroup2 = ref(['Shanghai'])
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
    buttonText: '开始测试',
	buttonStyle: { backgroundColor: ''},
	isAttacking: false
});
</script>

<template>
    <div class="display-flex j-c-c a-i-c height100">
        <div class="login-form">
            <h1 class="title">Input</h1>

            <div class="demo-button-style">
                <el-checkbox-group v-model="checkboxGroup2">
                    <el-checkbox-button v-for="city in cities" :key="city" :value="city" class="but">
                        {{ city }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </div>
            <br />
            
            <el-form :model="state.form">
				<el-form-item prop="email" label="探测的IP地址">
					<el-input v-model="state.form.victim" placeholder="请输入IP地址"></el-input>
				</el-form-item>
            </el-form>

            <el-form-item class="button-container">
                <el-button class="Mybutton" type="primary" @click="methods.onSubmit"
                    :style="{ backgroundColor: state.buttonStyle.backgroundColor }">
                    全选
                </el-button>
                <el-button class="Mybutton" type="primary" @click="methods.onSubmit"
                    :style="{ backgroundColor: state.buttonStyle.backgroundColor }">
                    {{ state.buttonText }}
                </el-button>
            </el-form-item>
        </div>
    </div>
    <div class="display-flex j-c-c a-i-c height100">
        <h1 class="title"></h1>
        <el-scrollbar class="output-form">
            <h1 class="title">攻击效果</h1>
            <el-form :model="state.form" label-width="120px">
                <el-form-item prop="email" label="http_fp">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="system_fp">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="dot">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="doh">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="ipv6_support">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="response_validation">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="0x20">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="port_rand">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="port_rand">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="任播（未完成）">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="version_bind">
                    <el-input v-model="state.form.Ip" ></el-input>
                </el-form-item>
            </el-form>
	</el-scrollbar>
    </div>
</template>


<style lang="css" scoped>
.login-form {
	width: 400px;
	height: 350px;
	margin: 0 auto;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}

.output-form {
	width: 800px;
	height: 670px;
    margin-top: 40px;
	margin: 0 auto;
	padding: 100px;
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

.but {
    margin-top: 5px;
}

.Output {
	position: relative;
	display:flex;
    justify-content:center;
    align-items:height100;
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