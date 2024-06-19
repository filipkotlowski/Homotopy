<script setup>
import { defineProps } from 'vue';
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const props = defineProps({
    data: Object,
});
</script>
<template>
    <div :class="data.textColor"
        class="flex flex-col items-center justify-center gap-[36px] h-[80%] md:flex-row md:gap-[128px]">
        <div v-for="item in props.data?.items" class="flex flex-col items-center justify-center">
            <div class="flex flex-col items-center md:flex-row-reverse md:items-end">
                <v-icon :size="mobile ? '80' : '120'" color="#00000050">{{ item.icon }}</v-icon>
                <span class="text-[33px] font-MulishBold lg:text-[38px] md:mb-3">{{ item.number }}</span>
            </div>
            <span class="text-[11px] font-MulishRegular lg:text-[13px]">{{ item.description }} </span>
        </div>
    </div>
</template>