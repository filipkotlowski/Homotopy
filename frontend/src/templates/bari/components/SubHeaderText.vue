<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
    class: String,
});
</script>
<template>
    <span 
    class="font-MulishItalic text-[11px]"
    :class="props.class"
    >
        <slot />
    </span>
</template>