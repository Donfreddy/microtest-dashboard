<template>
  <div class="">
    <div class="space-y-3">
      <div>
        <h2 class="text-2xl font-semibold leading-tight">Users</h2>
      </div>

      <!--      -->
      <div class="flex flex-col my-2 sm:flex-row">
        <div class="flex flex-row mb-1 sm:mb-0">
          <div class="relative">
            <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
            <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
          <div class="relative">
            <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="relative block">
                    <span class="absolute inset-y-0 left-0 flex items-center h-full pl-2">
                        <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
          <input placeholder="Search"
                 class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"/>
        </div>
      </div>

      <!--    Users table-->
      <div class="w-full  bg-white shadow-lg rounded-lg border border-gray-200">
        <div class="overflow-x-auto">
          <table class="table-auto w-full" aria-label="user table">
            <thead class="text-xs  text-left  font-semibold uppercase text-gray-400 bg-gray-100">
            <tr>
              <th class="px-4 py-3 tracking-wider">
                Name
              </th>
              <th class="px-4 py-3 tracking-wider">
                Email
              </th>
              <th class="px-4 py-3 tracking-wider">
                Balance
              </th>
              <th class="px-4 py-3 tracking-wider">
                Phone
              </th>
              <th class="px-4 py-3 tracking-wider text-center">
                Status
              </th>
              <th class="px-4 py-3 text-center tracking-wider">
                Actions
              </th>
            </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
            <tr v-for="(user, index) in users" :key="index">
              <td class="px-4 py-3 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img class="rounded-full"
                         src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                         width="40" height="40" alt="Alex Shatov">
                  </div>
                  <div class="font-medium text-gray-800">{{ user.name }}</div>
                </div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap">
                <div class="text-left">{{ user.email }}</div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap">
                <div class="text-left font-medium">{{ user.balance }}</div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap">
                <div class=" text-left">{{ user.phone }}</div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap">
                <div class="text-center">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-600 leading-tight">
                    <span class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative text-sm">Active</span>
									</span>
                </div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-center">
                <div class="flex item-center justify-center space-x-3">
                  <div
                      @click="logUser"
                      class="text-indigo-600 cursor-pointer hover:text-indigo-500">View
                  </div>
                  <div
                      @click="logUser"
                      class="text-indigo-600 cursor-pointer hover:text-indigo-500">Edit
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
    <div
        class="flex flex-col items-center pt-5 xs:flex-row xs:justify-between ">
                        <span class="text-xs text-gray-900 xs:text-sm">
                            Showing 1 to 4 of 50 Entries
                        </span>
      <div class="inline-flex mt-2 xs:mt-0">
        <button
            class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400">
          Prev
        </button>
        <button
            class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400">
          Next
        </button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent, ref} from 'vue';
import {db} from "@/firebase/config";
import {collection, getDocs} from "firebase/firestore";

interface IUser {
  key: string,
  name: string,
  email: string,
  balance: string,
  phone: string,
  status: string,
}

export default defineComponent({
  async setup() {
    let users = ref<IUser[]>([]);
    const querySnapshot = await getDocs(collection(db, "users"));
    users.value = [];
    querySnapshot.docChanges().forEach((change) => {
      users.value.push({
        key: change.doc.id,
        name: change.doc.data().name,
        email: change.doc.data().email,
        balance: change.doc.data().balance,
        phone: change.doc.data().phone_number,
        status: 'Active'
      })
    });
    return {
      users,
    };
  },
  methods: {
    logUser: function () {
      console.log("Hello user")
    }
  }
});
</script>
