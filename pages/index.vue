<template>
  <GradientBackground>
    <AppHeader />
    <IntroSection />

    <section class="projects-section" id="projekty">
      <SectionTitle title="Projekty" />
      <div class="container">
        <div class="projects-grid">
          <NuxtLink to="/flowbudget">
            <ProjectCard id="projects" imageUrl="/images/project1.png" title="FLOWBUDGET" description="Aplikace pro správu financí" />
          </NuxtLink>
          <NuxtLink to="/sensorico">
            <ProjectCard imageUrl="/images/project2.png" title="SENSORICO"
              description="Webová aplikace pro monitoring IoT dat" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="additional-works">
      <SectionTitle title="Další práce" />
      <div class="container">
        <div class="additional-works-grid">
          <NuxtLink target="_blank" external to="https://www.figma.com/proto/jqvnYIK66LzD5LYdMFu07Y/Denisa-Hand-bag---Ecom-V1?node-id=128-6&starting-point-node-id=128%3A4&scaling=contain&content-scaling=fixed&t=GVfjiY29TsdNtHFp-1">
            <div>
              <ImageCard imageUrl="/images/handbag.gif" title="Sweet bites" />
            </div>
          </NuxtLink>
          <NuxtLink target="_blank" external to="https://www.figma.com/proto/6HDm9nNh2dHpeAt8CBRVM3/Untitled?node-id=132-249&p=f&t=4xLkXDMm9cX35aSO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=132%3A249&show-proto-sidebar=1">
            <div>
              <ImageCard imageUrl="/images/sweet_bites.gif" title="Sweet bites" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-message">
          <hr class="divider" />
          <p class="message">
            „Děkuji, že jste navštívili mé portfolio. Momentálně <span class="highlight">hledám junior</span> pozici v
            oblasti UX/UI designu. Pokud je to pozice, kterou právě hledáte, neváhejte mě prosím kontaktovat. Těším se
            na možnou spolupráci!"
          </p>
          <a href="mailto:lysakova.denisa98@gmail.com " class="email-link">
            <svg class="email-icon" width="50" height="50" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#d17089" stroke-width="2" />
              <path d="M2 7L12 14L22 7" stroke="#d17089" stroke-width="2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </GradientBackground>
</template>

<script setup>
// Import components handled by auto-imports in Nuxt 3
</script>

<style scoped>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Page-specific styles */
.projects-section,
.additional-works {
  padding: 2rem 0 5rem;
}

.additional-works>.container {
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.additional-works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

/* Contact section styles */
.contact-section {
  padding: 4rem 0 6rem;
}

.contact-message {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider {
  width: 100%;
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #d17089, transparent);
  margin-bottom: 3rem;
}

.message {
  font-size: 1.3rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 2.5rem;
}

.highlight {
  color: #d17089;
  font-weight: 600;
}

.email-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.email-link:hover {
  transform: scale(1.1);
}

.email-icon {
  width: 50px;
  height: 50px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .additional-works-grid {
    grid-template-columns: 1fr;
  }

  .message {
    font-size: 1.1rem;
  }
}
</style>