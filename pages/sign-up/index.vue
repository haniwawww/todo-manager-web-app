<template>
  <SignUp />
</template>

<script lang="ts">
import Vue from 'vue'
import SignUp from '~/components/sign-up/SignUp.vue'

export default Vue.extend({
  name: 'SignUpPage',
  components: { SignUp },
})
</script>
