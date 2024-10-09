<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
  <AppAuth></AppAuth>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppAuth from "@/components/AppAuth.vue";
import { mapWritableState} from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase.js";

export default {
  name: "App",
  components: {
    AppHeader: AppHeader,
    AppAuth: AppAuth,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    console.log("created new app");
    if (auth.currentUser) {
      console.log('user was already authed');
      this.userLoggedIn = true;
    }
  }
};
</script>