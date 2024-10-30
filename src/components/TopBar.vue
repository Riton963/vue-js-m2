<template>
    <div class="h-5rem w-full flex align-items-center justify-content-center gap-4 top-bar">
        <div class="cursor-pointer" @click="router.push({ name: 'Home' })">Home</div>
        <div class="cursor-pointer" @click="router.push({ name: 'WorkFlows' })">WorkFlows</div>
        <div class="cursor-pointer" @click="router.push({ name: 'Status' })">Status</div>
    </div>
</template>

<script setup lang="ts"> 
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<style>
.top-bar {
    background-color: #10b981;
}
</style>