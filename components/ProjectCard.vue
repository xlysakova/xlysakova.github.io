<template>
    <div class="project-card">
      <div class="image-container">
        <img :src="imageUrl" :alt="title" />
        
        <!-- Hover overlay -->
        <div class="overlay">
          <h3 class="project-title" :style="[title === 'FLOWBUDGET' ? { color: '#5ecce7' } : { color: '#154EC1'}]"
          >{{ title }}</h3>
          <p class="project-description">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Project'
    },
    description: {
      type: String,
      default: 'Project description'
    },
    color: {
      type: String,
      default: '#154EC1'
    }
  });
  </script>
  
  <style scoped>
  .project-card {
    border-radius: 1rem;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    cursor: pointer;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
  
  .image-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    aspect-ratio: 16/9;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* Overlay styles */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
  }
  
  .project-card:hover .overlay {
    opacity: 1;
  }
  
  .project-title {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  
  .project-description {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: white;
    line-height: 1.4;
  }
  </style>