<template>
  <div>
    <Card>
      <Form ref="formInline" :model="loginForm" :rules="loginRule">
        <h2>登录</h2>
        <FormItem prop="user">
          <Input type="text" v-model="loginForm.user" placeholder=""/>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="loginForm.password" placeholder=""/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
        </FormItem>
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

</style>
