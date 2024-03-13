<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { TLanguage } from "@/const/types/Languages";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
   items: Object as PropType<TLanguage>,
   label: String
});

const itemProps = (item: any) => {
   return {
      title: t(item.value.replace('-', '')),
   }
}

</script>

<template>
   <label>
      {{ props.label }}
   </label>
   <v-select :item-props="itemProps" :items="props.items" variant="solo" item-value="value">
      <template v-slot:item="{ props, item }" >
         <v-list-item v-bind="props" :title="item.title" >
            <template v-slot:prepend>
               <img :src="item.raw.photoUrl"  width="50" class="mr-3 border-black border-solid border-[1px]"/>
            </template>
         </v-list-item>
      </template>
   </v-select>
</template>
