<template>
  <div id="login_con">
    <Card>
      <Form ref="formInline" :model="loginForm" :rules="loginRule">
        <h2>管理员登录</h2>
        <br>
        <div style="margin-left:10%;margin-right:10%">
          <FormItem prop="user" label="用户名：">
            <Input type="text" v-model="loginForm.user" placeholder=""/>
          </FormItem>
          <FormItem prop="password" label="密码：">
            <Input type="password" v-model="loginForm.password" placeholder=""/>
          </FormItem>
        </div>
        <div style="height:2vh"></div>
        <div style="alignment: center">
          <FormItem>
            <Button type="warning" @click="handleSubmit('loginForm')" shape="circle" style="margin-left:30%;width:40%">
              登录
            </Button>
          </FormItem>
        </div>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        user: '',
        password: ''
      },
      loginRule: {
        user: [],
        password: []
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log('submit')
        } else {
          this.$Message.error('请输入用户名或密码')
        }
      })
    }
  }
}
</script>

<style scoped>
#login_con {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/forbiddenCity3.jpg);
  background-size: cover;
  background-position: center 100%;
}

#login_con .ivu-card {
  top: 20vh;
  left: 37.5%;
  height: 45vh;
  width: 25%;
  background-color: #f8f8f9;
}
</style>
