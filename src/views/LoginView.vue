<template>
  <div class="login-view">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
  import LoginForm from '@modules/auth/components/LoginForm.vue';
</script>

<style scoped lang="scss">
  .login-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
</style>
