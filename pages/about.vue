<script setup>
import Wave from '~/components/icons/Wave.vue';
const dialog = useTemplateRef('dialog');

// Add these functions to handle scroll locking
function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

// Handle modal events
function openModal() {
  if (!dialog.value) return;
  dialog.value.showModal();
  disableScroll();
}

function closeModal() {
  if (!dialog.value) return;
  dialog.value.close();
  enableScroll();
}

// Ensure scroll is re-enabled if component is unmounted while dialog is open
onUnmounted(() => {
  enableScroll();
});
</script>
<template>
  <GradientBackground>
    <AppHeader />

    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="bio">
            <div class="title-container flex items-center pb-10 gap-x-2">
              <Wave class="block" />
              <h2 class="text-primary-500 text-[32px] md:text-[32px] sm:text-[28px]">Zdravím</h2>
            </div>

            <div class="flex items-start gap-12">
              <div class="profile-text flex-2">
                <p class="text-base md:text-lg pb-8 text-pretty">
                  jsem Denisa, junior UX/UI designérka z Brna. Moje cesta k UX/UI designu nebyla úplně přímá – původně
                  jsem
                  pracovala v administrativě, kde jsem si uvědomila, jak důležité je, aby systémy a aplikace byly
                  intuitivní
                  a uživatelsky přívětivé. To mě vedlo k rozhodnutí změnit kariéru a věnovat se oblasti, kde mohu spojit
                  kreativitu s logickým myšlením.
                </p>

                <h3 class="text-primary-500 text-lg">Vzdělání a certifikace:</h3>
                <ul class="education-list">
                  <li>Střední fotograficka škola s maturitou</li>
                  <li>UX/ UI kurz - Czechitas</li>
                  <li>UX/UI kurz - Udemy</li>
                </ul>
              </div>

              <img class="object-contain w-[300px]" :src="useRuntimeConfig().app.baseURL + 'images/profile.png'">

</div>

            <div class="skills-container">
              <div class="skill-section">
                <h4 class="text-primary-500 text-lg">Nástroje</h4>
                <ul class="skill-list">
                  <li>🖌️ Figma, Photoshop, Canva</li>
                  <li>📝 Miro</li>
                </ul>
              </div>

              <div class="skill-section">
                <h4 class="text-primary-500 text-lg">Dovednosti</h4>
                <ul class="skill-list">
                  <li>🎨 UI/UX Design</li>
                  <li>🛠️ Wireframing & Prototyping</li>
                  <li>🧩 Uživatelský výzkum</li>
                </ul>
              </div>
              
              <div class="skill-section">
                <h4 class="text-primary-500 text-lg">Koníčky</h4>
                <ul class="skill-list">
                  <li>🏋️‍♀️ Fitness</li>
                  <li>🎨 Kreslení</li>
                  <li>✈️ Cestování</li>
                  <li>📺 Netflix</li>
                </ul>
              </div>
            </div>
            
            <button class="cv-button" @click="openModal">
              <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_496_1773)">
                  <path
                    d="M38.0625 13H10.9375C10.4236 13 9.93083 13.2107 9.56748 13.5858C9.20413 13.9609 9 14.4696 9 15V35C9 35.5304 9.20413 36.0391 9.56748 36.4142C9.93083 36.7893 10.4236 37 10.9375 37H38.0625C38.5764 37 39.0692 36.7893 39.4325 36.4142C39.7959 36.0391 40 35.5304 40 35V15C40 14.4696 39.7959 13.9609 39.4325 13.5858C39.0692 13.2107 38.5764 13 38.0625 13ZM36.5706 35H12.5456L19.3269 27.76L17.9319 26.37L10.9375 33.84V16.52L22.9791 28.89C23.3421 29.2625 23.8331 29.4716 24.345 29.4716C24.8569 29.4716 25.3479 29.2625 25.7109 28.89L38.0625 16.21V33.71L30.9325 26.35L29.5666 27.76L36.5706 35ZM12.2066 15H36.4931L24.345 27.47L12.2066 15Z"
                    fill="#C25874" />
                </g>
                <defs>
                  <clipPath id="clip0_496_1773">
                    <rect width="49" height="49" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="text-lg underline">
                CV link
              </p>
            </button>

            <dialog ref="dialog" class="cv-dialog">
              <button autofocus @click="closeModal" class="close-button" aria-label="Close dialog">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#C25874" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <img src="/images/cv.png" alt="my cv" class="cv-image" />
            </dialog>

          </div>
        </div>
      </div>
    </section>
  </GradientBackground>
</template>
<style>
::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

.about-section {
  padding: 2rem 0 5rem;
  min-height: calc(100vh - 100px);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-content {
  display: flex;
  justify-content: center;
}

.bio {
  width: 100%;
  max-width: 90%;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.profile-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-text {
  flex: 1;
}

.education-list {
  margin-top: 0.5rem;
  line-height: 1.75;
}

.skills-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.skill-section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.cv-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.cv-dialog {
  background-color: white;
  width: 95%;
  max-width: 1000px;
  border-radius: 0.375rem;
  margin: auto;
  position: relative;
  border: none;
  padding: 0;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  border-radius: 9999px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.cv-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Responsive styles */
@media (min-width: 640px) {
  .bio {
    padding: 2rem;
  }
  
  .skills-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
  
  .bio {
    padding: 2.5rem;
    max-width: 85%;
  }
  
  .profile-container {
    flex-direction: row;
    gap: 2.5rem;
  }
  
  .profile-image {
    max-height: 370px;
    width: auto;
  }
  
  .skills-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .bio {
    max-width: 80%;
  }
  
  .skills-container {
    gap: 5rem;
  }
}
</style>