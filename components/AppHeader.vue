<template>
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
        </NuxtLink>
        
        <!-- Mobile-compatible Navigation Menu -->
        <NavMenu />
      </div>
    </div>
  </header>
</template>

<script setup>
// Import the NavigationMenu component (or it's auto-imported by Nuxt)
</script>

<style scoped>
.site-header {
  padding: 1.5rem 0;
  position: relative;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 40px;
  width: auto;
}

@media (max-width: 768px) {
  .site-header {
    padding: 1rem 0;
  }
  
  .logo-image {
    height: 32px;
  }
}
</style>