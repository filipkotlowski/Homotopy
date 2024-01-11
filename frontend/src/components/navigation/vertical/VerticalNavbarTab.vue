<script setup lang="ts">
import { BasicNavbarTab } from "../../../const/types/NavbarTab"
import type { PropType } from 'vue'

const props = defineProps({
  data: Object as PropType<BasicNavbarTab>
})
</script>

<template>
    <div>
        <span>
            {{ props.data?.title }}
        </span>
    </div>
</template>