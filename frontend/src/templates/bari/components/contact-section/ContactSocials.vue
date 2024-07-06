<script setup>
import { defineProps } from 'vue';
import SocialButton from '@/templates/bari/components/contact-section/SocialButton.vue';

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const props = defineProps({
    data: Object
});

</script>
<template>
    <div class="flex gap-14" :class="mobile ? 'mt-14' : ''">
        <social-button 
            v-for="item in data.items"
            :social="item"
            :styles="data.styles"
            />
    </div>
</template>