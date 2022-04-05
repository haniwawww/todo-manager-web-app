<template>
  <Login />
</template>

<script lang="ts">
import Vue from 'vue'
import Login from "~/components/login/Login.vue";

export default Vue.extend({
  name: 'LoginPage',
  components: {Login},
})
</script>
