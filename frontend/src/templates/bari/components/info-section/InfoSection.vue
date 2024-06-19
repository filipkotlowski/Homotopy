<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import Carousel from '@/templates/bari/components/Carousel.vue';
import InfoComponent from '@/templates/bari/components/info-section/InfoComponent.vue';
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    styles: {
        sectionBackground: 'bg-[#FCF8F8]',
        headerColor: 'text-[#071630]',
        subHeaderColor: 'text-[#071630]'
    },
    info: {
        interval: 10000,
        carouselColor: 'bg-[#EEF8FF]',
        items: [
            {
                title: 'Lorem ipsum 1',
                image: 'https://placehold.co/800x600',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ut  massa ac scelerisque. Vivamus viverra orci est, ac consectetur diam  tincidunt non. Sed mollis vulputate fringilla. Vestibulum vestibulum  lacinia fringilla. Quisque commodo congue enim in vestibulum. Morbi  maximus commodo dictum. In scelerisque risus nulla, non pharetra nunc  rhoncus sit amet. Pellentesque laoreet tortor dolor, non aliquet arcu  pretium at. Suspendisse dictum, risus sed commodo rhoncus, magna erat  ornare quam, id lobortis lorem mauris quis elit. Curabitur pulvinar arcu  eget laoreet viverra.Nulla vel diam facilisis, ullamcorper dui sit amet, sodales risus.  Curabitur finibus massa vitae nulla finibus, eu ullamcorper risus  rutrum. Donec varius hendrerit ipsum, et venenatis est viverra nec.  Nullam vel lacinia odio, non fringilla quam. Vivamus sed lacinia dolor,  eget pulvinar felis. ',
            },
            {
                title: 'Lorem ipsum 2',
                image: 'https://placehold.co/800x600',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ut  massa ac scelerisque. Vivamus viverra orci est, ac consectetur diam  tincidunt non. Sed mollis vulputate fringilla. Vestibulum vestibulum  lacinia fringilla. Quisque commodo congue enim in vestibulum. Morbi  maximus commodo dictum. In scelerisque risus nulla, non pharetra nunc  rhoncus sit amet. Pellentesque laoreet tortor dolor, non aliquet arcu  pretium at. Suspendisse dictum, risus sed commodo rhoncus, magna erat  ornare quam, id lobortis lorem mauris quis elit. Curabitur pulvinar arcu  eget laoreet viverra.Nulla vel diam facilisis, ullamcorper dui sit amet, sodales risus.  Curabitur finibus massa vitae nulla finibus, eu ullamcorper risus  rutrum. Donec varius hendrerit ipsum, et venenatis est viverra nec.  Nullam vel lacinia odio, non fringilla quam. Vivamus sed lacinia dolor,  eget pulvinar felis. ',
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
            :class="data.styles.subHeaderColor"
            class="text-center md:mb-5">{{ data.subtitle }}</sub-header-text>
        <carousel v-if="mobile" class="h-[90%]" :data="data.info"/>
        <info-component v-else :data="data.info"/>
    </section>
</template>