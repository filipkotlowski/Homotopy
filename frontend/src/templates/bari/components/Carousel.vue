<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    showLongText:{
        type:Boolean,
        required:false,
        default: true,
    },
});
</script>
<template>
    <div 
    :class="props.showLongText ? 'h-[90%]  w-[325px]' : '' "
    class="flex flex-col items-center justify-center">
        <v-carousel :show-arrows="false" cycle hide-delimiters :interval="props.data?.interval"  height="65vh">
            <v-carousel-item v-for="item in props.data?.items">
                <img :src="item.image"/>
                <div :class="[props.data.carouselColor, props.showLongText ? 'p-4' : 'p-6']"
                >
                    <h3 
                        :class="data.carouselTextColor"
                        class="text-[20px] text-center pb-3 font-MulishBold">
                        {{ item.title }}
                    </h3>
                    <div 
                    :class="[data.carouselTextColor, props.showLongText ? '' : 'text-center' ]"
                    class="text-[11px] font-MulishRegular">
                        {{ item.content }}
                    </div>
                </div>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>