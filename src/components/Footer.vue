<template>
  <div class="bg-white border-t-4 border-primary">
    <div class="container px-6 py-2 mx-auto text-sm">
      <div class="flex justify-center sm:justify-start">
        <p>&copy; {{ year }} Mecitech. All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>
