<script setup lang="ts">
import HeaderText from '@/templates/bari/components/HeaderText.vue'
import BasicButton from '@/templates/bari/components/BasicButton.vue'

const data = {
    title: 'Section title is simply dummy text',
    subtitle: 'Section subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    button: 'lorem ipsum',
    image: 'https://placehold.co/500x700',
    styles: {
        sectionBackground: 'bg-[#7AC5FF]',
        headerColor: 'text-[#EEF8FF]',
        subHeaderColor: 'text-[#EEF8FF]',
        buttonColor: 'bg-[#FCF8F8]',
        buttonTextColor: 'text-[#7AC5FF]',
        imageBorderColor: 'border-[#FCF8F8]'
    }
}
</script>

<template>
    <section :class="data.styles.sectionBackground" class="h-screen px-7 py-10 md:flex md:justify-center">
        <div class="h-screen flex justify-between items-center md:w-4/5">
            <div class="w-full flex align-center gap-[20px]">
                <div class="w-2/3 flex flex-col gap-[52px]">
                    <header-text 
                        :class="data.styles.headerColor" 
                        class="drop-shadow-primary md:!text-[50px]">{{ data.title}}</header-text>
                    <span :class="data.styles.subHeaderColor" class="font-GelasioItalic md:!text-[20px]">{{ data.subtitle }}</span>
                    <basic-button
                        :class="[data.styles.buttonColor, data.styles.buttonTextColor]">{{ data.button }}</basic-button>
                </div>
                <div class="w-1/2 flex ">
                    <img 
                        :class="data.styles.imageBorderColor"
                        class="object-cover object-left h-[428px] w-[207px] border-[9px] border-r-0 border-solid drop-shadow-primary max-[580px]:ml-7 sm:w-[400px] sm:h-[700px] sm:border-r-[9px] sm:object-center min-[580px]:!ml-11"
                        :src="data.image" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
