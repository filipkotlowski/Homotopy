<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
    class: String,
});
</script>
<template>
    <h2 
    class="font-bold text-[33px]"
    :class="props.class"
    >
        <slot />
    </h2>
</template>