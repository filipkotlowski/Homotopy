<script setup lang="ts">
import GlobalCard from "@/components/global-components/GlobalCard.vue"
import GlobalSelect from "@/components/global-components/GlobalSelect.vue"
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="flex justify-center">
    <global-card
      route="globalSettings"
    >
    <global-select 
      :label="t('label.language')"
    />
    </global-card>
  </div>
</template>
