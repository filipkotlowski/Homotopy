<script setup lang="ts">
import GlobalButton from '@/components/global-components/GlobalButton.vue';
import GlobalInput from '@/components/global-components/GlobalInput.vue';
import useAuthenticate from '@/composable/useAuthenticate';
import { ref } from 'vue';
import useNavigation from "@/composable/useNavigation";
import { useToast } from "vue-toastification";

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
        toast.error('Pole email musi zostać uzupełnione')
        isLoading.value = false;
    }
    if (userPassword.value == '') {
        isError.value = true;
        toast.error('Pole hasło musi zostać uzupełnione')
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
                <img class="w-20 h-16 mr-2" src="@/assets/page_forge.png" alt="logo">
                Pageforge
            </span>
            <div class="w-full bg-white rounded-lg p-5 sm:max-w-md shadow-lg shadow-gray-200 border-gray-200 border-2">
                <v-form @submit.prevent="validateForm">
                    {{ $t('button.login') }}
                    <global-input label="E-mail" type="email" v-model="userEmail" :loading="isLoading"/>
                    <global-input label="Hasło" type="password" v-model="userPassword" :loading="isLoading"/>
                    <global-button text="Zaloguj się" />
                </v-form>
            </div>
        </div>
    </section>
</template>
