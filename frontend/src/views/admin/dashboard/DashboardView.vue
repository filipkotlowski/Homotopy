<script setup lang="ts">
import DashboardCard from "@/views/admin/dashboard/DashboardCard.vue";
const cards = [
  {
    id:1,
    title:"Messages",
    subtitle:"Last week",
    class: 'bg-[#ededed]'
  },
  {
    id:2,
    title:"Subscribers",
    subtitle:"Last week",
    class: 'bg-[#ededed]'
  },
  {
    id:3,
    title:"test3",
    subtitle:"test3",
    class: 'grid row-span-2 bg-[#121116] text-white'
  },
  {
    id:4,
    title:"Subscribers",
    subtitle:"Last week",
    class: 'bg-[#703cdc] text-white'
  },
  {
    id:5,
    title:"Average post likes from facebook",
    subtitle:"Last week",
    class: 'bg-[#ededed]'
  },
  {
    id:6,
    title:"Average post reach from facebook",
    subtitle:"Last week",
    class: 'bg-[#ededed]'
  },
  {
    id:7,
    title:"Average rate from facebook",
    subtitle:"All time",
    class: 'bg-[#ededed]'
  },
  {
    id:8,
    title:"Average rate from Google",
    subtitle:"All time", 
    class: 'bg-[#ededed]'
  },
]
</script>

<template>
  <div>
    <div class="h-[15vh]">
      asd
    </div>
  <div class="h-[65vh] w-full grid grid-cols-3 gap-7 p-7">
    <dashboard-card
      v-for="card in cards"
      :key="card.id"
      :data="card"
      :class="card.class"
    />
  </div>
  </div>
</template>
