<template>
  <Layout :style="{padding: '0 24px 24px',height: '100%'}">
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>后台管理</BreadcrumbItem>
      <BreadcrumbItem>查看景区列表</BreadcrumbItem>
    </Breadcrumb>
    <Card :style="{padding: '24px', minHeight: '90%', background: '#fff'}">
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
  </Layout>
</template>

<script>
export default {
  name: "ZoneList",
  data() {
    return {
      detailModal: {
        zid: 0,
        name: '',
        info: '',
        address: '',
        time: '',
        photo_url: ''
      },
      editForm: {
        zid: 0,
        name: '',
        info: '',
        address: '',
        time: '',
        photo_url: ''
      },
      zones: [
        {
          zid: 1,
          name: '北航',
          info: '一所学校',
          address: '学院路校区：北京市海淀区学院路37号',
          time: '对在校生全天',
          photo_url: 'https://static-data.eol.cn/upload/logo/47.jpg'
        }
      ]
    }
  },
  methods: {
    details(item) {
      this.detailModal.zid = item.zid
      this.detailModal.name = item.name
      this.detailModal.info = item.info
      this.detailModal.address = item.address
      this.detailModal.time = item.time
      this.detailModal.photo_url = item.photo_url
    },
    edit(item) {
      this.editForm.zid = item.zid
      this.editForm.name = item.name
      this.editForm.info = item.info
      this.editForm.address = item.address
      this.editForm.time = item.time
      this.editForm.photo_url = item.photo_url
    },
    addSpot(index) {
      console.log(index)
    },
    remove(index) {
      console.log(index)
    },
  }
}
</script>

<style scoped>

</style>
