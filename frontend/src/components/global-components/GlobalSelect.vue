<script setup lang="ts">
import type { defineProps, PropType} from 'vue';
import { TSelectOption } from "@/const/types/TSelectOption";

const props = defineProps({
    items: Object as PropType<TSelectOption>,
    label: String
});
</script>

<template>
   <label>
      {{ props.label }}
   </label>
   <v-select :items="props.items">
       <template v-slot:selection="{ item, index }">
          <img :src="item.image">{{ item.name }}
       </template>
       <template v-slot:item="{ item }">
          <img :src="item.image">{{ item.name }}
       </template>
   </v-select>
</template>
