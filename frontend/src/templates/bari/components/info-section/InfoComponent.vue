<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div v-for="(item, index) in props.data?.items" :key="index" class="flex h-2/5 items-center mb-5 w-4/5" :class="[{ 'flex-row-reverse': index % 2 !== 0 }]">
        <img :src="item.image" class="h-full" :class="index % 2 !== 0 ? '-ml-10' : '-mr-10'"/>
        <div class="drop-shadow-primary h-4/5 p-3" :class="props.data.carouselColor">
            <h3 :class="props.data.carouselTextColor" class="h-1/5 text-[20px] text-center py-3 font-MulishBold">
                {{ item.title }}
            </h3>
            <div class="h-4/5 md:flex md:items-center">
                <span :class="props.data.carouselTextColor" class="text-[12px] font-MulishRegular md:text-[13px]">{{ item.content }}</span>
            </div>
        </div>
    </div>
</template>
