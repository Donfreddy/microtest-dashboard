<template>
  <div class="home">
    <div class="text-4xl font-bold text-green-500">Test</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { auth } from "@/firebase/config";

export default defineComponent({
  name: "Home",
  components: {
  },
  setup() {

    const store = useStore()
    const router = useRouter()

    auth.onAuthStateChanged(user => {
      store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      return store.getters.user;
    });

    const signOut = async () => {
      await store.dispatch('logOut')
      router.push('/')
    }

    return { user, signOut }
  }

});
</script>
