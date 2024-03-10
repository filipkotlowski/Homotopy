<script setup type="ts">
import useNavigation from "@/composable/useNavigation";

import {defineProps} from 'vue';

const props = defineProps({
    route: String,
});
</script>
<template>
    <div class="bg-white rounded-md shadow-lg shadow-gray-200 border-gray-200 border-2 w-[90%] min-h-[88vh]">
        <v-breadcrumbs :items="route.split('/')" />
        <slot />
    </div>
</template>