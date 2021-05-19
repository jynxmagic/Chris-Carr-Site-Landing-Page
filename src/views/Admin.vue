<template>
  <div id="fullpage" class="fullpage-default">
    <div class="section animated-row" id="welcome" data-section="slide01">
      <div class="section-inner">
        <div class="welcome-box">
          <span class="welcome-first animate" data-animate="fadeInUp"
            >Admin Login</span
          >
          <login-form :tryLogin="tryLogin" />
          <div class="row mt-4">
            <div class="col text-center">
              <span>{{ errorMsg }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/composables/firebase.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
  setup() {
    let errorMsg = ref("");

    let router = useRouter();

    let tryLogin = (username, password) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then((res) => {
          router.push({ path: "createBlogPost", params: res.user });
        })
        .catch((error) => {
          errorMsg.value = error.message;
        });
    };

    return { tryLogin, errorMsg };
  },
};
</script>

<style scoped>
.welcome-first {
  margin-bottom: 10px;
}
</style>
