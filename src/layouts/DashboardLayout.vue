<template>
  <div class="flex h-screen text-base bg-gray-200 font-roboto">
    <Sidebar/>
    <div class="flex flex-col flex-1 overflow-hidden">
      <Header/>
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container px-6 py-8 mx-auto">
          <slot/>
        </div>
      </main>
     <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default defineComponent({
  components: {
    Sidebar,
    Header,
    Footer,
  },
});
</script>
