<template>
  <div class="">
    <h1 class="text-xl">Add User</h1>

    <!--    form-->
    <div class="w-full max-w-sm ">
      <form class="mt-8 " @submit.prevent="handleSubmit">
        <label class="block">
          <span class="text-sm text-gray-700">Name</span>
          <input type="text"
            class="block bg-gray-50 w-full mt-1 rounded-md  border border-gray-300 px-3  py-2 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors sm:text-sm"
            placeholder="Name" v-model="name" />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Email address</span>
          <input type="email"
            class="block bg-gray-50 w-full mt-1 rounded-md  border border-gray-300 px-3  py-2 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors sm:text-sm"
            placeholder="Email address" v-model="email2" />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input type="password"
            class="block bg-gray-50 w-full mt-1 rounded-md border border-gray-300 px-3  py-2 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors sm:text-sm"
            placeholder="Password" v-model="password2" />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Phone</span>
          <input type="tel"
            class="block bg-gray-50 w-full mt-1 rounded-md  border border-gray-300 px-3  py-2 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors sm:text-sm"
            placeholder="Phone" v-model="phone" />
        </label>

        <div class="mt-6">
          <button type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md  hover:bg-indigo-500">
            <div v-if="isLoading">
              <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor" />
              </svg>
            </div>
            <div v-else>Add User</div>
          </button>
        </div>
      </form>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "@/store";
import { ActionTypes } from "@/store/action-types";
import {useToast} from "vue-toastification";

export default defineComponent({
  setup() {
    const name = ref('');
    const email2 = ref('');
    const password2 = ref('');
    const phone = ref('');
    const isLoading = ref(false)

    const store = useStore()
    const router = useRouter();
    const toast = useToast();

    const handleSubmit = async () => {
      isLoading.value = true;
      try {
        store.dispatch(ActionTypes.ADD_USER, {
          name: name.value,
          email: email2.value,
          password: password2.value,
          phone: phone.value
        })
        isLoading.value = false;
        toast.success('User was successfully added.');
        await router.push('/users');
      } catch (err) {
        isLoading.value = false;
        toast.error(err.message ?? err.code);
      }
    }


    return {
      name,
      email2,
      password2,
      phone,
      isLoading,
      handleSubmit,
    };
  },
});
</script>
