<script setup type="ts">
const props = defineProps({
    text: String,
    class: String,
});
</script>
<template>
    <v-btn type="submit" :text="props.text" density="default" :class="props.class" />
</template>