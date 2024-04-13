<script setup lang="ts">
import GlobalPrimaryButton from '@/components/global-components/GlobalPrimaryButton.vue';
import GlobalInput from '@/components/global-components/GlobalInput.vue';
import useAuthenticate from '@/composable/useAuthenticate';
import { ref } from 'vue';
import useNavigation from "@/composable/useNavigation";
import { useToast } from "vue-toastification";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { navigateTo } = useNavigation();
const { isLoading, authenticate } = useAuthenticate(navigateTo);

const userEmail = ref('');
const userPassword = ref('');
const isError = ref(false);
const toast = useToast();

const validateForm = () => {
    isError.value = false;
    isLoading.value = true;
    if (userEmail.value == '') {
        isError.value = true;
        toast.error(t('message.fillField', { field: t('label.email') }))
        isLoading.value = false;
    }
    if (userPassword.value == '') {
        isError.value = true;
        toast.error(t('message.fillField', { field: t('label.password') }))
        isLoading.value = false;
    }
    if (!isError.value) {
        authenticate({ email: userEmail.value, password: userPassword.value });
    }
};
</script>

<template>
    <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <span class="flex items-center mb-6 text-2xl font-semibold text-gray-900 uppercase">
                <img class="h-20 mr-2" src="@/assets/logo.png" alt="logo">
                Vortex
            </span>
            <div class="w-full bg-white rounded-lg p-5 sm:max-w-md shadow-lg shadow-primary border-gray-200 border-2">
                <v-form @submit.prevent="validateForm">
                    <global-input :label="t('label.email')" type="email" v-model="userEmail" :loading="isLoading" />
                    <global-input :label="t('label.password')" type="password" v-model="userPassword"
                        :loading="isLoading" />
                    <global-primary-button :text="t('button.login')" class="w-[100%]"/>
                </v-form>
            </div>
        </div>
    </section>
</template>
