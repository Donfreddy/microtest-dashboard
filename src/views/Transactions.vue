<template>
  <div class="">
    <div class="space-y-3">
      <div>
        <h2 class="text-2xl font-semibold leading-tight">Transactions</h2>
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
            <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
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
            <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
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
            class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
      </div>

      <!--    Users table-->
      <div class="w-full  bg-white shadow-lg rounded-lg border border-gray-200">
        <div class="overflow-x-auto">
          <table class="table-auto w-full" aria-label="user table">
            <thead class="text-xs  text-left  font-semibold uppercase text-gray-400 bg-gray-100">
              <tr>
                <th class="px-4 py-3 tracking-wider">
                  Transaction ID
                </th>
                <th class="px-4 py-3 tracking-wider">
                  Amount
                </th>
                <th class="px-4 py-3 tracking-wider">
                  Phone
                </th>

                <th class="px-4 py-3 tracking-wider text-center">
                  Type
                </th>
                <th class="px-4 py-3 tracking-wider">
                  Provider
                </th>
                <!-- <th class="px-4 py-3 tracking-wider">
                  User ID
                </th> -->
                <th class="px-4 py-3 tracking-wider text-center">
                  Status
                </th>
                <th class="px-4 py-3 tracking-wider">
                  Date
                </th>
                <th class="px-4 py-3 text-center tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
              <tr v-for="(transaction, index) in transactions" :key="index">
                <td class="px-4 py-3 whitespace-nowrap">
                  <div class="font-medium text-gray-800">{{ generateId() }}</div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <div class="text-left">{{ transaction.amount }}</div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <div class="text-left font-medium">{{ transaction.phone }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div :class="[transaction.type === 'cashint' ? 'text-green-500' : 'text-red-500']" class=" text-left">
                    {{ getType(transaction.type) }}
                  </div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <div class=" text-left">{{ transaction.provider }}</div>
                </td>
                <!--                
                <td class="px-4 py-3 whitespace-nowrap">
                  <div class=" text-left">{{ transaction.userId }}</div>
                </td> -->
                <td class="px-4 py-3 whitespace-nowrap tex">
                  <div class="text-center">
                    <span
                      :class="[transaction.status === 'success' ? 'text-green-600' : transaction.status === 'pending' ? 'text-yellow-600' : 'text-red-600']"
                      class="relative inline-block px-3 py-1 font-semibold leading-tight">
                      <span
                        :class="[transaction.status === 'success' ? 'bg-green-200' : transaction.status === 'pending' ? 'bg-yellow-200' : 'bg-red-200']"
                        class="absolute inset-0 opacity-50 rounded-full"></span>
                      <span class="relative text-sm">{{ transaction.status }}</span>
                    </span>
                  </div>
                </td>

                <td class="px-4 py-3 whitespace-nowrap">
                  <div class=" text-left">{{ getHumanDate(transaction.date) }}</div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                  <div class="flex items-center justify-between">
                    <div
                      :class="[transaction.manualConfirm && transaction.status === 'pending' ? 'cursor-pointer hover:text-indigo-500' : 'cursor-not-allowed opacity-50']"
                      class="text-indigo-600">Approve</div>
                    <div
                      :class="[transaction.manualConfirm && transaction.status === 'pending' ? 'cursor-pointer hover:text-red-500' : 'cursor-not-allowed opacity-50']"
                      class="text-red-600">Reject</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
    <div class="flex flex-col items-center pt-5 xs:flex-row xs:justify-between ">
      <span class="text-xs text-gray-900 xs:text-sm">
        Showing 1 to 4 of 50 Entries
      </span>
      <div class="inline-flex mt-2 xs:mt-0">
        <button class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400">
          Prev
        </button>
        <button class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400">
          Next
        </button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import moment from 'moment';
import { db } from "@/firebase/config";
import { collection, getDocs, Timestamp } from "firebase/firestore";


interface ITransaction {
  transactionId: string,
  amount: number,
  provider: string,
  providerLogo?: string,
  phone: number,
  manualConfirm: boolean,
  userId?: string,
  type: string,
  status: string,
  date: Timestamp,
}


export default defineComponent({
  async setup() {
    let transactions = ref<ITransaction[]>([]);
    const querySnapshot = await getDocs(collection(db, "transactions"));
    transactions.value = [];
    querySnapshot.docChanges().forEach((change) => {
      transactions.value.push({
        transactionId: change.doc.id,
        amount: change.doc.data().amount,
        phone: change.doc.data().phone,
        provider: change.doc.data().provider,
        status: change.doc.data().status,
        userId: change.doc.data().userId,
        manualConfirm: change.doc.data().manual_confirm,
        type: change.doc.data().type,
        date: change.doc.data().date,
      })
    });
    transactions.value.sort((t1, t2) => t2.date.toDate().getTime() - t1.date.toDate().getTime());
    return {
      transactions,
    };
  },
  methods: {
    getHumanDate: function (date: Timestamp) {
      return moment(date.toDate()).format('YYYY-MM-DD, hh:mm:ss a');
    },
    getType: function name(type: string) {
      switch (type) {
        case 'cashint':
          return 'Cash In'
        default:
          return 'Cash Out'
      }
    },
    generateId: function () {
      var digits = '0123456789';
      let Id = '';
      for (let i = 0; i < 4; i++) {
        Id += digits[Math.floor(Math.random() * 10)];
      }
      return Id;
    }
  }
});
</script>
