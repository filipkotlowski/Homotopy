<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { TLanguage } from "@/const/types/Languages";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emits = defineEmits(['update:value']);

const props = defineProps({
   items: Object,
   label: String,
   defaultValue: Array,
});

const itemProps = (item: TLanguage) => {
   return {
      title: t(item.value.replace('-', '')),
   }
}

function updateValue(newValue: TLanguage) {
   emits('update:value', newValue);
}
</script>

<template>
   <label>
      {{ props.label }}
   </label>
   <v-select :item-props="itemProps" :items="props.items" variant="solo" item-value="value" :value="props.defaultValue" >
      <template v-slot:item="{ props, item }">
         <v-list-item v-bind="props" :title="item.title" @click="updateValue(props)">
            <template v-slot:prepend>
               <img :src="item.raw.photoUrl" width="50" class="mr-3" />
            </template>
         </v-list-item>
      </template>
   </v-select>
</template>
