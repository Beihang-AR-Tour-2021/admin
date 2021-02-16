<template>
  <div class="layout">
    <Layout id="admin_con">
      <Header>
        <h1 style="color:white">
          <Icon type="md-map" />
          智慧景区
        </h1>
      </Header>
      <Layout>
        <Sider :style="{background: '#fff'}">
          <Menu active-name="1" theme="light" width="auto">
            <MenuItem name="1" to="/admin/zones">
              <Icon type="ios-map" />
              <span>查看景区列表</span>
            </MenuItem>
            <MenuItem name="2" to="/admin/createZone">
              <Icon type="md-pin" />
              <span>添加景区</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <router-view/>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {}
  }
}
</script>

<style scoped>
#admin_con {
  width: 100%;
  height: 100vh;
}

#admin_con .ivu-layout-header {
  background: #F5AE33;
}

#admin_con .ivu-layout-sider {
  background: #FABF40!important;
}

#admin_con .ivu-menu {
  background: #FABF40 !important;
  color: white;
}

#admin_con .ivu-menu-item:not(.ivu-menu-item-active):hover {
  color: darkseagreen;
}

#admin_con .ivu-menu-item-active {
  background: #F4CF90 !important;
  color: white;
}

#admin_con .ivu-menu-item-active:after {
  background: sienna !important;
}
</style>
