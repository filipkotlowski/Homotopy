<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div v-for="item in data.items" class="ml-4 h-3/4 w-1/4">
        <img :src="item.image" class="w-full"/>
        <div class="drop-shadow-primary h-1/5 p-6" :class="[props.data.carouselColor]">
            <h3 :class="data.carouselTextColor" class="text-[20px] text-center pb-3 font-MulishBold">
                {{ item.title }}
            </h3>
            <div :class="[data.carouselTextColor]"
                class="text-[11px] font-MulishRegular text-center">
                {{ item.content }}
            </div>
        </div>
    </div>
</template>