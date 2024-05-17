<template>
  <v-card>
    <v-layout>
      <v-app-bar color="bari-primary" :elevation="0" class="px-8 py-10">

        <!-- CMS: Brand name -->
        <v-toolbar-title><span class="text-bari-light text-[40px] leading-10">Bari</span></v-toolbar-title>

      </v-app-bar>

      <v-bottom-navigation :elevation="0" grow bg-color="bari-primary" class="text-bari-light">
        <v-btn :value="item.name" v-for="item in items">
          <v-icon>mdi-history</v-icon>

          <span>{{ item.name  }}</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-card>
</template>
<script setup>
const items = [
  {
    title: 'Foo',
    name: 'foo',
  },
  {
    title: 'Bar',
    name: 'bar',
  },
  {
    title: 'Fizz',
    name: 'fizz',
  },
  {
    title: 'Buzz',
    name: 'buzz',
  },
];

</script>
