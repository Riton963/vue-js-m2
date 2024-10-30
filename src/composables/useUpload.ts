import { ref, type Ref } from "vue";


const uploadModal = ref<boolean>(false)
export default function useUpload(): {
    openUploadModal: () => void,
    closeUploadModal: () => void,
    uploadModal: Ref<boolean>,
} {

    const openUploadModal = (): void => {
        uploadModal.value = true
     };

    const closeUploadModal = (): void => {
        uploadModal.value = false
    };

 


    return {
        uploadModal,
        closeUploadModal,
        openUploadModal
    }
}