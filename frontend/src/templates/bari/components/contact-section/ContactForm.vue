<script setup>
import { defineProps } from 'vue';
import BasicButton from '@/templates/bari/components/BasicButton.vue'

const props = defineProps({
    data: Object,
});

const getComponentType = (type) => {
  return type === 'textarea' ? 'v-textarea' : 'v-text-field';
};
</script>

<template>
    <v-form fast-fail @submit.prevent class="w-[90%] my-10">
        <component
            v-for="item in data.items"
            :key="item.key"
            :is="getComponentType(item.type)"
            :rules="item.rules"
            :label="item.label"
            :type="item.type"
            rounded="0"
            variant="outlined"
        ></component>
        <div class="flex justify-end my-5">
            <basic-button 
                :class="[data.styles.buttonColor, data.styles.buttonTextColor]">
                {{ data.submitButton }}
            </basic-button>
        </div>
    </v-form>
</template>