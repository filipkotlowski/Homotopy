<script setup lang="ts">
import GlobalCard from "@/components/global-components/GlobalCard.vue"
import { defineProps } from 'vue';
const props = defineProps({
    currentRoute: String,
});
</script>

<template>
  <div class="flex justify-center">
    <global-card
      :route="currentRoute"
    >
  asd
    </global-card>
  </div>
</template>
