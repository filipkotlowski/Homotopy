<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import Counter from '@/templates/bari/components/third-section/Counter.vue';
// <!-- CMS: Second section data -->
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    counter:{
        items:[
            {
                'icon': 'mdi-account',
                'number': 100,
                'description': 'Lorem ipsum is simply dummy text '
            },
            {
                'icon': 'mdi-star',
                'number': 10000,
                'description': 'Lorem ipsum is simply dummy text '
            },
            {
                'icon': 'mdi-paw',
                'number': 5213,
                'description': 'Lorem ipsum is simply dummy text '
            }
        ]
    }
    }
</script>
<template>
    <section class="h-screen bg-bari-dark px-7 py-10 flex flex-col items-center ">
        <!-- CMS: Third section title -->
        <header-text class="text-bari-light text-center">{{ data.title }}</header-text>
        <v-divider thickness="2" color="bari-light" class="border-opacity-100 w-3/4"></v-divider>
        <!-- CMS: Third section subtitle -->
        <sub-header-text class="text-bari-light text-center pt-2">{{ data.subtitle }}</sub-header-text>
        <counter :data="data.counter"/>
    </section>
</template>