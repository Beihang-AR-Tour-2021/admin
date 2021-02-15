<template>
  <div style="height: 100%">
    <Layout :style="{padding: '0 24px 24px',height: '100%'}">
      <Breadcrumb :style="{margin: '24px 0'}">
        <BreadcrumbItem>后台管理</BreadcrumbItem>
        <BreadcrumbItem>添加景区</BreadcrumbItem>
      </Breadcrumb>
      <Card :style="{padding: '24px', minHeight: '90%', background: '#fff'}">
        Content
      </Card>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'CreateZone'
}
</script>

<style scoped>

</style>
