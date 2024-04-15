<script setup lang="ts">
import GlobalCard from "@/components/global-components/GlobalCard.vue"
import GlobalSettingsGeneralTab from "@/views/admin/global-settings/GlobalSettingsGeneralTab.vue"
import { ref } from "vue";
const tab = ref('general')
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
