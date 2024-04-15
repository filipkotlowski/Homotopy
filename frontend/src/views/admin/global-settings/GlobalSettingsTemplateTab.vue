<script setup lang="ts">
import GlobalPrimaryButton from "@/components/global-components/GlobalPrimaryButton.vue"

</script>

<template>
    <v-form>
        <div class="flex flex-wrap justify-around items-center">
            <v-card class="w-[400px] h-[300px] hover:shadow-lg hover:shadow-primary hover:cursor-pointer mb-5"
                v-for="n in 5">
                <v-img height="200" cover src="https://placehold.co/400x300" />
                <v-divider class="border-opacity-100" thickness="5" color="primary" />
                <div class="h-[100px] flex flex-col">
                    <span class="py-2">Template title #{{ n }}</span>
                    <global-primary-button text="Set as active" class="mx-10" />
                </div>
            </v-card>
        </div>
    </v-form>
</template>
