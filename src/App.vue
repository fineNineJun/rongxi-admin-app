<script setup lang="ts">
const showMessage = () => {
  ElMessage({
    message: "Hello, world!",
    type: "success",
  });
};
</script>

<template>
  <div class="common-layout wh-full">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <el-button type="primary" @click="showMessage"
            >Show Message</el-button
          >
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
