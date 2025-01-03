<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <img src="https://via.placeholder.com/100x50" alt="Logo" />
      </div>

      <!-- Navigation -->
      <nav class="nav">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <!-- <select
          v-model="selectedLocale"
          @change="changeLocale"
          class="form-select ms-5 text-center"
          aria-label="Select language"
        >
          <option value="vi">VN</option>
          <option value="en">EN</option>
        </select> -->
      </nav>

      <!-- Mobile Menu Toggle -->
      <div class="mobile-menu" @click="toggleMenu">
        <span v-if="!isMenuOpen">☰</span>
        <span v-if="isMenuOpen">✖</span>
      </div>
    </div>

    <!-- Mobile Navigation (visible when menu is open) -->
    <nav class="mobile-nav" v-show="isMenuOpen">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <!-- <select v-model="selectedLocale" @change="changeLocale" class="mt-5">
        <option value="vi">VN</option>
        <option value="en">EN</option>
      </select> -->
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  // const { locale } = useI18n();

  // State for mobile menu
  const isMenuOpen = ref(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  // const selectedLocale = ref<string>(locale.value);

  // const changeLocale = () => {
  //   locale.value = selectedLocale.value;
  // };
</script>

<style lang="scss" scoped>
  .header {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo img {
    max-height: 50px;
  }

  .nav ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    margin: 0;
  }

  .nav a {
    text-decoration: none;
    font-weight: bold;
    color: hsla(160, 100%, 37%, 1);
  }

  .nav a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }

  .mobile-menu {
    display: none;
    cursor: pointer;
  }

  .mobile-nav {
    display: none;
  }

  @media (max-width: 768px) {
    .nav {
      display: none;
    }

    .mobile-menu {
      display: block;
    }

    .mobile-nav {
      display: block;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      padding: 20px;
    }

    .mobile-nav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .mobile-nav li {
      margin-bottom: 10px;
    }

    .mobile-nav a {
      text-decoration: none;
      color: hsla(160, 100%, 37%, 1);
      font-weight: bold;
    }

    .mobile-nav a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }
</style>
