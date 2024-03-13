<script setup lang="ts">
import GlobalCard from "@/components/global-components/GlobalCard.vue"
import GlobalSelect from "@/components/global-components/GlobalSelect.vue"
import { useI18n } from 'vue-i18n';
import useLanguage from '@/composable/useLanguage';
const { languages } = useLanguage();
const { t } = useI18n();
</script>

<template>
  <div class="flex justify-center">
    <global-card
      route="globalSettings"
    >
    <global-select 
      :label="t('label.language')"
      :items="languages"
    />
    </global-card>
  </div>
</template>
