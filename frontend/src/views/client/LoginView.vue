<script setup lang="ts">
import GlobalPrimaryButton from '@/components/global-components/GlobalPrimaryButton.vue';
import GlobalInput from '@/components/global-components/GlobalInput.vue';
import useAuthenticate from '@/composable/useAuthenticate';
import { ref } from 'vue';
import useNavigation from "@/composable/useNavigation";
import { useToast } from "vue-toastification";
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify'

const { t } = useI18n();
const { navigateTo } = useNavigation();
const { isLoading, authenticate } = useAuthenticate(navigateTo);


const { mobile } = useDisplay()
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
    <!-- <section class="bg-dark-primary">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <span class="flex items-center mb-6 text-2xl font-semibold text-white uppercase">
                <img class="h-20 mr-2" src="@/assets/logo.png" alt="logo">
                Homotopy
            </span>
            <div class="w-full bg-dark-secondary rounded-lg p-5 sm:max-w-md shadow-lg shadow-primary  text-white">
                <v-form @submit.prevent="validateForm">
                    <global-input :label="t('label.email')" type="email" v-model="userEmail" :loading="isLoading" />
                    <global-input :label="t('label.password')" type="password" v-model="userPassword"
                        :loading="isLoading" />
                    <global-primary-button :text="t('button.login')" class="w-[100%]"/>
                </v-form>
            </div>
        </div>
    </section> -->
    <section class="flex w-screen h-screen">
        <div class="w-[30%] bg-[#121116] text-white flex flex-col justify-center items-center" v-if="!mobile">
            <span class="text-[24px] font-thin font-UrbanistThinItalic w-[70%] text-left">
                If you are going through hell, keep going.
            </span>
            <span class="text-[18px] font-UrbanistBold w-[70%] text-left">
                ~ Winston Churchill
            </span>
        </div>
        <div class="w-[70%]">
            <v-form @submit.prevent="validateForm">
                    <global-input :label="t('label.email')" type="email" v-model="userEmail" :loading="isLoading" />
                    <global-input :label="t('label.password')" type="password" v-model="userPassword"
                        :loading="isLoading" />
                    <global-primary-button :text="t('button.login')" class="w-[100%]"/>
                </v-form>
        </div>
    </section>
</template>
