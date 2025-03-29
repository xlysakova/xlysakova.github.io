<script setup>
const carouselItems = ref([
  '/images/competitor-analysis.png',
  '/images/competitor-analysis2.png',
  '/images/competitor-analysis3.png',
])

const mockupItems = ref([
  '/images/flowbudget-dashboard.png',
  '/images/flowbudget-transaction.png',
  '/images/flowbudget-categories.png',
  '/images/flowbudget-articles.png',
  '/images/flowbudget-article-detail.png',
  '/images/flowbudget-transactions-history.png',
])

// For smooth scrolling to sections
const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <AppHeader />

    <!-- Hero Section -->
    <UContainer class="pb-16 pt-8 md:pt-12">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        <!-- Left column - Content -->
        <div class="w-full md:w-2/3">
          <UBadge color="blue" variant="subtle" class="mb-4">UX/UI CASE STUDY</UBadge>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 mb-4">Flowbudget</h1>
          <p class="text-lg text-gray-700 mb-6">Návrh mobilní aplikace pro správu financí.</p>

          <!-- Project Details as badges -->
          <div class="flex flex-wrap gap-2 mb-6">
            <UBadge color="gray" variant="outline">
              <template #leading>
                <UIcon name="i-heroicons-clock" />
              </template>
              3 měsíce (czechitas kurz)
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
              Figma, Miro, papír a tužka, AI
            </UBadge>
          </div>

          <!-- Quick navigation to sections -->
          <div class="hidden md:flex gap-2 mt-6">
            <UButton color="cyan" variant="ghost" @click="scrollToSection('problem')">
              Problém
            </UButton>
            <UButton color="cyan" variant="ghost" @click="scrollToSection('research')">
              Výzkum
            </UButton>
            <UButton color="cyan" variant="ghost" @click="scrollToSection('design')">
              Design
            </UButton>
            <UButton color="cyan" variant="ghost" @click="scrollToSection('results')">
              Výsledky
            </UButton>
          </div>
        </div>

        <!-- Right column - App Mockup -->
        <div class="w-full md:w-1/3 flex justify-center">
          <UCard class="overflow-hidden border-0 shadow-xl p-0 bg-transparent">
            <img src="/images/flowbudget.gif" alt="Flow Budget Mockup" 
              class="w-[240px] sm:w-[280px] md:w-full max-w-[300px] h-auto rounded-xl shadow-lg" />
              <div class="text-center pt-3 text-cyan-500">
                <NuxtLink class="underline" target="_blank" external to="https://www.figma.com/proto/oFr7bkUxWyIhB8Qxd5BqIP/Flow-Budget?node-id=328-290&starting-point-node-id=328%3A780&t=5pf8gbfU4exXSmuq-1">
                  Prototyp
                </NuxtLink>
              </div>
          </UCard>
        </div>
      </div>
    </UContainer>

    <!-- Problem & Goal Section -->
    <UContainer id="problem" class="py-12">
      <div class="grid md:grid-cols-2 gap-8">
        <UCard class="bg-red-50">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="text-red-500" />
              <h2 class="text-lg md:text-xl font-bold text-gray-800">Problém</h2>
            </div>
          </template>
          <p class="text-gray-700">
            Z rozhovorů s uživateli jsem zjistila, že v současnosti má mnoho lidí problém
            udržet svůj měsíční rozpočet, nebo často nezvládnou ušetřit žádnou částku
            z výplaty, protože nemají své výdaje pod kontrolou.
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
            Vytvořit aplikaci, která uživatelům poskytne přehled o jejich výdajích a pomůže jim snížit
            zbytečné náklady. Kromě toho bude uživatelům nabízet možnost vzdělávat se v oblasti financí
            prostřednictvím odborných článků, které budou stručné a věcné, aby uživatelé neztráceli čas
            a měli motivaci je skutečně přečíst.
          </p>
        </UCard>
      </div>
    </UContainer>

        <!-- Competitor Analysis -->
        <div class="bg-gray-50 py-12">
      <UContainer>
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Analýza konkurence</h2>
        
        <UCard class="mb-8">
          <p class="text-gray-700">
            Pro analýzu konkurence jsem si vybrala tři aplikace, z nichž dvě jsou zaměřené na správu financí
            a jedna je určena pro plánování nákupů.
          </p>
        </UCard>

        <!-- Competitor Analysis Carousel -->
        <UCard class="mx-8 border-0 shadow-xl p-0">
          <UCarousel v-slot="{ item }" arrows :items="carouselItems" class="bg-gray-100 rounded-lg">
            <div class="p-4">
              <img :src="item" class="rounded-lg shadow-md mx-auto max-h-[600px] object-contain" />
            </div>
          </UCarousel>
          <template #footer>
            <div class="text-center py-4 bg-gray-50">
              <p class="text-gray-700 font-medium">Porovnání konkurenčních aplikací</p>
            </div>
          </template>
        </UCard>
      </UContainer>
    </div>

    <!-- User Research Section -->
    <div class="bg-gray-50 py-12">
      <UContainer id="research">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Uživatelské rozhovory</h2>
        
        <UCard class="mb-8">
          <p class="text-gray-700 mb-6">
            Vedla jsem dva hloubkové rozhovory s lidmi z různých generací, protože jsem chtěla zjistit, co momentálně
            řeší v rámci své životní etapy a co by mohli využít v aplikaci.
          </p>

          <template #footer>
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-cyan-500 mb-3">Klíčové otázky:</h3>
              <ol class="list-decimal space-y-2 ml-4">
                <li>Jaké jsou vaše dlouhodobé finanční cíle?</li>
                <li>Jaké funkce by vám v aplikaci nejvíc pomohly? A co by Vás naopak frustrovalo?</li>
                <li>Jaké výzvy nebo problémy v oblasti financí teď v současnosti řešíte?</li>
              </ol>
            </div>
          </template>
        </UCard>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UCard class="bg-blue-50 border-blue-200">
            <template #header>
              <div class="flex items-center justify-center gap-2">
                <UIcon name="i-heroicons-user-circle" class="text-blue-500 text-xl" />
                <h3 class="text-lg font-bold">Jan</h3>
              </div>
            </template>
            <img src="/images/user-jan.png" alt="Rozhovor s Janem" class="w-full rounded-lg" />
          </UCard>

          <UCard class="bg-red-50 border-red-200">
            <template #header>
              <div class="flex items-center justify-center gap-2">
                <UIcon name="i-heroicons-user-circle" class="text-red-500 text-xl" />
                <h3 class="text-lg font-bold">Ivana</h3>
              </div>
            </template>
            <img src="/images/user-ivana.png" alt="Rozhovor s Ivanou" class="w-full rounded-lg" />
          </UCard>
        </div>
      </UContainer>
    </div>

    <!-- Persona Section -->
    <UContainer class="py-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Persona</h2>
      
      <UCard class="mb-8">
        <p class="text-gray-700 mb-6">
          Na základě poznatků z předchozích rozhovorů jsem vytvořila personu, která by mi měla pomoci pochopit potřeby
          a frustrace uživatele.
        </p>
      </UCard>

      <UCard class="bg-green-50 overflow-hidden">
        <div class="flex flex-col md:flex-row gap-6">
            <img src="/images/persona-jakub.png" alt="Persona - Jakub" class="w-full rounded-lg shadow-sm" />
        </div>
      </UCard>
    </UContainer>

    <!-- Moodboard Section -->
    <UContainer class="py-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Moodboard</h2>
      
      <UCard class="bg-white">
        <p class="text-gray-700 mb-6">
          Po vytvoření skici návrhu následovalo sestavení moodboardu. Zaměřila jsem se na minimalistický styl
          aplikace, který uživatelům nabídne jasné a přehledné prostředí bez zbytečného zahlcení informacemi. 
          Primární barvou jsem zvolila <b color="cyan">modrou</b>, jelikož u lidí vzbuzuje důvěryhodnost a profesionalitu,
          což byly klíčové vlastnosti, které jsem chtěla v aplikaci dosáhnout.
        </p>
        
        <template #footer>
          <img src="/images/moodboard.png" alt="Flow Budget Moodboard" class="w-full rounded-lg shadow-sm" />
        </template>
      </UCard>
    </UContainer>

    <!-- Design Section -->
    <div class="bg-gray-50 py-12">
      <UContainer id="design">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Design</h2>
        
        <UCard class="mb-8">
          <p class="text-gray-700">
            Při tvorbě designu jsem se soustředila na základě zpětné vazby od uživatelů na dvě klíčové oblasti – 
            <b color="cyan">dashboard</b> a <b color="cyan">články</b>. V dashboardu 
            najdou uživatelé všechny důležité informace o aplikaci, jako je propojení s platební kartou, aktuální limit
            na daný měsíc, možnost manuálně přidat platbu (včetně hotovosti). Sekce článků je rozdělena do různých kategorií, aby si každý uživatel mohl
            snadno najít téma, které ho zajímá. Dále je tu i možnost přidávat komentáře k článkům, což uživatelům umožňuje sdílet své názory a
            myšlenky. Články si mohou také uložit do oblíbených a vrátit se k nim později.
          </p>
        </UCard>

        <!-- App Mockups Carousel -->
          <UCarousel v-slot="{ item }" arrows :items="mockupItems" class="bg-gray-100 rounded-lg">
            <div class="p-4">
              <img :src="item" class="rounded-lg shadow-md mx-auto h-[600px] object-contain" />
            </div>
          </UCarousel>
          <template #footer>
            <div class="text-center py-4 bg-gray-50">
              <p class="text-gray-700 font-medium">Ukázky aplikace Flowbudget</p>
            </div>
          </template>
      </UContainer>
    </div>

    <!-- Test Results Section -->
    <UContainer id="results" class="py-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Výsledky testování</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- First Test Result -->
        <UCard class="bg-orange-50">
          <template #header>
            <div class="flex items-center gap-2">
              <UBadge color="orange" size="lg">1</UBadge>
              <h3 class="text-lg font-semibold">Nedávné transakce - časový horizont?</h3>
            </div>
          </template>
          
          <p class="text-gray-700 mb-4">
            Kde si můžu časový rámec jako uživatel nastavit? Bylo potřeba přidat filtr pro časový horizont.
          </p>
          
          <div class="grid grid-cols-2 gap-3">
            <div>
              <p class="text-xs text-center mb-1 text-gray-500">Před</p>
              <img src="/images/test-result-1a.png" alt="Test výsledek 1a" class="w-full rounded-md shadow-sm" />
            </div>
            <div>
              <p class="text-xs text-center mb-1 text-gray-500">Po</p>
              <img src="/images/test-result-1b.png" alt="Test výsledek 1b" class="w-full rounded-md shadow-sm" />
            </div>
          </div>
        </UCard>

        <!-- Second Test Result -->
        <UCard class="bg-blue-50">
          <template #header>
            <div class="flex items-center gap-2">
              <UBadge color="blue" size="lg">2</UBadge>
              <h3 class="text-lg font-semibold">Změna struktury sekce „Články"</h3>
            </div>
          </template>
          
          <p class="text-gray-700 mb-4">
            Pro lepší přehlednost byla sekce „Témata" vizuálně oddělená od nejnovějších článků a přidán byl také
            „filtr" pro snadnější vyhledávání konkrétních témat.
          </p>
          
          <div class="grid grid-cols-2 gap-3">
            <div>
              <p class="text-xs text-center mb-1 text-gray-500">Před</p>
              <img src="/images/test-result-2a.png" alt="Test výsledek 2a" class="w-full rounded-md shadow-sm" />
            </div>
            <div>
              <p class="text-xs text-center mb-1 text-gray-500">Po</p>
              <img src="/images/test-result-2b.png" alt="Test výsledek 2b" class="w-full rounded-md shadow-sm" />
            </div>
          </div>
        </UCard>
      </div>

      <!-- Conclusion Section -->
      <UCard class="bg-cyan-50 border-0">
        <template #header>
          <div class="flex items-center justify-center gap-2">
            <UIcon name="i-heroicons-check-badge" class="text-2xl text-cyan-500" />
            <h2 class="text-xl md:text-2xl font-bold text-center text-cyan-600">ZÁVĚR</h2>
          </div>
        </template>
        
        <div class="text-center">
          <p class="text-gray-700 mb-4">
            Tento projekt mi umožnil prozkoumat oblast finančních aplikací a navrhnout řešení, které
            spojuje správu financí s finančním vzděláváním.
          </p>
          <p class="text-gray-700">
            Aplikace Flow Budget odpovídá na potřeby uživatelů, kteří chtějí mít své finance pod kontrolou a zároveň se
            vzdělávat v oblasti financí.
          </p>
        </div>
        
        <template #footer>
          <div class="flex justify-center gap-4 pt-4">
            <UButton color="cyan" icon="i-heroicons-arrow-uturn-left" to="/" variant="ghost">
              Zpět na projekty
            </UButton>
            <UButton color="cyan" icon="i-heroicons-envelope" variant="solid">
              <a href="mailto:lysakova.denisa98@gmail.com" class="mobile-nav-link" @click="isOpen = false">
                Kontaktujte mě
              </a>
            </UButton>
          </div>
        </template>
      </UCard>
    </UContainer>
</template>

<style scoped>
/* Only minimal custom styling needed */
:deep(.carousel__pagination) {
  margin-top: 1rem;
}

:deep(.carousel__pagination-button) {
  width: 10px;
  height: 10px;
}

:deep(.carousel__slide) {
  padding: 0.5rem;
}

@media (max-width: 640px) {
  :deep(.carousel__pagination) {
    margin-top: 0.5rem;
  }

  :deep(.carousel__pagination-button) {
    width: 8px;
    height: 8px;
  }
}
</style>