<template>
  <Layout :style="{padding: '0 24px 24px',height: '100%'}">
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>后台管理</BreadcrumbItem>
      <BreadcrumbItem>查看景区列表</BreadcrumbItem>
    </Breadcrumb>
    <Card :style="{padding: '24px', minHeight: '90%', background: '#fff'}">
      <Spin size="large" fix v-show="loading"></Spin>
      <List item-layout="vertical">
        <ListItem v-for="(item, index) in zones" :key="item.name+index">
          <ListItemMeta>
            <template slot="title">
              {{item.name}}
            </template>
            <template slot="description">
              <span>{{item.info}}</span>
            </template>
          </ListItemMeta>
          <template slot="action">
            <li style="color:#808695" @click="details(item)">
              <Icon type="md-clipboard" />查看详情
            </li>
            <li style="color:#1bba9d" @click="edit(item)">
              <Icon type="md-create" />编辑
            </li>
            <li @click="addSpot(index)" style="color:#2d8cf0">
              <Icon type="md-add-circle" />添加景点
            </li>
            <li @click="remove(index)" style="color:#ed4014">
              <Icon type="md-trash" />删除
            </li>
          </template>
          <template slot="extra">
            <img :src="item.photo_url" alt="无实景图片" style="width: 280px;height: 140px">
          </template>
        </ListItem>
      </List>
    </Card>
    <Modal title="景区详情" v-model="isDetailModal" width="720">
      <CellGroup>
        <Cell>
          景区名称：<strong>{{detailModal.name}}</strong>
        </Cell>
        <Cell>
          景区地址：{{detailModal.address}}
        </Cell>
        <Cell>
          开放时间：{{detailModal.time}}
        </Cell>
        <span style="position:relative;left:2.5%;width:95%">景区简介</span>
        <p style="position:relative;left:2.5%;width:95%;word-break:break-all">
          <span style="margin-left:30px"></span>{{detailModal.info}}
        </p>
      </CellGroup>
      <div slot="footer"></div>
    </Modal>
    <Modal title="修改课程" v-model="isEditModal">
      <Form ref="zoneForm" :model="editForm" :rules="zoneRule" :label-width="100">
        <FormItem label="景区名称：" prop="name" style="width:60%">
          <Input v-model="editForm.name" placeholder=""/>
        </FormItem>
        <FormItem label="景区简介：" prop="info">
          <Input type="textarea" maxlength="800" show-word-limit v-model="editForm.info" placeholder="" :rows="4"/>
        </FormItem>
        <FormItem label="景区地址：" prop="address">
          <Input v-model="editForm.address" placeholder=""/>
        </FormItem>
        <FormItem label="开放时间：" prop="time">
          <Input v-model="editForm.time" placeholder=""/>
        </FormItem>
        <FormItem label="实景链接：" prop="photo">
          <Input v-model="editForm.photo" placeholder=""/>
        </FormItem>
        <FormItem>
          <Button type="warning" @click="handleSubmit('zoneForm')">提交</Button>
          <Button @click="handleReset('zoneForm')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
      <div slot="footer"></div>
    </Modal>
  </Layout>
</template>

<script>
export default {
  name: "ZoneList",
  data() {
    return {
      loading: false,
      isDetailModal: false,
      detailModal: {
        zid: 0,
        name: '',
        info: '',
        address: '',
        time: '',
        photo_url: ''
      },
      isEditModal: false,
      editForm: {
        zid: 0,
        name: '',
        info: '',
        address: '',
        time: '',
        photo_url: ''
      },
      zoneRule: {
        name: [
          { required: true, message: '请输入景区名称', trigger: 'blur' }
        ],
        info: [
          { required: true, message: '请输入景区介绍', trigger: 'blur' }
        ]
      },
      zones: []
    }
  },
  methods: {
    // 查看详情
    details(item) {
      this.isDetailModal = true
      this.detailModal.zid = item.zid
      this.detailModal.name = item.name
      this.detailModal.info = item.info
      this.detailModal.address = item.address
      this.detailModal.time = item.time
      this.detailModal.photo_url = item.photo_url
    },
    // 编辑景区信息
    edit(item) {
      this.isEditModal = true
      this.editForm.zid = item.zid
      this.editForm.name = item.name
      this.editForm.info = item.info
      this.editForm.address = item.address
      this.editForm.time = item.time
      this.editForm.photo_url = item.photo_url
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // TODO: 把editForm传给修改景区接口
        } else {
          this.$Message.error('请检查输入格式后再提交');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    // 添加景点信息
    addSpot(index) {
      // 还没想好怎么实现
      console.log(index)
    },
    // 删除景区
    remove(item) {
      // TODO: 根据item里的id删除景区
      console.log(item)
    },
    // 获取全部景区
    getZones() {
      this.loading = true
      this.$http.get('/zone').then(res => {
        if (res.code === 200) {
          this.zones = res.data
        } else {
          this.$Message.error(res.message)
        }
        this.loading = false
      }).catch(err => console.log(err))
    }
  },
  mounted() {
    this.getZones()
  }
}
</script>

<style scoped>

</style>
