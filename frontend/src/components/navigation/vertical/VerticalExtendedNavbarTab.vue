<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['changeRoute']);
const isTabOpen = ref(false);

const props = defineProps({
    data: Object,
    currentRoute: String,
});

const toggleTabOpen = () => {
    isTabOpen.value = !isTabOpen.value;
}

const handleSubTabClick = (newUrl: string) => {
    emit('changeRoute', newUrl);
}

</script>

<template>
    <div 
        @click="toggleTabOpen"
        class="list-none py-2 mb-2 flex items-center rounded-md hover:bg-gray-100 hover:cursor-pointer animate-fade-down"
        :class="currentRoute == props.data?.path ? 'bg-gray-100' : ''">
        <vue-feather :type="$props.data?.icon" class="ml-2" :class="currentRoute == props.data?.path ? 'text-gray-700' : 'text-gray-500'" />
        <span class="ml-2 w-[65%]" :class="currentRoute == props.data?.path ? 'text-gray-700' : 'text-gray-500' ">
            {{ props.data?.title }}
        </span>
        <vue-feather size="18" :type="isTabOpen ? 'chevron-down' : 'chevron-right'" class="mr-2" :class="currentRoute == props.data?.path ? 'text-gray-700' : 'text-gray-500'" />
    </div>
    <ol v-if="isTabOpen" class="w-full animate-fade-down">
        <li v-for="subTab in props.data?.children"
            class="list-none py-2 mb-2 flex items-center rounded-md hover:bg-gray-100 hover:cursor-pointer"
            :class="currentRoute == subTab.path ? 'bg-gray-100' : ''" 
            @click="handleSubTabClick(subTab.path)"
            >
            <vue-feather type="circle" size="14" class="ml-2" 
                :class="currentRoute == subTab.path ? 'text-gray-700' : 'text-gray-500'" />
            <span class="ml-2 w-[65%]" 
                :class="currentRoute == subTab.path ? 'text-gray-700' : 'text-gray-500'">
                {{ subTab.title }}
            </span>
        </li>
    </ol>
</template>
