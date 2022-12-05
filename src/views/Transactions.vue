<template>
  <div class="">
    <h1 class="text-blue-800 text-xl">This is a transactions page.</h1>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useRouter} from 'vue-router';

const defaultLayout = 'default';

export default defineComponent({
  setup() {
    const {currentRoute} = useRouter();

    console.log("This is the current route");
    console.log(currentRoute);

    const layout = computed(
        () => `${currentRoute.value.meta.layout || defaultLayout}-layout`,
    );

    console.log(layout.value)

    return {
      layout,
    };
  },
});
</script>
