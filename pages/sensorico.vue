<script setup>
const mockupItems = [
    '/images/components.png',
    '/images/alarms.png',
    '/images/home.png',
    '/images/notification.png',
    '/images/invoices.png',
    '/images/pay.png',
]
</script>

<template>
    <GradientBackground>
        <AppHeader />
        <!-- Added max-w classes to limit width on large screens -->
        <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <!-- SECTION 1: Header and App Overview -->
            <div class="flex flex-col md:flex-row justify-around items-center gap-4 mb-8 md:mb-16">
                <!-- Left column - Content -->
                <div class="w-full md:w-1/2 md:pt-16">
                    <!-- Header Section -->
                    <header class="mb-4 md:mb-6">
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-2">Sensorico</h1>
                        <p class="text-gray-700">Aplikace pro monitorování spotřeby a optimalizaci energií.</p>
                    </header>

                    <!-- Project Details -->
                    <section class="mb-4 md:mb-6">
                        <div class="flex flex-col gap-y-2 md:gap-y-3">
                            <div class="flex flex-wrap gap-x-2">
                                <h2 class="text-base md:text-lg font-semibold text-blue-500">Časová osa:</h2>
                                <p>2-3 měsíce</p>
                            </div>
                            <div class="flex flex-wrap gap-x-2">
                                <h2 class="text-base md:text-lg font-semibold text-blue-500">Moje role</h2>
                                <p>UX/UI Designer</p>
                            </div>
                            <div class="flex flex-wrap gap-x-2">
                                <h2 class="text-base md:text-lg font-semibold text-blue-500">Nástroje:</h2>
                                <p>Figma, papír a tužka, AI</p>
                            </div>
                        </div>
                    </section>

                    <!-- Problem Section -->
                    <section class="mb-4 md:mb-6">
                        <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Přehled</h2>
                        <p class="text-gray-700">
                            Sensorico je firma specializující se na kompletní služby v oblasti ovládání IoT zařízení,
                            integrace a exportu dat. Firma již disponovala rozhraním pro správce vodoměrů, a mým úkolem
                            bylo vytvořit samostatné rozhraní pro jejich odběratele.
                        </p>
                    </section>
                </div>

                <!-- Right column - App Mockup -->
                <div class="w-full md:w-10/12 flex justify-center pt-10 md:pt-20 pl-4 md:pl-20">
                    <img src="/images/sensorico.gif" alt="Sensorico Mockup" class="max-w-full h-auto" />
                </div>
            </div>

            <!-- For the content sections, adding a max-width class to create narrower content on large screens -->
            <div class="mx-auto max-w-4xl">
                <!-- Problem Section -->
                <section class="mb-6 md:mb-8">
                    <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Problém</h2>
                    <p class="text-gray-700">
                        Odběratelé vodoměrů mají často těžký přehled o své spotřebě vody, což může vést k
                        neočekávaným výdajům či únikům. Tento
                        nedostatek přehlednosti a včasného přístupu k informacím o spotřebě a fakturách zvyšuje
                        celkovou zátěž, což jsme se snažili řešit
                        prostřednictvím aplikace.
                    </p>
                </section>

                <!-- Goal Section -->
                <section class="mb-8 md:mb-12">
                    <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Cíl</h2>
                    <p class="text-gray-700">
                        Vytvořit moderní a intuitivní softwarové rozhraní, které by umožnilo uživatelům sledovat
                        spotřeby vodoměrů, umožňit jim efektivně faktury na
                        jednom místě a poskytovat odběratelům možnost plánit platby v aplikaci.
                    </p>
                </section>

                <!-- Competitor Analysis -->
                <div class="mb-12 md:mb-16">
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
                </div>

                <!-- SECTION 2: User Research -->
                <div class="mb-8 md:mb-12">
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
                </div>
            </div>

            <!-- SECTION 3: Wireframe - This section can be wider for the images -->
            <div class="mx-auto max-w-4xl mb-8 md:mb-12">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Wireframe</h2>
                <p class="text-gray-700 mb-4">
                    Po vytvoření wireframu a jeho testování klientem jsme na základě konzultace provedli několik úprav
                    ve výsledném designu.
                </p>

                <div class="flex flex-col lg:flex-row gap-6">
                    <div class="flex flex-col">
                        <h4 class="text-blue-500 pb-1">Hlavní stránka</h4>
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
                                <h4 class="text-blue-500 pb-1">Hlavní stránka</h4>
                                <img src="/images/dashboard-update.png" alt="Updated Dashboard" class="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Return to narrower content -->
            <div class="mx-auto max-w-4xl">
                <!-- SECTION 6: Design -->
                <div class="mb-8 md:mb-12">
                    <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Design</h2>
                    <p class="text-gray-700 mb-4">
                        Po vytvoření wireframů nastal čas výsledného designu. Zvolila jsem primární a sekundární barvy
                        byly
                        stanoveny klientem, takže jsem se dále
                        zaměřoval především na:
                        <br /><br />
                        <span class="text-blue-500 font-semibold">Komponenty</span> - Standardizované prvky UI jako
                        tlačítka, vstupní pole, grafy pro konzistentní UX
                        <br />
                        <span class="text-blue-500 font-semibold">Atomy a stavry</span> - Základní stavební prvky včetně
                        ikon, dialogů a upozornění
                    </p>
                </div>
            </div>

            <!-- App Mockups - Can be a bit wider for the grid -->
            <div class="mx-auto max-w-4xl mb-8 md:mb-12">
                <UCarousel v-slot="{ item }" arrows :items="mockupItems"     :next="{ color: 'primary' }"
                >
                    <img :src="item" class="rounded-md shadow-md mx-4 w-[720px]" />
                </UCarousel>
            </div>

            <!-- Contact Section - Back to narrow -->
            <div class="mx-auto max-w-4xl mt-8 flex justify-center mb-8">
                <div class="bg-purple-50 p-4 sm:p-6 rounded-lg w-full text-center">
                    <h2 class="text-lg md:text-xl font-bold mb-3">Závěr</h2>
                    <p class="mb-3">Tento projekt mi pomohl rozvinout mé schopnosti v oblasti uživatelského rozhraní a
                        používání AI prvků při designu.</p>
                    <p>Výsledná aplikace poskytuje efektivní možnost správy vodních účtů a měření spotřeby.</p>
                </div>
            </div>
        </div>
    </GradientBackground>
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