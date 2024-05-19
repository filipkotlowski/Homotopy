<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    data: Object,
});
</script>
<template>
    <div class="flex flex-col items-center h-[90%] justify-center w-[325px]">
        <v-carousel  :show-arrows="false" cycle hide-delimiter-background :interval="props.data?.interval"  height="65vh">
            <v-carousel-item v-for="item in props.data?.items">
                <img :src="item.image" />
                <div class="bg-bari-accent p-4">
                    <h3 class="text-[20px] text-center pb-3 font-MulishBold">
                        {{ item.title }}
                    </h3>
                    <div class="text-[11px] font-MulishRegular">
                        {{ item.content }}
                    </div>
                </div>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>