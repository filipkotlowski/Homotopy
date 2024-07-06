<script setup>
import HeaderText from '@/templates/bari/components/HeaderText.vue';
import SubHeaderText from '@/templates/bari/components/SubHeaderText.vue';
import Carousel from '@/templates/bari/components/Carousel.vue';
import ContactForm from '@/templates/bari/components/contact-section/ContactForm.vue';
import ContactMap from '@/templates/bari/components/contact-section/ContactMap.vue';
import ContactSocials from '@/templates/bari/components/contact-section/ContactSocials.vue';
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
    },
    map: {
        width: '350',
        height: '350',
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.0284631393724!2d17.91605607693218!3d50.6822966706428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47105253b025b681%3A0x29318959b1f239b3!2s46-020%20Opole!5e0!3m2!1sen!2spl!4v1717933338024!5m2!1sen!2spl'
    },
    socials: {
        styles: {
            buttonColor: 'bg-[#071630]',
            buttonTextColor: '#FCF8F8',
        },
        items: [
            {
                icon: 'mdi-facebook',
                url: 'https://facebook.com'
            },
            {
                icon: 'mdi-instagram',
                url: 'https://instagram.com'
            },
            {
                icon: 'mdi-twitter',
                url: 'https://x.com'
            },
        ]
    },
}
</script>
<template>
    <section :class="data.styles.sectionBackground" class="h-[110vh] px-7 py-10 flex flex-col items-center md:h-[75vh] md:pb-5">
        <div class="md:flex md:flex-row md:w-full md:items-center md:justify-evenly">
            <div>
                <header-text :class="data.styles.headerColor" class="text-center">{{ data.title }}</header-text>
                <v-divider thickness="2" :color="data.styles.dividerColor" class="border-opacity-100 w-3/4"></v-divider>
                <sub-header-text :class="data.styles.subHeaderColor" class="text-center">{{ data.subtitle }}</sub-header-text>
                <contact-form :data="data.form" />
            </div>
            <contact-map :data="data.map" />
        </div>
        <contact-socials :data="data.socials" />
    </section>
</template>