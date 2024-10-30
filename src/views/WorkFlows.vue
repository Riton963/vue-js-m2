<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import useWorkFlow from '@/composables/useWorkFlow';

const { initWorkFlows, workFlows } = useWorkFlow();

initWorkFlows();


</script>

<template>
    <TopBar></TopBar>
    <div class="w-10 m-auto">
        <div class="flex gap-2 cursor-pointer w-3">
            <div v-for="workFlow in workFlows" class="flex flex-column align-items-center justify-content-center gap-4 workflow ">
                <div>{{ workFlow.name }}</div>
                <div>{{ workFlow.data_source }}</div>
            </div>
        </div>
    </div>
</template>

<style>
.workflow {
    width: 20rem;
    height: 10rem;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 1rem;
}

</style>