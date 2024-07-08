<script setup lang="ts">
import VerticalNavbarLogo from "./VerticalNavbarLogo.vue";
import TabIcon from "./TabIcon.vue";
import tabs from "@/navigation/admin/vertical/index";
import useNavigation from "@/composable/useNavigation";

const { route, navigateTo } = useNavigation();
tabs.sort((a, b) => a.position - b.position);
</script>

<template>
    <div class="w-[140px] fixed h-screen px-3 text-[15px] items-center">
        <vertical-navbar-logo />
        <ul class="h-full flex flex-col justify-center items-center">
            <li v-for="tab in tabs">
                <tab-icon
                    :data="tab"
                    :current-route="route"
                    @change-route="navigateTo"/>
            </li>
        </ul>
    </div>
</template>
