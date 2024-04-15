<script setup lang="ts">
import GlobalSelect from "@/components/global-components/GlobalSelect.vue"
import GlobalPrimaryButton from "@/components/global-components/GlobalPrimaryButton.vue"
import GlobalDivider from "@/components/global-components/GlobalDivider.vue"
import { useI18n } from 'vue-i18n';
import useGlobalSettings from './useGlobalSettings';
import { TLanguage } from "@/const/types/Languages";
import useInternalization from "@/composable/api/useInternalization"
const { actions: settingsActions, newLanguage, currentLanguage } = useGlobalSettings();
const { languages } = useInternalization()
const { t } = useI18n();
const updateValue = (newValue: TLanguage) => {
    newLanguage.value = newValue.value
}
</script>

<template>
    <v-form @submit.prevent="settingsActions.setNewLanguage">
        <global-select :label="t('label.language')" :items="languages"
            :default-value="currentLanguage.map((language: string) => t(language.replace('-', '')))"
            @update:value="updateValue" />
        <global-divider />
        <global-primary-button :text="t('text.save')" class="w-[100px] my-5" />
    </v-form>
</template>
