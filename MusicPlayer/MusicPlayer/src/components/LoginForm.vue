<template>
  <div class="text-white text-center font-bold p-4 m-4" v-if="login_show_alert"
  :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>

  <!-- Login Form -->
  <VeeForm
           :validation-schema="loginSchema"
           @submit="login"
  >
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
          name="email"
          type="email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <VeeField
          name="password"
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password"/>
    </div>
    <button
        type="submit"
        :disabled="login_in_submission"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </VeeForm>
</template>
<script>
import { mapActions } from "pinia";
import useUserStore from "@/stores/user";
import {ErrorMessage} from "vee-validate";
export default {
  components: {
    ErrorMessage,
  },
  data() {
    return {
      name: "LoginForm",
      loginSchema: {
        email: "required|email",
        password: "required|min:9|max:100",
      },
      login_in_sub: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue-500",
      login_alert_msg: "Please wait...",
    }
  },
  methods: {
    ...mapActions(useUserStore, ["authenticate"]),
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_msg = 'Please wait!';

      try {
        await this.authenticate(values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = 'bg-red-500';
        this.login_alert_msg = 'Bad credentials';
        return;
      }
      this.login_alert_variant = 'bg-green-500';
      this.login_alert_msg = 'Success!';
      window.location.reload();
    }
  },
}
</script>