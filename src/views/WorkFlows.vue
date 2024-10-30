<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import useWorkFlow from '@/composables/useWorkFlow';
import { deleteWorkFlow } from '@/services/workFlows';
import Button from 'primevue/button';

const { initWorkFlows, workFlows } = useWorkFlow();

initWorkFlows();


</script>

<template>
    <TopBar></TopBar>
    <div class="w-10 m-auto mt-4">
        <div class="flex gap-4 cursor-pointer w-3 worklfow-card">
            <div v-if="workFlows.length > 0" v-for="workFlow in workFlows" class="flex flex-column align-items-center justify-content-center gap-4 workflow ">
                <div>{{ workFlow.name }}</div>
                <div>{{ workFlow.data_source }}</div>
                <div class="flex gap-3">
                    <Button label="Démarrer" severity="warning" />
                    <Button v-if="workFlow.id" label="Supprimer" severity="danger" @click="deleteWorkFlow(workFlow.id)" />
                </div>
            </div>
            <div v-else>Aucun WorkFlow n'a été créer</div>
        </div>
    </div>
</template>

<style>
.workflow {
    width: 20rem;
    height: 10rem;
    border: 1px solid #10b981;
    border-radius: 1rem;
    padding: 1rem;
    background-color: white;
}

</style>