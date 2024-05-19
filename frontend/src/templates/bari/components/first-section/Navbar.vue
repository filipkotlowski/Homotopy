<template>
    <v-layout>
      <v-bottom-navigation :elevation="0" grow bg-color="bari-primary" class="text-bari-light" :exact="true">
        <v-btn :value="item.name" v-for="item in items">
          <v-icon>mdi-history</v-icon>

          <span>{{ item.name  }}</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
</template>
<script setup>
// <!-- CMS: Menu items -->
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
