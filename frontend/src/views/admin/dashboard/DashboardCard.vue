<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    data: Object,
});

</script>
<template>
    <div class="w-full h-full rounded-3xl relative p-5">
        <span class="text-9xl absolute bottom-0 right-0 opacity-5">0{{ props.data?.id }}</span>
        <h3 class="text-3xl">{{ props.data?.title }}</h3>
        <h5 class="text-xl opacity-50">{{ props.data?.subtitle }}</h5>
    </div>
</template>