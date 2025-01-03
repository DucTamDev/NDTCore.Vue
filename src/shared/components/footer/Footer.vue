<template>
  <footer class="footer">
    <div class="container">
      <!-- Footer Navigation -->
      <nav class="footer-nav">
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-service">Terms of Service</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>

      <!-- Social Media Links -->
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <img src="https://via.placeholder.com/30" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <img src="https://via.placeholder.com/30" alt="Twitter" />
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <img src="https://via.placeholder.com/30" alt="LinkedIn" />
        </a>
      </div>

      <!-- Copyright Info -->
      <div class="copyright">
        <p>&copy; {{ currentYear }} Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // Get the current year dynamically
  const currentYear = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
  }

  .footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
  }

  .footer-nav ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    margin: 0;
  }

  .footer-nav a {
    text-decoration: none;
    color: white;
  }

  .footer-nav a:hover {
    color: #ffcc00;
  }

  .social-links {
    display: flex;
    gap: 15px;
  }

  .social-links a img {
    max-width: 30px;
    height: auto;
  }

  .copyright {
    margin-top: 10px;
    font-size: 14px;
    color: #bbb;
  }

  @media (max-width: 768px) {
    .footer .container {
      flex-direction: column;
      text-align: center;
    }

    .footer-nav ul {
      margin-bottom: 20px;
    }

    .social-links {
      margin-bottom: 20px;
    }
  }
</style>
