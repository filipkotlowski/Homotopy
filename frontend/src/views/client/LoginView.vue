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
    <section class="flex w-screen h-screen">
        <div class="w-[30%] bg-[#121116] text-white flex flex-col justify-center items-center" v-if="!mobile">
            <span class="text-[24px] font-thin font-UrbanistThinItalic w-[70%] text-left">
                If you are going through hell, keep going.
            </span>
            <span class="text-[18px] font-UrbanistBold w-[70%] text-left">
                ~ Winston Churchill
            </span>
        </div>
        <div class="w-full md:w-[70%] flex items-center justify-center">
            <div class="bg-[#121116] text-white flex flex-col justify-center items-center w-full h-full md:w-1/2 md:h-1/2">
                    <h1 class="font-UrbanistRegular text-[48px]">Homotopy</h1>
                    <h3 class="font-UrbanistBold text-[36px]">Welcome</h3>
                <v-form @submit.prevent="validateForm" class="w-full p-5 flex flex-col items-center mt-10 ">
                    <global-input :label="t('label.email')" type="email" v-model="userEmail" :loading="isLoading" class="w-4/5"/>
                    <global-input :label="t('label.password')" type="password" v-model="userPassword" :loading="isLoading" class="w-4/5" />
                    <global-primary-button :text="t('button.login')" class="w-[40%] mt-10" />
                </v-form>
            </div>
        </div>
    </section>
</template>
