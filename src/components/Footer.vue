<template>
  <div class="bg-white border-t border-gray-200">
    <div class="container px-6 py-2 mx-auto text-sm">
      <div class="flex text-gray-600 justify-center sm:justify-start">
        <p>&copy; {{ year }} Micotest. All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Footer',
  data: () => ({
    year: new Date().getFullYear(),
  }),
});
</script>
