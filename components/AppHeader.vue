<template>
  <header class="header">
    <div class="container">
      <div class="nav-wrapper">
        <NuxtLink to="/" class="logo">
          <!-- Logo would go here if needed -->
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="main-nav">
          <NuxtLink v-if="route.path!=='/'" to="/" class="nav-link" :class="{ 'router-link-active': route.path === '/' }">
            Domů
          </NuxtLink>
          

          
          <NuxtLink to="/about" class="nav-link" :class="{ 'router-link-active': route.path === '/about' }">
            O mně
          </NuxtLink>

          <NuxtLink v-if="route.path==='/'" to="#projects" class="nav-link" :class="{ 'router-link-active': false }">
            Projekty
          </NuxtLink>
        </nav>
        
        <!-- Mobile Hamburger Button -->
        <button class="hamburger-button" @click="toggleMobileMenu" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <transition name="mobile-nav-transition">
      <div v-if="isMobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu">
        <div class="mobile-menu" @click.stop>
          <div class="mobile-menu-header">
            <h3>Menu</h3>
            <button class="close-button" @click="closeMobileMenu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="mobile-nav">
            <NuxtLink to="/" class="mobile-nav-link" @click="closeMobileMenu">
              Projekty
            </NuxtLink>
            <NuxtLink to="/about" class="mobile-nav-link" @click="closeMobileMenu">
              O mně
            </NuxtLink>
            <NuxtLink to="/flowbudget" class="mobile-nav-link" @click="closeMobileMenu">
              Flowbudget
            </NuxtLink>
            <NuxtLink to="/sensorico" class="mobile-nav-link" @click="closeMobileMenu">
              Sensorico
            </NuxtLink>
            <NuxtLink to="/sensorico-web" class="mobile-nav-link" @click="closeMobileMenu">
              Sensorico Web
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
const route = useRoute();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu on route change
watch(route, () => {
  isMobileMenuOpen.value = false;
});

// Close mobile menu when escape key is pressed
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  };
  
  window.addEventListener('keydown', handleEscape);
  
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleEscape);
  });
});

// Prevent scrolling when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
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
  justify-content: space-between;
  align-items: center;
}

.main-nav {
  display: none;
  gap: 2rem;
}

.hamburger-button {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #333;
  transition: color 0.3s ease;
}

.hamburger-button:hover {
  color: #555;
}

/* Media query for desktop */
@media (min-width: 768px) {
  .main-nav {
    display: flex;
  }
  
  .hamburger-button {
    display: none;
  }
  
  .nav-wrapper {
    justify-content: flex-end;
  }
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

/* Mobile menu styles */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu {
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.mobile-menu-header h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #333;
}

.close-button:hover {
  color: #555;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

.mobile-nav-link {
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  border-bottom: 1px solid #eee;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Transition animations */
.mobile-nav-transition-enter-active,
.mobile-nav-transition-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-nav-transition-enter-from,
.mobile-nav-transition-leave-to {
  opacity: 0;
}

.mobile-nav-transition-enter-active .mobile-menu {
  transition: transform 0.3s ease;
}

.mobile-nav-transition-leave-active .mobile-menu {
  transition: transform 0.3s ease;
}

.mobile-nav-transition-enter-from .mobile-menu {
  transform: translateX(100%);
}

.mobile-nav-transition-leave-to .mobile-menu {
  transform: translateX(100%);
}
</style>