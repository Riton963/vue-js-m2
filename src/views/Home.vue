<script setup lang="ts">
import Emit from '@/components/Emit.vue';
import TopBar from '../components/TopBar.vue';
import CreateWorkFlow from '@/components/Modals/createWorkFlow.vue';
import useWorkFlow from '@/composables/useWorkFlow';
import Button from 'primevue/button';
import { ref } from 'vue';
import Upload from '@/components/Modals/Upload.vue';
import useUpload from '@/composables/useUpload';

const { openCreateWorkFlowModal } = useWorkFlow();
const { openUploadModal } = useUpload();

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
    <div class="flex gap-4 mt-4 w-10 m-auto">
        <Button label="Création d'un workFlows" @click="openCreateWorkFlowModal()" class="w-2 h-5rem"></Button>
        <Button label="TimeOut" @click="timeOut()" class="w-2"></Button>
        <Emit @emit-click="showLaTeteDeYann = !showLaTeteDeYann" class="w-2"/>
        <Button label="Upload" @click="openUploadModal()" class="w-2"></Button>
    </div>
    <div class="w-10 m-auto flex justify-content-center align-items-center mt-4 mb-4">
        <img v-if="showLaTeteDeYann" src="../assets/yann.png">
    </div>
        
    <CreateWorkFlow />
    <Upload />

</template>
