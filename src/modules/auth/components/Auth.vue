<template>
  <div class="auth">
    <h1>This is an auth component</h1>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import authService from '@/modules/auth/services/auth';
  import { ResponseLogin } from '@modules/auth/models/ResponseLogin';
  import { RequestLogin } from '@modules/auth/models/RequestLogin';

  const auth = ref<ResponseLogin>();

  const requestLogin: RequestLogin = {
    UserName: 'hello',
    Password: ' hello'
  };

  const loadAuth = async () => {
    auth.value = await authService.fetchAuth(requestLogin);
  };

  onMounted(loadAuth);
</script>
