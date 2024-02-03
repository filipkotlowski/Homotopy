<script setup lang="ts">
import VerticalSimpleNavbarTab from "./VerticalSimpleNavbarTab.vue";
import VerticalExtendedNavbarTab from "./VerticalExtendedNavbarTab.vue";
import VerticalNavbarLogo from "./VerticalNavbarLogo.vue";
import tabs from "@/navigation/vertical/index";
import useNavigation from "@/composable/useNavigation";

const { route } = useNavigation();
console.log('Current Route:', route.value);
</script>

<template>
    <div class="border-r-2 border-r-gray-200 w-64 h-screen px-3 text-[15px] bg-white">
        <vertical-navbar-logo />
        <ul>
            <li v-for="tab in tabs">
                <vertical-simple-navbar-tab
                    v-if="!tab.children"
                    :data="tab"
                    :current-route="route"
                />
                <vertical-extended-navbar-tab
                    v-else
                    :data="tab"
                    :current-route="route"
                />
            </li>
        </ul>
    </div>
</template>
