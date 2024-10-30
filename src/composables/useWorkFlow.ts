import { getWorkFlows } from "@/services/workFlows";
import type { WorkFlowsType } from "@/types/workflowsType";
import { reactive, ref, type Ref } from "vue";
const workFlows = ref<WorkFlowsType[]>([]);


const createWorkFlowModal = ref<boolean>(false)
export default function useWorkFlow(): {
    openCreateWorkFlowModal: () => void,
    closeCreateWorkFlowModal: () => void,
    createWorkFlowModal: Ref<boolean>,
    initWorkFlows: () => void,
    workFlows: Ref<WorkFlowsType[]>
} {

    const openCreateWorkFlowModal = (): void => {
        createWorkFlowModal.value = true
     };

    const closeCreateWorkFlowModal = (): void => {
        createWorkFlowModal.value = false
    };

    const initWorkFlows = async (): Promise<void> => {
        workFlows.value = await getWorkFlows()
    }


    return {
        openCreateWorkFlowModal,
        closeCreateWorkFlowModal,
        createWorkFlowModal,
        initWorkFlows,
        workFlows
    }
}