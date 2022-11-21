<template>
  <div class="sticky top-0 z-40">
    <div
      class="flex items-center justify-between h-20 px-6 mt-3 ml-4 bg-gray-100 border-b rounded-lg shadow navbar"
    >
      <!-- left navbar -->
      <div class="flex">
        <!-- mobile hamburger -->
        <div class="flex items-center ml-4 mr-4 lg:hidden">
          <button
            class=" hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
            @click="toggleSidebar()"
          >
            <svg
              class="w-5 h-5"
              v-bind:style="{ fill: 'black' }"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <!-- search bar -->
        <div
          class="relative flex items-center justify-between mt-3 ml-3 text-gray-600 "
        >
          <input
            type="search"
            name="serch"
            placeholder="Search products..."
            class="w-full h-10 px-5 text-sm bg-white border rounded-lg xl:w-64 focus:outline-none"
          />
          <button type="submit" class="absolute top-0 right-0 mt-3 mr-4">
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- right navbar -->
      <div class="relative flex items-center text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="mr-3 fill-current hover:text-blue-500"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
          />
        </svg>
        <div class="relative inline-block mr-3 w-15">
          <select
            class="block w-full px-4 py-2 pr-8 leading-tight bg-gray-100 rounded appearance-none hover:border-gray-500 focus:outline-none"
          >
            <option>🇬🇧 EN</option>
            <option>🇫🇷 FR</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none "
          >
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
        <img
          src="/assets/me.JPG"
          alt
          class="w-10 h-10 bg-gray-200 border rounded-full"
          @click="dropDownOpen = !dropDownOpen"
        />
        <strong class="ml-3">Joe Emako</strong>
      </div>
    </div>

    <!-- dropdown menu -->
    <div
      class="absolute right-0 items-center w-auto mt-4 mr-6 text-gray-700 bg-gray-100 border border-t-0 rounded-b-lg shadow content"
      :class="dropDownOpen ? '' : 'hidden'"
    >
      <div class="h-32 text-center card">
        <div class="flex justify-center w-full px-4">
          <div class="relative">
            <img
              src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
              alt
              class="w-10 h-10 mt-4 bg-gray-200 border rounded-full"
            />
          </div>
        </div>
        <div class="px-8 font-black">joe emako</div>
        <div class="px-8 py-2 font-thin">joeemako3@gamil.com</div>
      </div>
      <hr />
      <a
        href="#"
        class="flex items-center w-full h-10 pl-4 rounded-lg cursor-pointer hover:bg-gray-400"
      >
        <svg
          class="w-8 h-8 ml-3 text-blue-500"
          fill="none"
          viewBox="0 0 15 "
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        My profile
      </a>
      <a
        href="#"
        class="flex items-center w-full h-10 pl-4 rounded-lg cursor-pointer hover:bg-gray-400"
      >
        <svg
          class="w-8 h-8 ml-3 text-blue-500"
          fill="none"
          viewBox="0 0 15"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>

        Messsages
      </a>
      <a
        href="#"
        class="flex items-center w-full h-10 pl-4 rounded-lg cursor-pointer hover:bg-gray-400"
      >
        <svg
          class="w-8 h-8 ml-3 text-blue-500"
          fill="none"
          viewBox="0 0 15"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>

        Activity
      </a>
      <a
        href="#"
        class="flex items-center w-full h-10 pl-4 rounded-lg cursor-pointer hover:bg-gray-400"
      >
        <svg
          class="w-8 h-8 ml-3 text-blue-500"
          fill="none"
          viewBox="0 0 15"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        FQR
      </a>
      <a
        href="#"
        class="flex items-center w-full h-10 pl-4 rounded-lg cursor-pointer hover:bg-gray-400"
      >
        <svg
          class="w-8 h-8 ml-3 text-blue-500"
          fill="none"
          viewBox="0 0 15"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        Sign Out
      </a>
    </div>
    <!-- dropdown menu end -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'Navbar',
  computed: {
    ...mapState(['sideBarOpen']),
  },
  setup() {
    const dropdownOpen = ref(false);

    return { dropdownOpen };
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar');
    },
  },
};
</script>
<style></style>
