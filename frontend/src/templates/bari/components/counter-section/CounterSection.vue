<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import Counter from '@/templates/bari/components/counter-section/Counter.vue';
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    styles: {
        sectionBackground: 'bg-[#071630]',
        headerColor: 'text-[#FCF8F8]',
        subHeaderColor: 'text-[#FCF8F8]',
        dividerColor: '#FCF8F8',
    },
    counter: {
        textColor: 'text-[#FCF8F8]',
        items: [
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
    <section :class="data.styles.sectionBackground"
        class="h-[100vh] px-7 py-10 flex flex-col items-center md:flex-row-reverse md:h-[40vh] md:justify-around lg:text-xl">
        <div class="flex flex-col items-center md:items-end md:w-1/3">
            <header-text :class="data.styles.headerColor" class="text-center">{{ data.title }}</header-text>
            <v-divider thickness="2" :color="data.styles.dividerColor" class="border-opacity-100 w-3/4"></v-divider>
            <sub-header-text :class="data.styles.subHeaderColor" class="!text-center pt-2 md:!text-right ">{{ data.subtitle}}</sub-header-text>
        </div>
        <counter :data="data.counter" />
    </section>
</template>