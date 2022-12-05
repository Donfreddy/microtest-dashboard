<template>
  <div class="">
    <div class="mb-10">
      <h4 class="text-sm font-bold text-gray-600">Welcome,</h4>
      <h1 class="text-2xl font-bold text-indigo-900">Don freddy</h1>
    </div>
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <div
          class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
      >
        <div class="p-4 flex items-center">
          <div
              class="p-3 rounded-full text-yellow-500 bg-yellow-100 mr-4"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
              <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Users
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              6389
            </p>
          </div>
        </div>
      </div>
      <div
          class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white"
      >
        <div class="p-4 flex items-center">
          <div
              class="p-3 rounded-full text-green-500 bg-green-100  mr-4"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
              <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Revenue
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              46,760.00 XAF
            </p>
          </div>
        </div>
      </div>
      <div
          class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
      >
        <div class="p-4 flex items-center">
          <div
              class="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Transactions
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              376
            </p>
          </div>
        </div>
      </div>
      <div
          class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
      >
        <div class="p-4 flex items-center">
          <div
              class="p-3 rounded-full text-pink-500 bg-pink-100 mr-4"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
              <path
                  fill-rule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Pending contacts
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">35</p>
          </div>
        </div>
      </div>
    </div>

    <!--    Users table-->
    <div class="w-full bg-white shadow-lg rounded-sm border border-gray-200">
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Last Transactions</h2>
      </header>
      <div class="p-3">
        <div class="overflow-x-auto">
          <table class="table-auto w-full" aria-label="user table">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Transaction ID</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Amount</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Phone</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold  text-left">Provider</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold  text-left">Status</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold  text-left">Type</div>
              </th>
            </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
            <tr>
              <td class="p-2 whitespace-nowrap">
                <div class="font-medium text-gray-800">FG5GFDS48RAS</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">100</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">6xxxxxxxxx</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">Orange</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-600 leading-tight">
                    <span class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative text-sm">Paid</span>
									</span>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class=" text-left text-red-500">Cash Out</div>
              </td>
            </tr>   <tr>
              <td class="p-2 whitespace-nowrap">
                <div class="font-medium text-gray-800">SD534DFS485SD</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">250</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">6xxxxxxxxx</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">MTN</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-600 leading-tight">
                    <span class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative text-sm">Paid</span>
									</span>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class=" text-left text-green-500">Cash In</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
