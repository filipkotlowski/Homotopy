<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
  type: String,
  loading: Boolean,
});

</script>

<template>
    <v-text-field :label="props.label" :type="props.type" variant="outlined" :loading="props.loading"/>
</template>
