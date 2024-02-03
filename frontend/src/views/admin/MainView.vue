<script setup lang="ts">
import VerticalNavbar from "@/components/navigation/vertical/VerticalNavbar.vue";
import HorizontalNavbar from "@/components/navigation/horizontal/HorizontalNavbar.vue";
</script>
<template>
    <div class="bg-slate-100">
      <div class="flex" dir="ltr">
        <vertical-navbar />
        <div class="flex-1 ps-[260px]">
          <horizontal-navbar />
          <router-view />
        </div>
      </div>
    </div>
  </template>
