<script setup lang="ts">
import GlobalCard from "@/components/global-components/GlobalCard.vue"
import GlobalSelect from "@/components/global-components/GlobalSelect.vue"
import GlobalButton from "@/components/global-components/GlobalButton.vue"
import { useI18n } from 'vue-i18n';
import useGlobalSettings from './useGlobalSettings';
import { TLanguage } from "@/const/types/Languages";
import useInternalization from "@/composable/api/useInternalization"
const { actions: settingsActions, newLanguage, currentLanguage} = useGlobalSettings();
const { languages } = useInternalization()
const { t } = useI18n();

const updateValue = (newValue: TLanguage) => {
  newLanguage.value = newValue.value
}
</script>

<template>
  <div class="flex justify-center">
    <global-card route="globalSettings">
      <v-form @submit.prevent="settingsActions.setNewLanguage">
        <global-select :label="t('label.language')" :items="languages" :default-value="currentLanguage.map((language: string) => t(language.replace('-', '')))"  @update:value="updateValue" />
        <v-divider class="border-opacity-75"></v-divider>
        <global-button :text="t('text.save')" class="w-[100px] my-5"/>
      </v-form>
    </global-card>
  </div>
</template>
