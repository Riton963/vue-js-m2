<script setup lang="ts">
import type { WorkFlowsType } from '@/types/workflowsType';
import TopBar from '../components/TopBar.vue';
import { createWorkFlow } from '@/services/workFlows';
import CreateWorkFlow from '@/components/Modals/createWorkFlow.vue';
import useWorkFlow from '@/composables/useWorkFlow';

const { openCreateWorkFlowModal } = useWorkFlow();

const handleCreateWorkFlow = () => {
    openCreateWorkFlowModal()
}

</script>

<template>
    <TopBar></TopBar>
    <div class="flex flex-column align-items-center justify-content-center gap-4 h-15rem">
        <h2>Home</h2>
        <div class="bg-primary cursor-pointer" @click="handleCreateWorkFlow()">
            <div>Création d'un WorkFlows</div>
        </div>
    </div>
    <CreateWorkFlow />
</template>
