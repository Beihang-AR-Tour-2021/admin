<template>
  <div style="height: 100%">
    <Layout :style="{padding: '0 24px 24px',height: '100%'}">
      <Breadcrumb :style="{margin: '24px 0'}">
        <BreadcrumbItem>后台管理</BreadcrumbItem>
        <BreadcrumbItem>添加景区</BreadcrumbItem>
      </Breadcrumb>
      <Card :style="{padding: '24px', minHeight: '90%', background: '#fff'}">
        <h2>添加景区</h2>
        <br>
        <Form ref="zoneForm" :model="zoneForm" :rules="zoneRule" :label-width="100">
          <FormItem label="景区名称：" prop="name" style="width:30%">
            <Input v-model="zoneForm.name" placeholder=""/>
          </FormItem>
          <FormItem label="景区简介：" prop="info">
            <Input type="textarea" maxlength="800" show-word-limit v-model="zoneForm.info" placeholder="" style="width:60%" :rows="4"/>
          </FormItem>
          <FormItem label="景区地址：" prop="address">
            <Input v-model="zoneForm.address" placeholder=""/>
          </FormItem>
          <FormItem label="开放时间：" prop="time">
            <Input v-model="zoneForm.time" placeholder=""/>
          </FormItem>
          <FormItem label="实景链接：" prop="photo">
            <Input v-model="zoneForm.photo" placeholder=""/>
          </FormItem>
          <FormItem>
            <Button type="warning" @click="handleSubmit('zoneForm')">提交</Button>
            <Button @click="handleReset('zoneForm')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </Card>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'CreateZone',
  data() {
    return {
      zoneForm: {
        name: '',
        info: '',
        address: '',
        time: '',
        photo: ''
      },
      zoneRule: {
        name: [
          { required: true, message: '请输入景区名称', trigger: 'blur' }
        ],
        info: [
          { required: true, message: '请输入景区介绍', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      console.log("hhh")
      this.$refs[name].validate((valid) => {
        if (valid) {
          // TODO: 把zoneForm的内容提供给添加景区接口
          this.$http.post('/zone', this.zoneForm).then(res =>{
            console.log(res);
            if(res.code === 200){
              this.$Message.success("添加成功！");
            }
            else if (res.code === 401){
              this.$Message.error("无操作权限！");
            }
            else if (res.code === 403){
              this.$Message.error("操作被禁止！");
            }
            else if(res.code === 404){
              this.$Message.error("添加景区失败！");
            }
          })
        } else {
          this.$Message.error('请检查输入格式后再提交');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>

<style scoped>

</style>
