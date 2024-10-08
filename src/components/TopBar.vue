<template>
    <div class="h-5rem w-full flex align-items-center justify-content-center gap-4">
        <div @click="router.push({ name: 'Home' })">Home</div>
        <div @click="router.push({ name: 'WorkFlows' })">WorkFlows</div>
        <div @click="router.push({ name: 'Status' })">Status</div>
    </div>
</template>

<script setup lang="ts"> 
import { useRouter } from 'vue-router';
const router = useRouter();
</script>