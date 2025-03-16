<template>
    <header class="header">
      <div class="container">
        <div class="nav-wrapper">
          <NuxtLink to="/" class="logo">
            <!-- Logo would go here if needed -->
          </NuxtLink>
          <nav class="main-nav">
            <NuxtLink to="/" class="nav-link">Projekty</NuxtLink>
            <NuxtLink to="/about" class="nav-link">O mně</NuxtLink>
          </nav>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  // No props or additional logic needed
  </script>
  
  <style scoped>
  .header {
    padding: 2rem 0;
    position: relative;
    z-index: 10;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .nav-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .main-nav {
    display: flex;
    gap: 2rem;
  }
  
  .nav-link {
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* For Safari support */
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.7); /* Slightly reduced opacity */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  backdrop-filter: blur(15px) saturate(180%); /* Increased blur + saturation */
  -webkit-backdrop-filter: blur(15px) saturate(180%);
}
  </style>