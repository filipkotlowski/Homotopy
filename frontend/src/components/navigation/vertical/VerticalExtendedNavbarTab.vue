<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['changeRoute']);
const isTabOpen = ref(false);
const { t } = useI18n();


const props = defineProps({
    data: Object,
    currentRoute: String,
});

const toggleTabOpen = () => {
    isTabOpen.value = !isTabOpen.value;
}

const handleSubTabClick = (newUrl: string, isAdmin: boolean) => {
    emit('changeRoute', newUrl, isAdmin);
}

</script>

<template>
    <div 
        @click="toggleTabOpen"
        class="list-none py-2 mb-2 flex items-center rounded-md hover:bg-gray-100 hover:cursor-pointer animate-fade-down"
        :class="currentRoute == `admin/${props.data?.path}` ? 'bg-gray-100' : ''">
        <vue-feather :type="$props.data?.icon" class="ml-2" :class="currentRoute == props.data?.path ? 'text-gray-700' : 'text-gray-500'" />
        <span class="ml-2 w-[65%]" :class="currentRoute == props.data?.path ? 'text-gray-700' : 'text-gray-500' ">
            {{ t(`tab.name.${props.data?.title}`) }}
        </span>
        <vue-feather size="18" :type="isTabOpen ? 'chevron-down' : 'chevron-right'" class="mr-2" :class="currentRoute == props.data?.path ? 'text-gray-700' : 'text-gray-500'" />
    </div>
    <ol v-if="isTabOpen" class="w-full animate-fade-down">
        <li v-for="subTab in props.data?.children"
            class="list-none py-2 mb-2 flex items-center rounded-md hover:bg-gray-100 hover:cursor-pointer"
            :class="currentRoute == `admin/${subTab.path}` ? 'bg-gray-100' : ''" 
            @click="handleSubTabClick(subTab.path, props.data?.isAdmin)"
            >
            <vue-feather type="circle" size="10" class="ml-2" 
                :class="currentRoute == subTab.path ? 'text-gray-700' : 'text-gray-500'" />
            <span class="ml-2 w-[75%] py-1" 
                :class="currentRoute == subTab.path ? 'text-gray-700' : 'text-gray-500'">
                {{ t(`tab.name.${subTab.title}`) }}
            </span>
        </li>
    </ol>
</template>
