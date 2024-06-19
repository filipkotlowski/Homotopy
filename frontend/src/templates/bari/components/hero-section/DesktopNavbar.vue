<script setup>

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <menu class="flex justify-between w-4/5">
        <img :src="data.logo" />
        <nav class="w-1/3">
            <ol class="flex justify-around">
                <li v-for="item in data.items" :class="data.styles.menuTextColor" :key="item.title">{{ item.title }}</li>
            </ol>
        </nav>
    </menu>
</template>