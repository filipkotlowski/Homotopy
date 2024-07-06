<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import Carousel from '@/templates/bari/components/Carousel.vue';
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    styles: {
        sectionBackground: 'bg-[#7AC5FF]',
        headerColor: 'text-[#FCF8F8]',
        subHeaderColor: 'text-[#FCF8F8]'
    },
    flickers:
    [
        'https://placehold.co/366x244',
        'https://placehold.co/366x244',
        'https://placehold.co/366x244',
        'https://placehold.co/366x244',
        'https://placehold.co/366x244',
    ]
}
</script>
<template>
    <section :class="data.styles.sectionBackground" class="h-[50vh] px-7 py-10 flex flex-col items-center ">
        <header-text :class="data.styles.headerColor" class="text-center">{{ data.title }}</header-text>
        <sub-header-text :class="data.styles.subHeaderColor" class="text-center">{{ data.subtitle }}</sub-header-text>
        <Flicking :options="{ circular: true, renderOnlyVisible: true }">
            <img v-for="(flicker, index) in data.flickers" :key="index" :src="flicker" :width="mobile ? '93%' : '33%'" :draggable="mobile ? true : false" class="pr-[4%]" />
        </Flicking>
    </section>
</template>