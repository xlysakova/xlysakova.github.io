<template>
  <div class="navigation-wrapper">
    <!-- Desktop Navigation -->
    <UNavigationMenu class="hidden md:flex">
      <UNavigationMenuList>
        <UNavigationMenuItem>
          <NuxtLink to="/" class="nav-link">
            Domů
          </NuxtLink>
        </UNavigationMenuItem>
        <UNavigationMenuItem>
          <NuxtLink to="#projekty" class="nav-link">
            Projekty
          </NuxtLink>
        </UNavigationMenuItem>
        <UNavigationMenuItem>
          <NuxtLink to="/flowbudget" class="nav-link">
            FLOWBUDGET
          </NuxtLink>
        </UNavigationMenuItem>
        <UNavigationMenuItem>
          <NuxtLink to="/sensorico" class="nav-link">
            SENSORICO
          </NuxtLink>
        </UNavigationMenuItem>
        <UNavigationMenuItem>
          <a href="mailto:lysakova.denisa98@gmail.com" class="nav-link">
            Kontakt
          </a>
        </UNavigationMenuItem>
      </UNavigationMenuList>
    </UNavigationMenu>

    <!-- Mobile Navigation -->
    <div class="md:hidden">
      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" @click="isOpen = !isOpen" aria-label="Toggle menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <UNavigationMenu v-if="isOpen" class="mobile-menu">
          <UNavigationMenuList class="flex flex-col">
            <UNavigationMenuItem>
              <NuxtLink to="/" class="mobile-nav-link" @click="isOpen = false">
                Domů
              </NuxtLink>
            </UNavigationMenuItem>
            <UNavigationMenuItem>
              <NuxtLink to="#projekty" class="mobile-nav-link" @click="isOpen = false">
                Projekty
              </NuxtLink>
            </UNavigationMenuItem>
            <UNavigationMenuItem>
              <NuxtLink to="/flowbudget" class="mobile-nav-link" @click="isOpen = false">
                FLOWBUDGET
              </NuxtLink>
            </UNavigationMenuItem>
            <UNavigationMenuItem>
              <NuxtLink to="/sensorico" class="mobile-nav-link" @click="isOpen = false">
                SENSORICO
              </NuxtLink>
            </UNavigationMenuItem>
            <UNavigationMenuItem>
              <a href="mailto:lysakova.denisa98@gmail.com" class="mobile-nav-link" @click="isOpen = false">
                Kontakt
              </a>
            </UNavigationMenuItem>
          </UNavigationMenuList>
        </UNavigationMenu>
      </Transition>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

// Close mobile menu on route change
const router = useRouter();
if (router) {
  router.afterEach(() => {
    isOpen.value = false;
  });
}

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target;
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (isOpen.value && mobileMenu && !mobileMenu.contains(target) && 
        menuToggle && !menuToggle.contains(target)) {
      isOpen.value = false;
    }
  });
});
</script>

<style scoped>
.navigation-wrapper {
  display: flex;
  justify-content: flex-end;
}

.nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d17089;
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

.mobile-nav-link {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  color: #333;
  font-weight: 500;
  border-bottom: 1px solid #eee;
  transition: color 0.3s ease;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover {
  color: #d17089;
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-toggle:hover {
  color: #d17089;
}

/* Transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>