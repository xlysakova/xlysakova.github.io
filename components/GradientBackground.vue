<template>
  <div class="gradient-background">
    <div class="gradient-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// No props needed
</script>

<style scoped>
.gradient-background {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #CFEBEB 0%, #f9f0f5 50%, #fee5e5 100%);
  overflow: hidden;
}

.gradient-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.circle-1 {
  background: conic-gradient(from 0deg, rgba(207,235,235,0.8), rgba(249,240,245,0.8), rgba(254,229,229,0.8), rgba(207,235,235,0.8));
  width: 80vh;
  height: 80vh;
  left: -20vh;
  top: -20vh;
  opacity: 0.8;
  animation: rotate1 3s linear infinite;
}

.circle-2 {
  background: conic-gradient(from 120deg, rgba(249,240,245,0.8), rgba(254,229,229,0.8), rgba(207,235,235,0.8), rgba(249,240,245,0.8));
  width: 60vh;
  height: 60vh;
  right: -10vh;
  top: 20vh;
  opacity: 0.7;
  animation: rotate2 4s linear infinite;
}

.circle-3 {
  background: conic-gradient(from 240deg, rgba(254,229,229,0.8), rgba(207,235,235,0.8), rgba(249,240,245,0.8), rgba(254,229,229,0.8));
  width: 70vh;
  height: 70vh;
  left: 30vh;
  bottom: -20vh;
  opacity: 0.6;
  animation: rotate3 5s linear infinite;
}

@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes rotate3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

/* Add subtle grain texture */
.gradient-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}
</style>