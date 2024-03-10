<script setup lang="ts">
import UserImage from "@/components/global-components/UserImage.vue";
</script>
<template>
    <div class="w-[84%] mx-auto my-5 bg-white h-16 rounded-md shadow-lg shadow-gray-200 border-gray-200 border-2 flex justify-end items-center">
        <div class="flex justify-around">
            <vue-feather size="26" type="bell" class="py-2 my-auto" />
            <div class="py-2 px-4">
                <user-image />
            </div>
        </div>
    </div>
</template>
