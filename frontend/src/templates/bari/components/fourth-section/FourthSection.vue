<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import Carousel from '@/templates/bari/components/Carousel.vue';
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    styles: {
        sectionBackground: 'bg-[#FCF8F8]',
        headerColor: 'text-[#071630]',
        subHeaderColor: 'text-[#071630]'
    },
    carousel: {
        interval: 10000,
        carouselColor: 'bg-[#7AC5FF]',
        items: [
            {
                title: 'Lorem ipsum 1',
                image: 'https://placehold.co/400x500',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {
                title: 'Lorem ipsum 2',
                image: 'https://placehold.co/400x500',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
        ]
    }
}
</script>
<template>
    <section 
        :class="data.styles.sectionBackground"
        class="h-screen px-7 py-10 flex flex-col items-center ">
        <header-text 
            :class="data.styles.headerColor"
            class="text-center">{{ data.title }}</header-text>
        <sub-header-text 
            :class="data.styles.headerColor"
            class="text-center pt-2">{{ data.subtitle }}</sub-header-text>
        <carousel class="h-[90%]" :data="data.carousel" :show-long-text="false"/>
    </section>
</template>