<template>
  <Layout :style="{padding: '0 24px 24px',height: '100%'}">
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>后台管理</BreadcrumbItem>
      <BreadcrumbItem>查看景区列表</BreadcrumbItem>
    </Breadcrumb>
    <Card :style="{padding: '24px', minHeight: '90%', background: '#fff'}"></Card>
  </Layout>
</template>

<script>
export default {
  name: "ZoneList"
}
</script>

<style scoped>

</style>
