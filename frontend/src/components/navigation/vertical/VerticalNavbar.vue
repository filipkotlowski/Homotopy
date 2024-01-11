<script setup lang="ts">
import VerticalNavbarTab from './VerticalNavbarTab.vue';
import VerticalNavbarLogo from './VerticalNavbarLogo.vue';
import tabs from '../../../navigation/vertical/index'
</script>

<template>
    <div class="border-r-2 border-r-gray-200 w-56 h-screen px-3">
        <vertical-navbar-logo />
        <ul>
            <li 
            v-for="tab in tabs"
            >
                <vertical-navbar-tab :data="tab"/>
            </li>
            
        </ul>
    </div>
</template>