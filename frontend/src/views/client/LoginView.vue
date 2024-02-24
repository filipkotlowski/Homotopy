<script setup lang="ts">
import GlobalButton from '@/components/global-components/GlobalButton.vue';
import GlobalInput from '@/components/global-components/GlobalInput.vue'; 
import useAuthenticate from '@/composable/useAuthenticate';
import { ref } from 'vue';
const { authenticate } = useAuthenticate();

const userEmail = ref('');
const userPassword = ref('');

const validateForm = () => {
    authenticate({ email: userEmail.value, password: userPassword.value });
};
</script>
<template>
    <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                Flowbite
            </a>
            <div class="w-full bg-white rounded-lg shadow border p-5 sm:max-w-md">
                <v-form  @submit.prevent="validateForm">
                    <global-input label="E-mail" type="email" v-model="userEmail"/>
                    <global-input label="Hasło" type="password" v-model="userPassword"/>
                    <global-button text="Zaloguj się"/>
                </v-form>
            </div>
        </div>
    </section>
</template>
