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
</script>

<template>
  <GradientBackground>
    <AppHeader />
    <!-- Main container with max-width to center content on large screens -->
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
      <!-- SECTION 1: Header and App Overview -->
      <div class="flex flex-col md:flex-row justify-around gap-4 md:gap-x-[40px] mb-12 md:mb-16 md:pt-16">
        <!-- Left column - Content -->
        <div class="w-full md:w-2/3">
          <!-- Header Section -->
          <header class="mb-6 md:mb-8">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 mb-2 md:mb-4">Flowbudget</h1>
            <p class="text-gray-700">Návrh mobilní aplikace pro správu financí.</p>
          </header>

          <!-- Project Details -->
          <section class="mb-6 md:mb-8">
            <div class="flex flex-col gap-y-3 md:gap-y-4">
              <div class="flex flex-wrap gap-x-2">
                <h2 class="text-base md:text-lg font-semibold text-cyan-500 mb-1">Časová osa:</h2>
                <p>3 měsíce (czechitas kurz)</p>
              </div>
              <div class="flex flex-wrap gap-x-2">
                <h2 class="text-base md:text-lg font-semibold text-cyan-500 mb-1">Moje role:</h2>
                <p>UX/UI Designer</p>
              </div>
              <div class="flex flex-wrap gap-x-2">
                <h2 class="text-base md:text-lg font-semibold text-cyan-500 mb-1">Nástroje:</h2>
                <p>Figma, Miro, papír a tužka, AI</p>
              </div>
            </div>
          </section>

          <!-- Problem Section -->
          <section class="mb-6 md:mb-8">
            <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Problém</h2>
            <p class="text-gray-700 pr-0 md:pr-[40px]">
              Z rozhovorů s uživateli jsem zjistila, že v současnosti má mnoho lidí problém
              udržet svůj měsíční rozpočet, nebo často nezvládnou ušetřit žádnou částku
              z výplaty, protože nemají své výdaje pod kontrolou.
            </p>
          </section>

          <!-- Goal Section -->
          <section class="mb-8 md:mb-12">
            <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Cíl</h2>
            <p class="text-gray-700 pr-0 md:pr-[40px]">
              Vytvořit aplikaci, která uživatelům poskytne přehled o jejich výdajích a pomůže jim snížit
              zbytečné náklady. Kromě toho bude uživatelům nabízet možnost vzdělávat se v oblasti financí
              prostřednictvím odborných článků, které budou stručné a věcné, aby uživatelé neztráceli čas
              a měli motivaci je skutečně přečíst.
            </p>
          </section>
        </div>

        <!-- Right column - App Mockup -->
        <div class="flex justify-center items-start w-full md:w-1/3 mb-8 md:mb-0">
          <img src="/images/flowbudget.gif" alt="Flow Budget Mockup"
            class="w-[240px] sm:w-[280px] md:w-full max-w-[300px] h-auto rounded-md shadow-lg" />
        </div>
      </div>

      <!-- Inner container for more narrow content sections -->
      <div class="mx-auto max-w-4xl">
        <!-- SECTION 2: User Research -->
        <div class="mb-12 md:mb-16">
          <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Uživatelské rozhovory</h2>
          <p class="text-gray-700 mb-4 md:mb-6">
            Vedla jsem dva hloubkové rozhovory s lidmi z různých generací, protože jsem chtěla zjistit, co momentálně
            řeší v rámci své životní etapy a co by mohli využít v aplikaci.
          </p>

          <div class="mb-6">
            <h3 class="text-lg font-semibold text-cyan-500 mb-3">Klíčové otázky:</h3>
            <ol class="list-decimal list-inside space-y-2 ml-4">
              <li>Jaké jsou vaše dlouhodobé finanční cíle?</li>
              <li>Jaké funkce by vám v aplikaci nejvíc pomohly? A co by Vás naopak frustrovalo?</li>
              <li>Jaké výzvy nebo problémy v oblasti financí teď v současnosti řešíte?</li>
            </ol>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 class="text-center font-bold mb-3">Jan</h3>
              <img src="/images/user-jan.png" alt="Rozhovor s Janem" class="w-full rounded-md" />
            </div>
            <div class="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 class="text-center font-bold mb-3">Ivana</h3>
              <img src="/images/user-ivana.png" alt="Rozhovor s Ivanou" class="w-full rounded-md" />
            </div>
          </div>
        </div>

        <!-- SECTION 3: Persona -->
        <div class="mb-12 md:mb-16">
          <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Persona</h2>
          <p class="text-gray-700 mb-6">
            Na základě poznatků z předchozích rozhovorů jsem vytvořila personu, která by mi měla pomoci pochopit potřeby
            a frustrace uživatele.
          </p>

          <div class="bg-green-50 p-4 md:p-6 rounded-lg">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-1/3">
                <img src="/images/persona-jakub.png" alt="Persona - Jakub" class="w-full rounded-md" />
              </div>
              <div class="md:w-2/3">
                <h3 class="text-xl font-bold mb-2">Jakub</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p class="flex items-center gap-2 mb-1">
                      <span>🎂</span> 30 let
                    </p>
                    <p class="flex items-center gap-2 mb-1">
                      <span>📍</span> Praha 8
                    </p>
                    <p class="flex items-center gap-2 mb-1">
                      <span>🎥</span> Fotograf (freelancer)
                    </p>
                    <p class="flex items-center gap-2 mb-1">
                      <span>👨</span> Single
                    </p>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-2">Bio</h4>
                    <p class="text-sm">
                      Fotograf na volné noze, což znamená, že nemá pravidelný příjem. Musí si odkládat část svých
                      financí na horší časy. Život freelancera je někdy stresující a finančně nevyzpitatelný.
                    </p>
                    <p class="text-sm mt-2">
                      Jakub chce mít o svých financích lepší přehled, aby mohl plánovat nejen osobní, ale i pracovní
                      výdaje. Měl by zájem začít do budoucna investovat, ale zároveň si není jistý, jaký je nejlepší
                      způsob, jak začít.
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-semibold mb-2">Potřeby</h4>
                    <ul class="list-disc list-inside text-sm">
                      <li>Přehledná aplikace</li>
                      <li>Jednoduché a časově nenáročné používání aplikace</li>
                      <li>Kategorizace výdajů</li>
                      <li>Upozornění na překročení limitu spotřeby</li>
                      <li>Ocení by stručné novinky, návody ze světa financí a investic</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-2">Frustrace</h4>
                    <ul class="list-disc list-inside text-sm">
                      <li>Zahlcení zbytečnými funkcemi</li>
                      <li>Příliš velké množství reklam</li>
                      <li>Nepravidelný příjem z freelancingu</li>
                      <li>Zastaralé aplikace</li>
                      <li>Příliš mnoho placených funkcí v aplikaci</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 4: Competitor Analysis -->
        <div class="mb-12 md:mb-16">
          <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Analýza konkurence</h2>
          <p class="text-gray-700 mb-4 md:mb-6">
            Pro analýzu konkurence jsem si vybrala tři aplikace, z nichž dvě jsou zaměřené na správu financí
            a jedna je určena pro plánování nákupů.
          </p>
        </div>
      </div>

      <!-- Competitor Analysis Images - Carousel (can be wider) -->
      <div class="mx-auto max-w-4xl mb-8 md:mb-12">
        <ClientOnly>
          <UCarousel v-slot="{ item }" arrows :items="carouselItems">
            <img :src="item" class="rounded-md shadow-md mx-4 h-[420px]" />
          </UCarousel>
        </ClientOnly>
      </div>

      <!-- Back to narrower content -->
      <div class="mx-auto max-w-4xl">
        <!-- SECTION 5: Moodboard -->
        <div class="mb-12 md:mb-16">
          <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Moodboard</h2>
          <p class="text-gray-700 mb-4 md:mb-6">
            Po vytvoření skici návrhu následovalo sestavení moodboardu. Zaměřila jsem se na minimalistický styl
            aplikace, který uživatelům
            nabídne jasné a přehledné prostředí bez zbytečného zahlcení informacemi. Primární barvou jsem zvolila <span
              class="text-cyan-500 font-semibold">modrou</span>, jelikož u lidí vzbuzuje důvěryhodnost a profesionalitu,
            což byly klíčové vlastnosti, které jsem chtěla v aplikaci dosáhnout.
          </p>

          <div class="bg-gray-50 p-4 rounded-lg">
            <img src="/images/moodboard.png" alt="Flow Budget Moodboard" class="w-full rounded-md" />
          </div>
        </div>

        <!-- SECTION 6: Design -->
        <div class="mb-12 md:mb-16">
          <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Design</h2>
          <p class="text-gray-700 mb-4 md:mb-6">
            Při tvorbě designu jsem se soustředila na základě zpětné vazby od uživatelů na dvě klíčové oblasti – <span
              class="text-cyan-500 font-semibold">dashboard</span> a <span
              class="text-cyan-500 font-semibold">články</span>. V dashboardu
            najdou uživatelé všechny důležité informace o aplikaci, jako je propojení s platební kartou, aktuální limit
            na daný měsíc, možnost manuálně
            přidat platbu (včetně hotovosti). Sekce článků je rozdělena do různých kategorií, aby si každý uživatel mohl
            snadno najít téma, které ho
            zajímá. Dále je tu i možnost přidávat komentáře k článkům, což uživatelům umožňuje sdílet své názory a
            myšlenky. Články si mohou také uložit
            do oblíbených a vrátit se k nim později.
          </p>
        </div>
      </div>

      <!-- App Mockups - Can be wider -->
      <div class="mx-auto max-w-4xl mb-8 md:mb-12">
        <ClientOnly>
          <UCarousel v-slot="{ item }" arrows :items="mockupItems">
            <img :src="item" class="rounded-md shadow-md mx-4 h-[420px]" />
          </UCarousel>
        </ClientOnly>
      </div>

      <!-- Back to narrower content for test results -->
      <div class="mx-auto max-w-4xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
          <!-- First Test Result -->
          <div>
            <div class="flex items-start mb-4">
              <span class="text-lg font-bold mr-2">1.</span>
              <div>
                <h3 class="text-lg font-semibold mb-2">"Nedávné transakce" o jaký časový horizont se jedná?</h3>
                <p>Kde si můžu časový rámec jako uživatel nastavit?</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <img src="/images/test-result-1a.png" alt="Test výsledek 1a" class="w-full rounded-md shadow-sm" />
              <img src="/images/test-result-1b.png" alt="Test výsledek 1b" class="w-full rounded-md shadow-sm" />
            </div>
          </div>

          <!-- Second Test Result -->
          <div>
            <div class="flex items-start mb-4">
              <span class="text-lg font-bold mr-2">2.</span>
              <div>
                <h3 class="text-lg font-semibold mb-2">Změna struktury sekce „Články".</h3>
                <p>Pro lepší přehlednost byla sekce „Témata" vizuálně oddělená od nejnovějších článků a přidán byl také
                  „filtr" pro snadnější vyhledávání konkrétních témat.</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <img src="/images/test-result-2a.png" alt="Test výsledek 2a" class="w-full rounded-md shadow-sm" />
              <img src="/images/test-result-2b.png" alt="Test výsledek 2b" class="w-full rounded-md shadow-sm" />
            </div>
          </div>
        </div>

        <!-- Conclusion Section -->
        <div class="bg-cyan-50 p-4 sm:p-6 rounded-lg w-full text-center mb-16">
          <h2 class="text-lg md:text-xl font-bold mb-3 text-cyan-500">ZÁVĚR</h2>
          <p class="mb-3">Tento projekt mi umožnil prozkoumat oblast finančních aplikací a navrhnout řešení, které
            spojuje správu financí s finančním vzděláváním.</p>
          <p>Aplikace Flow Budget odpovídá na potřeby uživatelů, kteří chtějí mít své finance pod kontrolou a zároveň se
            vzdělávat v oblasti financí.</p>
        </div>
      </div>
    </div>
  </GradientBackground>
</template>

<style scoped>
@media (max-width: 640px) {

  /* Mobile-specific styles */
  :deep(.carousel__pagination) {
    margin-top: 0.5rem;
  }

  :deep(.carousel__pagination-button) {
    width: 8px;
    height: 8px;
  }
}
</style>