<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import TextImageCarousel from '@/templates/bari/components/TextImageCarousel.vue';
// <!-- CMS: Second section data -->
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    carousel: {
        interval: 10000,
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
    <section class="h-screen bg-bari-light px-7 py-10 flex flex-col items-center ">
        <header-text class="text-bari-dark text-center">{{ data.title }}</header-text>
        <sub-header-text class="text-bari-dark text-center pt-2">{{ data.subtitle }}</sub-header-text>
        <text-image-carousel class="h-[90%]" :data="data.carousel"/>
    </section>
</template>