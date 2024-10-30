<script setup lang="ts">
    import useUpload from '@/composables/useUpload';
    import Button from 'primevue/button';
    import Dialog from 'primevue/dialog';
    import FileUpload from 'primevue/fileupload';
    import { ref } from 'vue';
    const {uploadModal, closeUploadModal} = useUpload();
    
    const fileupload = ref();
    const onUpload = () => {

    };

    const upload = () => {
        fileupload.value.upload();
    };

</script>

<template>  
    <Dialog v-model:visible="uploadModal" modal header="Upload" :style="{ width: '25rem' }">
        <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" class="mb-4" />
        <div class="flex justify-end gap-2">
            <Button type="button" label="Annuler" severity="secondary" @click="closeUploadModal()"></Button>
        </div>
    </Dialog>
    
</template>