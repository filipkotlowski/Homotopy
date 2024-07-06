<script setup>
import HeroSection from "@/templates/bari/components/hero-section/HeroSection.vue"
import InfoSection from "@/templates/bari/components/info-section/InfoSection.vue"
import CounterSection from "@/templates/bari/components/counter-section/CounterSection.vue"
import TeamSection from "@/templates/bari/components/team-section/TeamSection.vue"
import GallerySection from "@/templates/bari/components/gallery-section/GallerySection.vue"
import ContactSection from "@/templates/bari/components/contact-section/ContactSection.vue"
import Navbar from '@/templates/bari/components/hero-section/Navbar.vue'

const data = {
    styles: {
        footerBackground: 'bg-[#7AC5FF]',
        footerTextColor: 'text-[#FCF8F8]'
    },
    sections: [
        { name: 'hero-section', component: HeroSection },
        { name: 'info-section', component: InfoSection },
        { name: 'counter-section', component: CounterSection },
        { name: 'team-section', component: TeamSection },
        { name: 'gallery-section', component: GallerySection },
        { name: 'contact-section', component: ContactSection },
    ]
}
</script>

<template>
    <div>
        <navbar />
        <component
            v-for="(item, index) in data.sections"
            :is="item.component"
            :key="index"
        />
        <div class="h-14 flex justify-between p-5 text-sm"
            :class="[data.styles.footerBackground, data.styles.footerTextColor]"><span>Powered by
                Homotopy</span><span>{{ new Date().getFullYear() }}</span></div>
    </div>
</template>

<style scoped></style>
