<script setup lang="ts">
import Navbar from '@/templates/bari/components/first-section/Navbar.vue'
import HeaderText from '@/templates/bari/components/HeaderText.vue'
import BasicButton from '@/templates/bari/components/BasicButton.vue'
</script>

<template>
    <section class="h-screen bg-bari-primary px-7 py-10">
        <div class="h-screen flex justify-between items-center">
            <navbar />
            <div class="mt-10 h-[80%] w-full flex align-center gap-[20px]">
                <div class="w-2/3 flex flex-col gap-[52px]">
                    <!-- CMS: First section title -->
                    <header-text class="text-bari-accent drop-shadow-primary">Lorem Ipsum is simply dummy text</header-text>
                    <!-- CMS: First section subtitle -->
                    <span class="text-bari-accent">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    <!-- CMS: First section button -->
                    <basic-button class="text-bari-primary bg-bari-light">lorem ipsum</basic-button>
                </div>
                <div class="w-1/3 flex ">
                <img class="ml-9 object-cover object-left h-[378px] w-[147px] border-[9px] border-solid border-bari-light drop-shadow-primary" src="https://placehold.co/378x270" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
