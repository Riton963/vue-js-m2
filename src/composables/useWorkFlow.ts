import { ref, type Ref } from "vue";

const createWorkFlowModal = ref<boolean>(false)

export default function useWorkFlow(): {
    openCreateWorkFlowModal: () => void,
    closeCreateWorkFlowModal: () => void,
    createWorkFlowModal: Ref<boolean>
} {

    const openCreateWorkFlowModal = (): void => {
        createWorkFlowModal.value = true
     };

    const closeCreateWorkFlowModal = (): void => {
        createWorkFlowModal.value = false
    };

    return {
        openCreateWorkFlowModal,
        closeCreateWorkFlowModal,
        createWorkFlowModal
    }
}