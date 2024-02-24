<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
  type: String,
});

</script>

<template>
    <v-text-field :label="props.label" :type="props.type" variant="outlined"/>
</template>
