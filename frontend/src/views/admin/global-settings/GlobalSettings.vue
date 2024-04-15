<script setup lang="ts">
import GlobalCard from "@/components/global-components/GlobalCard.vue"
import GlobalSettingsGeneralTab from "@/views/admin/global-settings/GlobalSettingsGeneralTab.vue"
import { ref } from "vue";
const tab = ref('general')
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="flex justify-center">
    <global-card route="globalSettings">
        <v-tabs v-model="tab" align-tabs="center" color="primary">
          <v-tab value="general">{{ t('tab.globalSettings.general') }}</v-tab>
          <v-tab value="internationalization">{{ t('tab.globalSettings.internationalization') }}</v-tab>
          <v-tab value="template">{{ t('tab.globalSettings.template') }}</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="general">
            <global-settings-general-tab />
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
