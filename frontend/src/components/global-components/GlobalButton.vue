<script setup type="ts">
const props = defineProps({
    text: String,
});
</script>
<template>
    
    <v-btn type="submit" block :text="props.text"/>
</template>