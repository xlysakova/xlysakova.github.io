<script lang="ts" setup>

defineProps<{
    imageUrl: string;
    title: string;
}>();

</script>

<template>
    
    <div class="image-card">
        <div class="image-container">
            <img :src="imageUrl" :alt="title" />
           
        </div>
    </div>
</template>

<style scoped>
.image-card {
    border-radius: 1rem;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.image-card:hover {
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
    object-position: center;
}
</style>
