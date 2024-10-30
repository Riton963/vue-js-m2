<script setup lang="ts">
import TopBar from '../components/TopBar.vue';
import CreateWorkFlow from '@/components/Modals/createWorkFlow.vue';
import useWorkFlow from '@/composables/useWorkFlow';
import Button from 'primevue/button';
import { ref } from 'vue';

const { openCreateWorkFlowModal } = useWorkFlow();

const showLaTeteDeYann = ref<boolean>(false);

const timeOut = () => {
    showLaTeteDeYann.value = true;
    setTimeout(function() {
        showLaTeteDeYann.value = false;
        }, 2000); 
}
    
</script>

<template>
    <TopBar></TopBar>
    <div class="flex flex-column align-items-center justify-content-center gap-4">
        <Button label="Création d'un workFlows" @click="openCreateWorkFlowModal()"></Button>
        <Button label="TimeOut" @click="timeOut()"></Button>
        <img v-if="showLaTeteDeYann" src="../assets/yann.png" alt="">
    </div>
    <CreateWorkFlow />

</template>
