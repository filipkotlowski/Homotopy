<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: Object,
});
</script>
<template>
    <div class="flex flex-col items-center justify-center gap-[36px] h-[80%]">
        <div v-for="item in props.data?.items" class="flex flex-col items-center justify-center">
            <v-icon size="80" color="#00000050">{{ item.icon }}</v-icon>
            <span class="text-[33px] font-MulishBold">{{ item.number }}</span>
            <span class="text-[11px] font-MulishRegular">{{ item.description }} </span>
        </div>
    </div>
</template>