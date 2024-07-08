<script setup lang="ts">
const props = defineProps({
    data: Object,
    currentRoute: String,
});
</script>

<template>
    <div class="w-12 h-12 mb-5 rounded-full flex items-center justify-center" :class="currentRoute == `${props.data?.path}` ? 'bg-[#121116]' : 'bg-[#EDEDED]'">
        <vue-feather
            :type="$props.data?.icon"
            :class="currentRoute == `${props.data?.path}` ? 'text-white' : 'text-black'"
        />
    </div>
</template>
