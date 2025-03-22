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
            <div class="flex gap-x-2">
              <Wave />
              <h2 class="text-primary text-[32px] pb-4">Zdravím</h2>
            </div>

            <div class="inline-flex gap-x-20">
              <div>

                <p class="text-lg pb-8">
                  jsem Denisa, junior UX/UI designérka z Brna. Moje cesta k UX/UI designu nebyla úplně přímá – původně
                  jsem
                  pracovala v administrativě, kde jsem si uvědomila, jak důležité je, aby systémy a aplikace byly
                  intuitivní
                  a uživatelsky přívětivé. To mě vedlo k rozhodnutí změnit kariéru a věnovat se oblasti, kde mohu spojit
                  kreativitu s logickým myšlením.
                </p>

                <h3 class="text-primary text-lg">Vzdělání a certifikace:</h3>
                <ul class="leading-7">
                  <li>Střední fotograficka škola s maturitou</li>
                  <li>UX/ UI kurz - Czechitas</li>
                  <li>UX/UI kurz - Udemy</li>
                </ul>
              </div>
              <img src="/images/profile.png" alt="my photo" class="rounded-md h-[370px] object-center" />
            </div>

            <div class="flex gap-x-20 pt-12">
              <div class="flex flex-col gap-y-1">
                <h4 class="text-primary text-lg">Nástroje</h4>
                <ul class="flex flex-col gap-y-1">
                  <li>🖌️ Figma, Photoshop, Canva</li>
                  <li>📝 Miro</li>
                </ul>
              </div>

              <div class="flex flex-col gap-y-1">
                <h4 class="text-primary text-lg">Dovednosti</h4>
                <ul class="flex flex-col gap-y-1">
                  <li>🎨 UI/UX Design</li>
                  <li>🛠️ Wireframing & Prototyping</li>
                  <li>🧩 Uživatelský výzkum</li>
                </ul>
              </div>
              <div class="flex flex-col gap-y-1">
                <h4 class="text-primary text-lg">Koníčky</h4>
                <ul class="flex flex-col gap-y-1">
                  <li>🏋️‍♀️ Fitness</li>
                  <li>🎨 Kreslení</li>
                  <li>✈️ Cestování</li>
                  <li>📺 Netflix</li>
                </ul>
              </div>
            </div>
            <!-- Replace your existing button with this -->
            <button class="flex items-center gap-x-2" @click="openModal">
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

            <!-- Replace your existing dialog with this -->
            <dialog ref="dialog" class="bg-white w-8/12 rounded-md mx-auto my-auto relative">
              <button autofocus @click="closeModal"
                class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close dialog">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#C25874" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <img src="/images/cv.png" alt="my cv" class="object-cover" />
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

.about-content {
  display: flex;
  justify-content: center;
}

.bio {
  max-width: 80%;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  list-style-type: none;
  margin: 1rem 0 2rem;
}

.skills-list li {
  background-color: rgba(209, 112, 137, 0.1);
  color: #d17089;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
</style>