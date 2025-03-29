<script setup>
const mockupItems = ref([
    '/images/components.png',
    '/images/alarms.png',
    '/images/home.png',
    '/images/notification.png',
    '/images/invoices.png',
    '/images/pay.png',
]);
</script>

<template>
    <AppHeader />
        <!-- Added max-w classes to limit width on large screens -->
        <div class="container mx-auto pb-[32px]">
             <!-- Hero Section -->
    <UContainer class="pt-12 pb-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <!-- Left column - Content -->
        <div class="w-full md:w-1/2">
          <UBadge color="blue" variant="subtle" class="mb-4">UX/UI CASE STUDY</UBadge>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-4">Sensorico</h1>
          <p class="text-lg text-gray-700 mb-6">Aplikace pro monitorování spotřeby a optimalizaci energií.</p>

          <!-- Project Details as badges -->
          <div class="flex flex-wrap gap-2 mb-6">
            <UBadge color="gray" variant="outline">
              <template #leading>
                <UIcon name="i-heroicons-clock" />
              </template>
              2-3 měsíce
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
            <UButton color="blue" variant="ghost" @click="scrollToSection('research')">
              Výzkum
            </UButton>
            <UButton color="blue" variant="ghost" @click="scrollToSection('wireframes')">
              Wireframes
            </UButton>
            <UButton color="blue" variant="ghost" @click="scrollToSection('design')">
              Design
            </UButton>
          </div>
        </div>

        <!-- Right column - App Mockup -->
        <div class="w-full md:w-1/2 flex justify-center">
          <UCard class="w-full overflow-hidden border-0">
            <img src="/images/sensorico.gif" alt="Sensorico Mockup" class="w-full h-auto rounded-lg shadow-lg" />
            <div class="text-center pt-3 text-blue-500">
                <NuxtLink class="underline" target="_blank" to="https://www.figma.com/proto/NUS9zSEXDFr3bBhLvuXWze/Sensorico?node-id=284-6779&p=f&t=c1aehfOqpztdmfF3-1&scaling=contain&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=420%3A4501">
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
          Sensorico je firma specializující se na kompletní služby v oblasti ovládání IoT zařízení, integrace a exportu dat.  Firma již disponovala rozhraním pro správce vodoměrů, a mým úkolem bylo vytvořit samostatné rozhraní pro jejich odběratele.
        </p>
      </UCard>

      <div class="grid md:grid-cols-2 gap-6 mt-8">
        <UCard class="bg-blue-50">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="text-blue-500" />
              <h2 class="text-lg md:text-xl font-bold text-gray-800">Problém</h2>
            </div>
          </template>
          <p class="text-gray-700">
            Odběratelé vodoměrů často nemají dostatečný přehled o své spotřebě vody, což může vést k nečekaně vysokým výdajům. Problémy také nastávají s dohledatelností historických faktur a nejasnostmi ohledně aktuálních měření.
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
            Vytvořit intuitivní a efektivní uživatelské rozhraní. Díky aplikaci pro správu vodoměrů mohou odběratelé jednoduše monitorovat svou spotřebu, sledovat aktuální i historická data a mít možnost provádět platby přímo v aplikaci.
          </p>
        </UCard>
      </div>
    </UContainer>

                <!-- Competitor Analysis -->
                <UContainer class="mx-auto max-w-4xl mb-8 md:mb-12">
                    <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Analýza konkurence</h2>

                    <p class="text-gray-700 mb-6">
                        Bylo obtížné najít veřejně dostupné portály, proto jsem se zaměřila na dvě platformy pro správu
                        vodoměrů a jednu aplikaci pro správu faktur.
                    </p>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-blue-500 mb-3">BVK a Softbit (vodoměry):</h3>
                        <p class="text-gray-700 mb-6">
                            Jelikož byly dostupné pouze náhledy stránek, nebylo možné je detailněji analyzovat. Přesto
                            jsem
                            identifikovala několik prvků.
                        </p>

                        <div class="space-y-5 mb-8">
                            <div class="flex items-start">
                                <span class="text-green-600 text-2xl font-bold mr-3">+</span>
                                <p class="text-gray-700">
                                    nápovědy s názornými obrázky postupů, volba jazyka, možnost stahování historických
                                    faktur, celkový přehled funkcionalit
                                </p>
                            </div>

                            <div class="flex items-start">
                                <span class="text-blue-500 text-2xl font-bold mr-3">−</span>
                                <p class="text-gray-700">
                                    zastaralý vzhled, neorganizovaná hlavní stránka, nepřehledné menu, přehlcení méně
                                    potřebnými informacemi
                                </p>
                            </div>
                        </div>

                        <h3 class="text-lg font-semibold text-blue-500 mb-3">Idoklady (faktury):</h3>
                        <p class="text-gray-700">
                            Na první pohled bylo patrné, že aplikace působí modernějším dojmem. Hlavní inspirací pro náš
                            návrh byly barevné štítky u faktur, které jsme také implementovali do našeho rozhraní.
                        </p>
                    </div>
                </UContainer>

                <!-- SECTION 2: User Research -->
                <UContainer class="mx-auto max-w-4xl mb-8 md:mb-12">
                    <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Uživatelský výzkum</h2>
                    <p class="text-gray-700 mb-4">
                        Nejprve jsme s klientem diskutovali o klíčových prvcích aplikace na základě jeho zkušeností.
                        Dále
                        jsem v rámci výzkumu vedla rozhovor s jedním uživatelem a zároveň využila AI k simulaci dalšího
                        profilu uživatele ve věku 40let. Tento přístup mi umožnil získat širší pohled na potřeby a
                        chování
                        uživatelů, což pomohlo lépe definovat klíčové funkcionality aplikace a zajistit, aby výzkum
                        nebyl
                        pouze hypotetický.
                    </p>

                    <div class="mb-4">
                        <h3 class="text-lg font-semibold text-blue-500 mb-2">Výsledek uživatelského výzkumu v personě:
                        </h3>
                        <img src="/images/sensorico/persona.png" alt="Rozhovor s Kateřinou" class="w-full rounded-md" />
                    </div>
                </UContainer>
            </div>

            <!-- SECTION 3: Wireframe - This section can be wider for the images -->
            <UContainer class="mx-auto max-w-4xl mb-8 md:mb-12">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Wireframe</h2>
                <p class="text-gray-700 mb-4">
                    Po vytvoření wireframu a jeho testování klientem jsme na základě konzultace provedli několik úprav
                    ve výsledném designu.
                </p>

                <div class="flex flex-col lg:flex-row gap-6">
                    <div class="flex flex-col">
                        <h4 class="text-blue-500 pb-1">Stará hlavní stránka</h4>
                        <img src="/images/dashboard.png" alt="Dashboard" class="w-full h-auto" />
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-col lg:flex-row gap-4">
                            <div class="flex flex-col">
                                <h4 class="text-blue-500 pb-1">Změny:</h4>
                                <p class="text-sm">
                                    1. Tlačítko "odhlásit se" bylo zbytečně výrazné, proto jsme snížli prioritu.
                                    <br><br>
                                    2. Sekundární menu bylo odstraněno, protože působilo matoucím dojmem a některé
                                    položky se
                                    vyskytovaly na více místech. Pro lepší přehlednost a jednodušší navigaci jsme vše
                                    sjednotili
                                    do jednoho hlavního menu.
                                </p>
                            </div>
                            <div class="flex flex-col">
                                <h4 class="text-blue-500 pb-1">Nová hlavní stránka</h4>
                                <img src="/images/dashboard-update.png" alt="Updated Dashboard" class="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>

            <!-- Return to narrower content -->
            <UContainer class="mx-auto max-w-4xl">
                <!-- SECTION 6: Design -->
                <div class="mb-8 md:mb-12">
                    <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Design</h2>
                    <p class="text-gray-700 mb-4">
                      Po schválení wireframu nastal čas vdechnout designu život. Styl písma a primární barvy byly stanoveny klientem, takže jsem se držela zadaných pokynů.
                    </p>
                </div>
            </UContainer>

            <!-- App Mockups - Can be a bit wider for the grid -->
            <UContainer class="mx-auto w-10/12 max-w-4xl mb-8 md:mb-12">
                    <UCarousel v-slot="{ item }" arrows :items="mockupItems">
                        <img :src="item" class="rounded-md shadow-md mx-auto w-[720px]" />
                    </UCarousel>
            </UContainer>

            <!-- Contact Section - Back to narrow -->
            <div class="mx-auto max-w-4xl mt-8 flex justify-center mb-8">
                <div class="bg-purple-50 p-4 sm:p-6 rounded-lg w-full text-center">
                    <h2 class="text-lg md:text-xl font-bold mb-3">Závěr</h2>
                    <p class="mb-3">Před spuštěním aplikace je ještě potřeba doladit finální detaily, jako jsou texty a grafy. Po implementaci jsou v plánu uživatelské testy, na jejichž základě provedeme případné úpravy.</p>
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