<template>
  <div class="flex h-screen text-base bg-gray-100 font-roboto">
    <Sidebar/>
    <div class="flex flex-col flex-1 overflow-hidden">
      <Header/>
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container px-6 py-8 mx-auto">
          <Suspense>
            <slot/>
            <!-- loading state via #fallback slot -->
            <template #fallback>
             <div class="text-gray-900 text-center mt-96">
               Loading...
             </div>
            </template>
          </Suspense>

        </div>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  components: {
    Sidebar,
    Header,
    Footer,
  },
});
</script>
