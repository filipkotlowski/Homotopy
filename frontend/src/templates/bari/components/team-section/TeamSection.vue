<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import Carousel from '@/templates/bari/components/Carousel.vue';
import TeamComponent from '@/templates/bari/components/team-section/TeamComponent.vue';
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    styles: {
        sectionBackground: 'bg-[#FCF8F8]',
        headerColor: 'text-[#071630]',
        subHeaderColor: 'text-[#071630]',
    },
    team: {
        interval: 10000,
        carouselColor: 'bg-[#7AC5FF]',
        carouselTextColor: 'text-[#FCF8F8]',
        styles:{
            responsiveContentWidth: 'min-[450px]:w-[94%]'
        },
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
            {
                title: 'Lorem ipsum 3',
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
        <carousel v-if="mobile" class="h-[90%]" :data="data.team" :show-long-text="false"/>
        <div v-else class="flex justify-around w-4/5 h-full items-center">
            <team-component :data="data.team"/>
        </div>
    </section>
</template>