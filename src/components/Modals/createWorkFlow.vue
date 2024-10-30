<script setup lang="ts">
import useWorkFlow from '@/composables/useWorkFlow';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { createWorkFlow } from '@/services/workFlows';
import type { WorkFlowsType } from '@/types/workflowsType';
import InputText from 'primevue/inputtext';


const { createWorkFlowModal, closeCreateWorkFlowModal } = useWorkFlow();

const WorkFlows: WorkFlowsType = 
    {
    	name: "",
    	data_source: "s3://bucket/dataset.csv",
        steps: [
            {step_type: "data_cleaning", parameters: {"method": "remove_nulls"}},
            {step_type: "feature_engineering", parameters: {"techniques": ["PCA", "scaling"]}},
            {step_type: "model_training", model_type: "linear_regression"}	
        ]
 	}


const handleCreateWorkFlow = async () => {
    await createWorkFlow(WorkFlows) 
    closeCreateWorkFlowModal()  
}

</script>

<template>  
<Dialog v-model:visible="createWorkFlowModal" modal header="Création d'un wokFlows" :style="{ width: '25rem' }">
    <div class="flex flex-column gap-4">
        <div class="flex flex-column gap-2">
            <div>Nom du workflow</div>
            <InputText v-model="WorkFlows.name" />
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Annuler" severity="secondary" @click="closeCreateWorkFlowModal()"></Button>
            <Button type="button" label="Créer" @click="handleCreateWorkFlow()"></Button>
        </div>
    </div>
</Dialog>
</template>