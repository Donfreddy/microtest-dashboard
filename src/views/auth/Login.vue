<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700"
        >Microtest Dashboard</span
        >
      </div>

      <div class="flex bg-red-100 rounded-lg p-4 my-4 text-xs text-red-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
          <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
        </div>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
              type="email"
              class="block w-full mt-1 rounded-md focus:border-indigo-600"
              v-model="email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
              type="password"
              class="block w-full mt-1 rounded-md focus:border-indigo-600"
              v-model="password"
          />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="text-indigo-600 form-checkbox"/>
              <span class="mx-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div>
            <a
                class="block text-sm text-indigo-700 hover:underline"
                href="#"
            >Forgot your password?</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
              type="submit"
              class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md  hover:bg-indigo-500"
          >
            Sign in
          </button>
          <div class="text-xs text-red-500 text-center">je suis une erreur</div>

          <div class="mt-7 text-center text-gray-400 text-xs">
					<span>
                Copyright © 2022
                <a href="https://example.com" rel="" target="_blank" title="Codepen aji" class="text-indigo-500 hover:text-indigo-600 ">Microtest</a></span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';
import {useStore} from 'vuex'
import {useRouter} from 'vue-router';

export default defineComponent({
  name: "Login",
  setup() {
    const email = ref('test@test.com');
    const password = ref('123456');
    const error = ref(null)

    const store = useStore()
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        await router.push('/dashboard');
      } catch (err) {
        error.value = err.message
      }
    }

    return {
      handleSubmit,
      email,
      password,
      error
    };
  },
});
</script>