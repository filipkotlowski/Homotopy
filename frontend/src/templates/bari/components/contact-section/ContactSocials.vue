<script setup>
import { defineProps } from 'vue';
import SocialButton from '@/templates/bari/components/contact-section/SocialButton.vue';

const props = defineProps({
    data: Object
});

</script>
<template>
    <div class="flex gap-14 mt-14">
        <social-button 
            v-for="item in data.items"
            :social="item"
            :styles="data.styles"
            />
    </div>
</template>