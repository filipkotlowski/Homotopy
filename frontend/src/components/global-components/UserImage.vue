<script setup lang="ts">
import useAuthenticate from '@/composable/useAuthenticate';
import useNavigation from '@/composable/useNavigation';
import { useI18n } from 'vue-i18n';

const { navigateTo } = useNavigation();
const { logout } = useAuthenticate(navigateTo);
const { t } = useI18n();
</script>

<template>
    <div class="hover:cursor-pointer">
        <v-menu :close-on-content-click="false" location="bottom">
            <template v-slot:activator="{ props }">
                <v-img height="36" width="36" cover src="https://placehold.co/100x100" class="rounded-full" v-bind="props" />
</template>
<v-card min-width="300">
    <v-list>
        <v-list-item prepend-avatar="https://placehold.co/100x100" subtitle="Founder of Vuetify" title="John Leider">
        </v-list-item>
    </v-list>
    <v-list>
        <v-list-item>
            <div class="flex items-center w-full hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md" @click="logout">
                <vue-feather type="log-out" class="text-gray-700 flex items-center" />
                <span class="text-gray-700 mx-5">{{ t('button.logout') }}</span>
            </div>
        </v-list-item>
    </v-list>
</v-card>
</v-menu>
</div>
</template>
