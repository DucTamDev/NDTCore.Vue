<template>
  <header class="header container">
    <div class="header-wrapper">
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
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const isMenuOpen = ref(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<style lang="scss" scoped>
  .header {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header > .header-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header > .header-wrapper > .logo {
    height: 50px;
    align-content: center;
  }

  .nav ul {
    list-style-type: none;
    display: flex;
    margin: 0;
  }

  .nav ul li {
    align-content: center;
  }

  .nav > ul > li > a {
    padding: 0 12px;
    text-decoration: none;
    color: #213547;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
    line-height: 50px;
  }

  .nav li:hover a {
    color: #42b883;
  }
</style>
