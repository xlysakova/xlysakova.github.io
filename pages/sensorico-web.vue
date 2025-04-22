<script setup>
const mockupItems = ref([
    '/images/iotconnect/dashboard.png',
    '/images/iotconnect/meters.png',
    '/images/iotconnect/analytics.png',
    '/images/iotconnect/alerts.png',
    '/images/iotconnect/settings.png',
]);

const beforeItems = ref([
    '/images/iotconnect/before-1.png',
    '/images/iotconnect/before-2.png',
    '/images/iotconnect/before-3.png',
]);

const afterItems = ref([
    '/images/iotconnect/after-1.png',
    '/images/iotconnect/after-2.png',
    '/images/iotconnect/after-3.png',
]);

// For smooth scrolling to sections
const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <AppHeader />
    
    <!-- Hero Section -->
    <UContainer class="pt-12 pb-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <!-- Left column - Content -->
        <div class="w-full md:w-1/2">
          <UBadge color="blue" variant="subtle" class="mb-4">UX/UI CASE STUDY</UBadge>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-4">Sensorico Web</h1>
          <p class="text-lg text-gray-700 mb-6">Redesign landing page pro firmu specializující se na chytrá IoT řešení v oblasti vodoměrů, elektroměrů a veřejného osvětlení.</p>

          <!-- Project Details as badges -->
          <div class="flex flex-wrap gap-2 mb-6">
            <UBadge color="gray" variant="outline">
              <template #leading>
                <UIcon name="i-heroicons-clock" />
              </template>
              3 týdny
            </UBadge>
            <UBadge color="gray" variant="outline">
              <template #leading>
                <UIcon name="i-heroicons-user" />
              </template>
              UX/UI Designer
            </UBadge>
            <UBadge color="gray" variant="outline">
              <template #leading>
                <UIcon name="i-heroicons-wrench-screwdriver" />
              </template>
              Figma, papír a tužka, AI
            </UBadge>
          </div>

          <!-- Quick navigation to sections -->
          <div class="hidden md:flex gap-2 mt-4">
            <UButton color="blue" variant="ghost" @click="scrollToSection('overview')">
              Přehled
            </UButton>
            <UButton color="blue" variant="ghost" @click="scrollToSection('problem')">
              Problém
            </UButton>
            <UButton color="blue" variant="ghost" @click="scrollToSection('research')">
              Výzkum
            </UButton>
            <UButton color="blue" variant="ghost" @click="scrollToSection('design')">
              Design
            </UButton>
          </div>
        </div>

        <!-- Right column - App Mockup -->
        <div class="w-full md:w-1/2 flex justify-center">
          <UCard class="w-full overflow-hidden border-0">
            <img src="/images/iotconnect/hero.gif" alt="Sensorico Web Mockup" class="w-full h-auto rounded-lg shadow-lg" />
            <div class="text-center pt-3 text-blue-500">
                <NuxtLink class="underline" target="_blank" to="https://www.figma.com/proto/NUS9zSEXDFr3bBhLvuXWze/Sensorico?node-id=867-5000&t=ZmsoMPhnXFvG9ezT-1&scaling=scale-down&content-scaling=fixed&page-id=667%3A2536&starting-point-node-id=764%3A2891">
                  Prototyp
                </NuxtLink>
              </div>
          </UCard>
        </div>
      </div>
    </UContainer>

    <!-- Overview Section -->
    <UContainer id="overview" class="py-12 mx-auto max-w-4xl mb-8 md:mb-12">
      <UCard class="bg-gray-50">
        <template #header>
          <h2 class="text-xl md:text-2xl font-bold text-gray-800">Přehled projektu</h2>
        </template>
        <p class="text-gray-700">
          Sensorico je firma specializující se na chytrá IoT řešení v oblasti vodoměrů, elektroměrů a veřejného osvětlení. Projekt zahrnoval kompletní redesign jejich landing page s cílem lépe komunikovat nabízené služby a zvýšit konverze.
        </p>
      </UCard>

      <div class="grid md:grid-cols-2 gap-6 mt-8">
        <UCard class="bg-blue-50" id="problem">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="text-blue-500" />
              <h2 class="text-lg md:text-xl font-bold text-gray-800">Problém</h2>
            </div>
          </template>
          <p class="text-gray-700">
            Původní verze landing page obsahovala příliš mnoho textu, což působilo přehlceně a nepřehledně. Zároveň nebylo na první pohled zřejmé, o jaký produkt nebo službu se jedná. Chyběla výrazná výzva k akci a stránka postrádala vizuální hierarchii.
          </p>
        </UCard>

        <UCard class="bg-green-50">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-flag" class="text-green-500" />
              <h2 class="text-lg md:text-xl font-bold text-gray-800">Cíl</h2>
            </div>
          </template>
          <p class="text-gray-700">
            Navrhnout moderní a přehlednou stránku, která okamžitě sděluje, čím se firma zabývá. Cílem bylo také zkrátit a zjednodušit texty, přidat výrazný call-to-action prvek a zvýšit šanci, že návštěvník projeví zájem o produkt.
          </p>
        </UCard>
      </div>
    </UContainer>

    <!-- Before-After Carousel -->
    <UContainer class="mx-auto max-w-4xl mb-8 md:mb-12">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">Před</h2>
        
        <UCarousel v-slot="{ item }" arrows :items="beforeItems" class="mb-8">
            <img :src="item" class="rounded-md shadow-md mx-auto w-full" />
        </UCarousel>
    </UContainer>

    <!-- After Carousel -->
    <UContainer class="mx-auto max-w-4xl mb-8 md:mb-12">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">Po</h2>
        
        <UCarousel v-slot="{ item }" arrows :items="afterItems" class="mb-8">
            <img :src="item" class="rounded-md max-h-[600px]  shadow-md mx-auto w-full" />
        </UCarousel>
    </UContainer>

    <!-- Research Section -->
    <UContainer id="research" class="mx-auto max-w-4xl mb-8 md:mb-12">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">Analýza a výzkum</h2>

        <p class="text-gray-700 mb-6">
            Společně s klientem jsme analyzovali, které informace jsou pro stránku klíčové a co naopak není nutné zobrazovat. Zaměřili jsme se na celkovou strukturu a obsahovou hierarchii tak, aby uživatel rychle pochopil, o co jde, a mohl se snadno zorientovat.
        </p>

        <div class="mb-8">
            <h3 class="text-lg font-semibold text-blue-500 mb-3">Klíčové poznatky z výzkumu:</h3>
            
            <div class="space-y-5 mb-8">
                <div class="flex items-start">
                    <span class="text-green-600 text-2xl font-bold mr-3">+</span>
                    <p class="text-gray-700">
                        Uživatelé potřebují okamžitě vidět, jaké služby firma nabízí a jak jim mohou pomoci
                    </p>
                </div>

                <div class="flex items-start">
                    <span class="text-green-600 text-2xl font-bold mr-3">+</span>
                    <p class="text-gray-700">
                        Vizuální zpracování a praktické ukázky jsou důležitější než dlouhé texty
                    </p>
                </div>

                <div class="flex items-start">
                    <span class="text-green-600 text-2xl font-bold mr-3">+</span>
                    <p class="text-gray-700">
                        Zásadní bylo určit, co bude první věc, kterou uživatel uvidí – tedy hlavní sdělení a akční výzva
                    </p>
                </div>
            </div>

            <UCard class="bg-blue-50 mt-8">
                <h3 class="text-lg font-semibold text-blue-500 mb-3">Konkurenční analýza</h3>
                <p class="text-gray-700">
                    Provedli jsme analýzu konkurenčních webů v oblasti IoT řešení. Mnoho z nich sdílelo podobné problémy - zahlcení technickými informacemi, chybějící jasné vysvětlení výhod pro koncové uživatele a nedostatečná vizuální hierarchie.
                </p>
            </UCard>
        </div>
    </UContainer>

    <!-- Design Section -->
    <UContainer id="design" class="mx-auto max-w-4xl">
        <div class="mb-8 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">Design</h2>
            <p class="text-gray-700 mb-6">
              Vizuální styl navazuje na design aplikace – zachovali jsme modré odstíny pro konzistenci značky. Pro zvýraznění call-to-action prvků jsme ale použili kontrastní oranžovou barvu, díky které jsou tlačítka výraznější a více přitahují pozornost potenciálních zákazníků.
            </p>
        </div>
    </UContainer>

    <!-- Conclusion Section -->
    <div class="mx-auto max-w-4xl mt-8 flex justify-center mb-8">
        <div class="bg-blue-50 p-4 sm:p-6 rounded-lg w-full text-center">
            <h3 class="text-md font-semibold mb-3">Co jsem se naučila:</h3>
            <ul class="text-left list-disc list-inside mb-6">
                <li>Úprava textového obsahu pro landing page s cílem zvýšit srozumitelnost a efektivitu CTA</li>
                <li>Řešila jsem responzivní rozvržení pro desktop i mobilní zobrazení</li>
            </ul>
            
            <div class="flex justify-center gap-4">
                <UButton color="blue" icon="i-heroicons-arrow-uturn-left" to="/" variant="ghost">
                  Zpět na projekty
                </UButton>
                <UButton color="blue" icon="i-heroicons-envelope" variant="solid">
                  <a href="mailto:lysakova.denisa98@gmail.com" class="mobile-nav-link">
                    Kontaktujte mě
                  </a>
                </UButton>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Base responsive styles */
.container {
    width: 100%;
}

/* Carousel responsive styles */
:deep(.carousel__pagination) {
    margin-top: 0.75rem;
}

:deep(.carousel__pagination-button) {
    width: 10px;
    height: 10px;
}

/* Mobile-specific styles */
@media (max-width: 640px) {
    :deep(.carousel__pagination) {
        margin-top: 0.5rem;
    }

    :deep(.carousel__pagination-button) {
        width: 8px;
        height: 8px;
    }

    :deep(.carousel__icon) {
        width: 20px;
        height: 20px;
    }
}

/* Ensure images are responsive */
img {
    max-width: 100%;
    height: auto;
}
</style>