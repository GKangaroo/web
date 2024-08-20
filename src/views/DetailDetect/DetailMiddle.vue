<script setup lang="ts">
import { onMounted, reactive,ref } from 'vue';
import axios from 'axios';
const cities = ['服务器HTTP指纹', '服务器系统指纹', '是否支持DOT', '是否支持DOH', '是否支持IPv6', '是否支持DNSSEC', '是否支持0x20', '源端口随机化情况', '任播（未完成）','DNS软件版本']
const checkboxGroup2 = ref(['Shanghai'])
const methods = {
	onSubmit: async () => {
		const { data } = await axios.post('127.0.0.1:5000/api/start',{
			"choice" : "dot",
			"value" :state.form.Ip
		});
		state.dot = data

		const { data:data2 } = await axios.post('127.0.0.1:5000/api/start',{
			"choice" : "doh",
			"value" :state.form.Ip
		});
		state.doh = data2

        const { data:data4 } = await axios.post('127.0.0.1:5000/api/start',{
			"choice" : "response_validation",
			"value" :state.form.Ip
		});
		state.sec = data4

        const { data:data5 } = await axios.post('127.0.0.1:5000/api/start',{
			"choice" : "0x20",
			"value" :state.form.Ip
		});
		state.x20 = data5

        const { data:data6 } = await axios.post('127.0.0.1:5000/api/start',{
			"choice" : "port_rand",
			"value" :state.form.Ip
		});
		state.ran = data6

        const { data:data7 } = await axios.post('127.0.0.1:5000/api/start',{
			"choice" : "version_bind",
			"value" :state.form.Ip
		});
		state.sec = data7
	}
};

interface UserForm {
	Ip: string;
	Mode: '';
}

const state = reactive({
	form: {
		Ip: '8.8.8.8',
		Mode: '',
	} as UserForm,
    buttonText: '开始测试',
	buttonStyle: { backgroundColor: ''},
	isAttacking: false,
    dot: '',
    doh: '',
    v6: '',
    sec: '',
    x20: '',
    ran: '',
    bindver:''
});
</script>

<template>
    <div class="display-flex j-c-c a-i-c height100">
        <div class="login-form">
            <h1 class="title">IP输入</h1>

            <br />
            
            <el-form :model="state.form">
				<el-form-item prop="email" label="探测的IP地址">
					<el-input v-model="state.form.Ip" placeholder="请输入IP地址"></el-input>
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
    <div class="display-flex j-c-c a-i-c height100">
        <h1 class="title"></h1>
        <el-scrollbar class="output-form">
            <h1 class="title">探测结果</h1>
            <el-form :model="state.form" label-width="140px">
                <el-form-item prop="email" label="是否支持DOT">
                    <el-input v-model="state.dot" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="是否支持DOH">
                    <el-input v-model="state.doh" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="是否支持IPv6">
                    <el-input v-model="state.v6" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="是否支持DNSSEC">
                    <el-input v-model="state.sec" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="是否支持0x20">
                    <el-input v-model="state.x20" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="源端口随机化情况">
                    <el-input v-model="state.ran" ></el-input>
                </el-form-item>
                <el-form-item prop="email" label="DNS软件版本">
                    <el-input v-model="state.bindver" ></el-input>
                </el-form-item>
            </el-form>
	</el-scrollbar>
    </div>
</template>


<style lang="css" scoped>
.login-form {
	width: 400px;
	height: 200px;
	margin: 0 auto;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}

.output-form {
	width: 800px;
	height: 570px;
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