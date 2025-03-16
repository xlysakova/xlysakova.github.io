<template>
    <div class="gradient-background">
      <slot></slot>
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
    background: linear-gradient(135deg, #e6f7ff 0%, #f9f0f5 50%, #f0f4ff 100%);
    overflow: hidden;
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
  }
  </style>