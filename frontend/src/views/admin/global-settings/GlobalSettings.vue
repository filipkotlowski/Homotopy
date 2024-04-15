<script setup lang="ts">
import GlobalCard from "@/components/global-components/GlobalCard.vue"
import GlobalSelect from "@/components/global-components/GlobalSelect.vue"
import GlobalPrimaryButton from "@/components/global-components/GlobalPrimaryButton.vue"
import GlobalDivider from "@/components/global-components/GlobalDivider.vue"
import { useI18n } from 'vue-i18n';
import useGlobalSettings from './useGlobalSettings';
import { TLanguage } from "@/const/types/Languages";
import useInternalization from "@/composable/api/useInternalization"
import { ref } from "vue";
const { actions: settingsActions, newLanguage, currentLanguage } = useGlobalSettings();
const { languages } = useInternalization()
const { t } = useI18n();
const tab = ref('general')
const updateValue = (newValue: TLanguage) => {
  newLanguage.value = newValue.value
}
</script>

<template>
  <div class="flex justify-center">
    <global-card route="globalSettings">
        <v-tabs v-model="tab" align-tabs="center" color="primary">
          <v-tab value="general">General</v-tab>
          <v-tab value="internationalization">Internationalization</v-tab>
          <v-tab value="template">Template</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="general">
            <v-form @submit.prevent="settingsActions.setNewLanguage">
              <global-select :label="t('label.language')" :items="languages"
                :default-value="currentLanguage.map((language: string) => t(language.replace('-', '')))"
                @update:value="updateValue" />
              <global-divider />
              <global-primary-button :text="t('text.save')" class="w-[100px] my-5" />
            </v-form>
          </v-window-item>
          <v-window-item value="internationalization">
            internationalization
          </v-window-item>
          <v-window-item value="template">
            template
          </v-window-item>
        </v-window>
    </global-card>
  </div>
</template>
