<template>
  <div class="layout">
    <Layout id="admin_con">
      <Header>
        <h1 style="color:white">智游</h1>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="2" theme="light" width="auto">
            <MenuItem name="2" to="/admin/createZone">
              添加景区
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
  name: 'Nav'
}
</script>

<style scoped>
#admin_con {
  width: 100%;
  height: 100vh;
}

#admin_con .ivu-layout-header {
  background: #ff9900;
}

#admin_con .ivu-layout-sider {
  background: #FFBB66 !important;
}

#admin_con .ivu-menu {
  background: #FFDDAA !important;
  color: white;
}

#admin_con .ivu-menu-item {
}
</style>
