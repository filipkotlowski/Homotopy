<script setup type="ts">
import useNavigation from "@/composable/useNavigation";
import { useI18n } from 'vue-i18n';

import {defineProps} from 'vue';
const { t } = useI18n();

const props = defineProps({
    route: String,
});
</script>
<template>
    <div class="bg-dark-secondary rounded-md shadow-lg shadow-primary border-dark-secondary border-2 w-[90%] min-h-[88vh] text-white">
        <v-breadcrumbs class="uppercase" :items="['Admin', t(`tab.name.${props.route}`)]" />
        <div class="py-4 px-12">
            <slot />
        </div>
    </div>
</template>