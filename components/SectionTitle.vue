<template>
    <div class="section-title">
      <div class="line"></div>
      <h2 class="title">{{ title }}</h2>
      <div class="line"></div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4rem 0;
    width: 100%;
  }
  
  .title {
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  position: relative;
  display: inline-block;
  z-index: 1;
}

h2::before {
  content: "";
  position: absolute;
  top: 0px;
  left: -30px;
  right: -30px;
  bottom: 0px;
  background-color: rgba(207, 235, 235, 0.847);
  border-radius: 4rem;
  filter: blur(10px);
  z-index: -1;
}
  .line {
    height: 1px;
    background: linear-gradient(to var(--direction, right), transparent, #d17089, transparent);
    flex-grow: 1;
    max-width: 300px;
  }
  
  .line:first-child {
    --direction: right;
    margin-right: 1rem;
  }
  
  .line:last-child {
    --direction: left;
    margin-left: 1rem;
  }
  </style>