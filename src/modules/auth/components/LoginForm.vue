<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card class="pa-6" width="360" elevation="6">
      <v-card-title class="text-center text-h5 font-weight-medium">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field
            v-model="email"
            label="Email"
            variant="outlined"
            prepend-inner-icon="mdi-email"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            variant="outlined"
            prepend-inner-icon="mdi-lock"
            :type="showPassword ? 'text' : 'password'"
            required
          >
            <template v-slot:append-inner>
              <v-icon @click="togglePasswordVisibility" class="cursor-pointer">
                {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
              </v-icon>
            </template>
          </v-text-field>

          <v-btn type="submit" color="primary" block class="mt-4" :loading="loading"> Login </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const email = ref('');
  const password = ref('');
  const showPassword = ref(false);
  const loading = ref(false);

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

  const login = () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      alert(`Logged in as: ${email.value}`);
    }, 1000);
  };
</script>

<style scoped>
  .v-container {
    background: #f5f5f5;
    min-height: 100vh;
  }
  .v-card {
    border-radius: 12px;
  }
</style>
