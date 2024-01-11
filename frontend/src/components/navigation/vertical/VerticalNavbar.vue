<script setup lang="ts">
import VerticalNavbarTab from './VerticalNavbarTab.vue';
import tabs from '../../../navigation/vertical/index'
</script>

<template>
    <ul>
        <li v-for="tab in tabs">
            <vertical-navbar-tab :data="tab"/>
        </li>

    </ul>
</template>