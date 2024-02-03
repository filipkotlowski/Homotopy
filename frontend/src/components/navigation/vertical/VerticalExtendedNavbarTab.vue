<script setup lang="ts">
import { ref } from 'vue';
import {useRouter } from 'vue-router';

const router = useRouter();

const route = ref("");
const props = defineProps({
    data: Object,
});
const isTabOpen = ref(false);
const toggleTabOpen = () => {
    isTabOpen.value = !isTabOpen.value;
}
const navigateTo = (routeURL: string) => {
    router.push(routeURL);
    route.value = routeURL;
}
route.value = window.location.pathname;

console.log(route.value)
</script>

<template>
    {{ route }}
    <div 
        @click="toggleTabOpen"
        class="list-none py-2 mb-2 flex items-center rounded-md hover:bg-gray-100 hover:cursor-pointer animate-fade-down"
        :class="route == props.data?.path ? 'bg-gray-100' : ''">
        <vue-feather :type="$props.data?.icon" class="ml-2" :class="route == props.data?.path ? 'text-gray-700' : 'text-gray-500'" />
        <span class="ml-2 w-[65%]" :class="route == props.data?.path ? 'text-gray-700' : 'text-gray-500' ">
            {{ props.data?.title }}
        </span>
        <vue-feather size="18" :type="isTabOpen ? 'chevron-down' : 'chevron-right'" class="mr-2" :class="route == props.data?.path ? 'text-gray-700' : 'text-gray-500'" />
    </div>
    <ol v-if="isTabOpen" class="w-full animate-fade-down">
        <li v-for="subTab in props.data?.children"
            class="list-none py-2 mb-2 flex items-center rounded-md hover:bg-gray-100 hover:cursor-pointer"
            :class="route == subTab.path ? 'bg-gray-100' : ''" 
            @click="navigateTo(subTab.path)"
            >
            <vue-feather type="circle" size="14" class="ml-2" 
                :class="route == subTab.path ? 'text-gray-700' : 'text-gray-500'" />
            <span class="ml-2 w-[65%]" 
                :class="route == subTab.path ? 'text-gray-700' : 'text-gray-500'">
                {{ subTab.title }}
            </span>
        </li>
    </ol>
</template>
