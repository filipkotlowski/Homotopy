<script setup lang="ts">
import GlobalCard from "@/components/global-components/GlobalCard.vue"
import GlobalSelect from "@/components/global-components/GlobalSelect.vue"
import GlobalButton from "@/components/global-components/GlobalButton.vue"
import { useI18n } from 'vue-i18n';
import useLanguage from '@/composable/useLanguage';
const { languages } = useLanguage();
const { t } = useI18n();
</script>

<template>
  <div class="flex justify-center">
    <global-card route="globalSettings">
      <v-form @submit.prevent>
        <global-select :label="t('label.language')" :items="languages" />
        <v-divider class="border-opacity-75"></v-divider>
        <global-button :text="t('text.save')" class="w-[100px] my-5"/>
      </v-form>
    </global-card>
  </div>
</template>
