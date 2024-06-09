<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import Carousel from '@/templates/bari/components/Carousel.vue';
import ContactForm from '@/templates/bari/components/contact-section/ContactForm.vue';
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    styles: {
        sectionBackground: 'bg-[#FCF8F8]',
        headerColor: 'text-[#071630]',
        subHeaderColor: 'text-[#071630]',
        dividerColor: '#071630'
    },
    form: {
        submitButton: 'Lorem Ipsum',
        styles: {
            buttonColor: 'bg-[#071630]',
            buttonTextColor: 'text-[#FCF8F8]',
        },
        items: [
            {
                key: 1,
                type: 'text',
                label: 'First Name',
                rules: [
                    value => {
                        if (/[^0-9]/.test(value)) return true
                        return 'First name can not contain digits.'
                    },
                ],
            },
            {
                key: 2,
                type: 'email',
                label: 'E-mail',
                rules: [
                    value => {
                        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                        return emailPattern.test(value) || 'E-mail must be valid.';
                    },
                ],
            },
            {
                key: 3,
                type: 'textarea',
                label: 'Your message',
            },
        ]
    }
}
</script>
<template>
    <section :class="data.styles.sectionBackground" class="h-[150vh] px-7 py-10 flex flex-col items-center ">
        <header-text :class="data.styles.headerColor" class="text-center">{{ data.title }}</header-text>
        <v-divider thickness="2" :color="data.styles.dividerColor" class="border-opacity-100 w-3/4"></v-divider>
        <sub-header-text :class="data.styles.subHeaderColor" class="text-center">{{ data.subtitle }}</sub-header-text>
        <contact-form :data="data.form" />
    </section>
</template>