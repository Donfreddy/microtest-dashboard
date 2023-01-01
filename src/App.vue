<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useRouter} from 'vue-router';
import {getAccessToken} from "@/api/transactions.api";

const defaultLayout = 'default';

export default defineComponent({
  async mounted() {
    await getAccessToken();
  },
  setup() {
    const {currentRoute} = useRouter();
    const layout = computed(
        () => `${currentRoute.value.meta.layout || defaultLayout}-layout`,
    );
    return {
      layout,
    };
  },
});
</script>
