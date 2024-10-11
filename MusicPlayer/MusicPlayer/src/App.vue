<template>
  <AppHeader></AppHeader>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <Component :is="Component"></Component>
    </transition>
  </RouterView>
  <AppMusicPlayer></AppMusicPlayer>
  <AppAuth></AppAuth>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppAuth from "@/components/AppAuth.vue";
import { mapWritableState} from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase.js";
import MusicPlayer from "@/components/MusicPlayer.vue";

export default {
  name: "App",
  components: {
    AppHeader: AppHeader,
    AppAuth: AppAuth,
    AppMusicPlayer: MusicPlayer,
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
<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>