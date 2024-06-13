<script setup>
import FirstSection from "@/templates/bari/components/first-section/FirstSection.vue"
import SecondSection from "@/templates/bari/components/second-section/SecondSection.vue"
import ThirdSection from "@/templates/bari/components/third-section/ThirdSection.vue"
import FourthSection from "@/templates/bari/components/fourth-section/FourthSection.vue"
import FifthSection from "@/templates/bari/components/fifth-section/FifthSection.vue"
import ContactSection from "@/templates/bari/components/contact-section/ContactSection.vue"
import Navbar from '@/templates/bari/components/first-section/Navbar.vue'

const data = {
    styles: {
        footerBackground: 'bg-[#7AC5FF]',
        footerTextColor: 'text-[#FCF8F8]'
    },
}
</script>

<template>
    <div>
        <navbar />
        <first-section />
        <second-section />
        <third-section />
        <fourth-section />
        <fifth-section />
        <contact-section />
        <div class="mb-14 h-14 flex justify-between p-5 text-sm" :class="[data.styles.footerBackground, data.styles.footerTextColor]"><span>Powered by Homotopy</span><span>{{ new Date().getFullYear() }}</span></div>
    </div>
</template>

<style scoped></style>
