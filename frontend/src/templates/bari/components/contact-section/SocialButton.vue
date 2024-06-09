<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    social: Object,
    styles: Object
});

</script>
<template>
    <div 
        :class="styles.buttonColor"
        class="rotate-45 p-3">
        <v-icon class="-rotate-45" :color="styles.buttonTextColor">{{ social.icon }}</v-icon>
    </div>
</template>