<template>
  <div class="input-field">
    <input
      v-model="username"
      type="email"
      class="form-control"
      name="email"
      id="email"
      required
      placeholder="Email"
    />
  </div>
  <div class="input-field">
    <input
      v-model="password"
      type="password"
      class="form-control"
      name="password"
      id="password"
      required
      placeholder="Password"
    />
  </div>
  <button v-on:click="tryLogin(username, password)" class="btn" type="submit">Submit</button>
</template>

<script>
import { ref } from "vue"

export default {
  props: {
    tryLogin: Function,
  },
  setup(){
      let username = ref("")
      let password = ref("")


      return {username, password}
  }
};
</script>

<style></style>
