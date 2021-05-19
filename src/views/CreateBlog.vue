<template>
  <div>test</div>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import firebase from "@/composables/firebase.js";

export default {
  setup() {
    let router = useRouter();
      
    onMounted(() => {
      if (!firebase.auth().currentUser) {
        router.push("/");
      }
    });

    
  },
};
</script>

<style></style>
