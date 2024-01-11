<script setup lang="ts">
const route: string = window.location.pathname;
const props = defineProps({
    data: Object,
});
</script>

<template>
    <div class="list-none py-2 mb-2 flex items-center rounded-md hover:bg-gray-100 hover:cursor-pointer"
        :class="route == props.data?.route ? 'bg-gray-100' : ''">
        <vue-feather :type="$props.data?.icon" class="ml-2" :class="route == props.data?.route ? 'text-gray-700' : 'text-gray-500'" />
        <span class="ml-2 w-[65%]" :class="route == props.data?.route ? 'text-gray-700' : 'text-gray-500'">
            {{ props.data?.title }}
        </span>
        <vue-feather size="18" v-if="props.data?.children" type="chevron-right" class="mr-2" :class="route == props.data?.route ? 'text-gray-700' : 'text-gray-500'" />
    </div>
</template>
