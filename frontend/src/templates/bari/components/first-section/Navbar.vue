<template>
  <v-layout>
    <v-bottom-navigation :elevation="0" grow :bg-color="data.styles.navigationBackground" :class="data.styles.navigationTextColor" :exact="true">
      <v-btn :value="item.name" v-for="item in data.items">      
        <v-icon>mdi-history</v-icon>

        <span>{{ item.name }}</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
<script setup>
const data = {
  styles: {
    navigationBackground: '#7AC5FF',
    navigationTextColor: '!text-[#FCF8F8]',
  },
  items: [
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
  ]
}

</script>
