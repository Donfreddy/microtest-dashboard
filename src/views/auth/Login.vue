<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700"
        >Microtest Dashboard</span
        >
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
                class="block text-sm text-indigo-700 fontme hover:underline"
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
          <div v-if="error">{{ error }}</div>
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