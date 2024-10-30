<script setup lang="ts">
import Button from 'primevue/button';


defineEmits(['emit-click'])

</script>
<template>
    <Button label="Emit" @click="$emit('emit-click')"></Button>
</template>