<script setup lang="ts">
import VerticalNavbar from "@/components/navigation/vertical/VerticalNavbar.vue";
import HorizontalNavbar from "@/components/navigation/horizontal/HorizontalNavbar.vue";
import useNavigation from "@/composable/useNavigation";
import useGlobalSettings from '@/views/admin/global-settings/useGlobalSettings';
const { getAllLanguages } = useGlobalSettings();
const { route } = useNavigation();

getAllLanguages();
</script>
<template>
    <div class="bg-gray-50 min-h-svh" v-if="route.includes('admin/')">
      <div class="flex" dir="ltr">
        <vertical-navbar />
        <div class="flex-1 ps-[260px]">
          <horizontal-navbar />
          <router-view/>
        </div>
      </div>
    </div>
    <router-view  v-else/>
  </template>
