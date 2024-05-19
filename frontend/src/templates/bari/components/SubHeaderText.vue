<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
    class: String,
});
</script>
<template>
    <h2 
    class="font-MulishItalic text-[11px]"
    :class="props.class"
    >
        <slot />
    </h2>
</template>