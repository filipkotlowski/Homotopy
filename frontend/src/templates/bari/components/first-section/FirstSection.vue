<script setup lang="ts">
import Navbar from '@/templates/bari/components/first-section/Navbar.vue'
import HeaderText from '@/templates/bari/components/HeaderText.vue'
import BasicButton from '@/templates/bari/components/BasicButton.vue'
</script>

<template>
    <section class="h-screen bg-bari-primary px-7 py-10">
        <div class="h-screen flex justify-between items-center">
            <navbar />
            <div class="mt-10 h-[80%] w-full flex flex-col justify-center">
                <div class="w-2/3 flex flex-col gap-[52px]">
                    <!-- CMS: Hero section title -->
                    <header-text class="text-bari-accent">Lorem Ipsum is simply dummy text</header-text>
                    <!-- CMS: Hero section subtitle -->
                    <span class="text-bari-accent">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    <!-- CMS: Hero section button -->
                    <basic-button class="text-bari-primary bg-bari-light">lorem ipsum</basic-button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
