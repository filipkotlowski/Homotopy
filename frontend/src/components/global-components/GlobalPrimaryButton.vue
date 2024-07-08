<script setup type="ts">
const props = defineProps({
    text: String,
});
</script>
<template>
    <v-btn type="submit" :text="props.text" density="default" color="white"/>
</template>