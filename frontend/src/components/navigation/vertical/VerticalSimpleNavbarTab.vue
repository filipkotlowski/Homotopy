<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['changeRoute']);
const { t } = useI18n();

const props = defineProps({
    data: Object,
    currentRoute: String,
});


const handleSubTabClick = (newUrl: string, isAdmin: boolean) => {
    emit('changeRoute', newUrl, isAdmin);
}
</script>

<template>
    <div
        class="list-none py-2 mb-2 flex items-center rounded-md hover:bg-gray-100 hover:cursor-pointer animate-fade-down"
        :class="currentRoute == `admin/${props.data?.path}` ? 'bg-dark-primary' : ''"
        @click="handleSubTabClick(props.data?.path, props.data?.isAdmin)"
    >
        <vue-feather
            :type="$props.data?.icon"
            class="ml-2"
            :class="currentRoute == `admin/${props.data?.path}` ? 'text-primary font-bold' : 'text-white font-normal'"
        />
        <span
            class="ml-2 w-[65%]"
            :class="currentRoute == `admin/${props.data?.path}` ? 'text-primary font-bold' : 'text-white' "
        >
            {{ t(`tab.name.${props.data?.title}`) }}
        </span>
        <vue-feather
            size="18"
            v-if="props.data?.children"
            type="chevron-right"
            class="mr-2"
            :class="currentRoute == `admin/${props.data?.path}` ? 'text-gray-700' : 'text-gray-500'"
        />
    </div>
</template>
