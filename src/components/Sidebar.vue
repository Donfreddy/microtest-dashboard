<template>
  <div class="flex">
    <!-- Backdrop -->
    <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-25 lg:hidden"></div>
    <!-- End Backdrop -->

    <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0  z-30 w-64 overflow-y-auto transition duration-300 transform bg-black text-gray-900 lg:translate-x-0 lg:static lg:inset-0">
      <div class="flex items-center justify-center mt-20">
        <div class="w-2/3 text-center font-bold">
          <a href="#" class="text-2xl font-bold flex items-center lg:ml-2.5">
            <img src="https://demo.themesberg.com/windster/images/logo.svg" class="h-6 mr-2" alt="Microtest Logo">
            <span class="self-center text-white whitespace-nowrap">Microtest</span>
          </a>
        </div>
      </div>

      <nav class="mt-20">
        <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]" to="/">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
              fill="currentColor" />
            <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
          </svg>

          <span class="mx-4">Dashboard</span>
        </router-link>
        <router-link class="flex items-center px-6 py-2 mt-2 duration-200 border-l-4"
          :class="[$route.name === 'Users' ? activeClass : inactiveClass]" to="/users">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>

          <span class="mx-4">Users</span>
        </router-link>
        <router-link class="flex items-center px-6 py-2 mt-2 duration-200 border-l-4"
          :class="[$route.name === 'AddUser' ? activeClass : inactiveClass]" to="/add-user">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>

          <span class="mx-4">Add User</span>
        </router-link>
        <router-link class="flex items-center px-6 py-2 mt-2 duration-200 border-l-4"
          :class="[$route.name === 'Transactions' ? activeClass : inactiveClass]" to="/transactions">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>

          <span class="mx-4">Transactions</span>
        </router-link>
        <router-link class="flex items-center px-6 py-2 mt-2 duration-200 border-l-4"
          :class="[$route.name === 'Settings' ? activeClass : inactiveClass]" to="/settings">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd" />
          </svg>

          <span class="mx-4">Settings</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSidebar } from '@/hooks/useSidebar';

export default defineComponent({
  setup() {
    const { isOpen } = useSidebar();
    const activeClass = ref(
      'bg-gray-600 bg-opacity-25 text-white border-white',
    );
    const inactiveClass = ref(
      'border-black text-gray-600 hover:bg-gray-600 hover:bg-opacity-25 transition-colors',
    );

    return {
      isOpen,
      activeClass,
      inactiveClass,
    };
  },
});
</script>
