<template>
  <div class="flex items-center w-screen h-screen bg-gray-100">
    <div class="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
      <div class="max-w-">
        <div class="text-5xl font-bold font-dark">404</div>
        <p class="mb-8 text-2xl font-light leading-normal md:text-3xl">
          Sorry we couldn't find this page.
        </p>
        <router-link to="/dashboard"
          class="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700">
          back to homepage
        </router-link>
      </div>
    </div>
  </div>
</template>