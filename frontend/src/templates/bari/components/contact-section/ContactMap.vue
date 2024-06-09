<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: Object,
});

</script>
<template>
    <iframe
        :src="data.link"
        :width="data.width" :height="data.height" style="border:0;" allowfullscreen="false" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>