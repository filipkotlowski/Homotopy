<script setup lang="ts">
import VerticalSimpleNavbarTab from "./VerticalSimpleNavbarTab.vue";
import VerticalExtendedNavbarTab from "./VerticalExtendedNavbarTab.vue";
import VerticalNavbarLogo from "./VerticalNavbarLogo.vue";
import tabs from "@/navigation/admin/vertical/index";
import useNavigation from "@/composable/useNavigation";

const { route, navigateTo } = useNavigation();
tabs.sort((a, b) => a.position - b.position);
</script>

<template>
    <div class="border-r-2 border-r-gray-200 w-[260px] fixed shadow-lg shadow-gray-200 h-screen px-3 text-[15px] bg-white">
        <vertical-navbar-logo />
        <ul>
            <li v-for="tab in tabs">
                <vertical-simple-navbar-tab
                    v-if="!tab.children"
                    :data="tab"
                    :current-route="route"
                    @change-route="navigateTo"
                />
                <vertical-extended-navbar-tab
                    v-else
                    :data="tab"
                    :current-route="route"
                    @change-route="navigateTo"
                />
            </li>
        </ul>
    </div>
</template>
