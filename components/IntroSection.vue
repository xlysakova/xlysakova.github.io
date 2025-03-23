<template>
    <section class="intro-section">
        <div class="content">
            <h1>
                Zdravím, jmenuji se <span class="italic text-primary-500">Denisa</span><br />
                a jsem <span class="italic text-primary-500">UX/UI DESIGNER</span>
            </h1>
            <div class="scroll-arrow flex justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 12L12 19L5 12" stroke="#333" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    </section>
</template>

<script setup>
// No props needed
</script>

<style scoped>
.intro-section {
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
}

.content {
    max-width: 800px;
}

h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    line-height: 1.3;
    color: #333;
    margin-bottom: 4rem;
}

.highlight {
    color: #d17089;
    font-weight: 300;
    font-style: italic;
}

.highlight.blur-background {
    position: relative;
    z-index: 1;
    padding: 0.2rem 1rem;
    border-radius: 0;
    background-color: transparent;
    filter: none;
}

.highlight.blur-background::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -10px;
    right: -10px;
    bottom: -5px;
    background-color: rgba(207, 235, 235, 0.7);
    border-radius: 2rem;
    filter: blur(10px);
    z-index: -1;
}

.scroll-arrow {
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-20px);
    }

    60% {
        transform: translateY(-10px);
    }
}
</style>