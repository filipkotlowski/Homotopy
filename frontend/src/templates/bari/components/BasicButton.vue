<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
    class: String,
});
</script>
<template>
    <div 
    class="text-[11px] uppercase px-8 py-3 w-[150px] text-center font-bold drop-shadow-primary transition-all font-MulishRegular hover:drop-shadow-none hover:cursor-pointer"
    :class="props.class"
    >
        <slot />
    </div>
</template>