<script setup lang="ts">
import HeaderText from '@/templates/bari/components/HeaderText.vue'
import BasicButton from '@/templates/bari/components/BasicButton.vue'

// <!-- CMS: First section data -->
const data = {
    title: 'Section title',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    button: 'lorem ipsum',
    image: 'https://placehold.co/378x270'
}
</script>

<template>
    <section class="h-screen bg-bari-primary px-7 py-10">
            <div class="h-screen flex justify-between items-center">
                <div class="mt-10 h-[80%] w-full flex align-center gap-[20px]">
                    <div class="w-2/3 flex flex-col gap-[52px]">
                        <header-text class="text-bari-accent drop-shadow-primary">{{ data.title }}</header-text>
                        <span class="text-bari-accent font-GelasioItalic">{{ data.subtitle }}</span>
                        <basic-button class="text-bari-primary bg-bari-light">{{data.button}}</basic-button>
                    </div>
                    <div class="w-1/3 flex ">
                        <img class="ml-9 object-cover object-left h-[378px] w-[147px] border-[9px] border-solid border-bari-light drop-shadow-primary" :src="data.image" />
                    </div>
                </div>
            </div>
    </section>
</template>

<style scoped></style>
