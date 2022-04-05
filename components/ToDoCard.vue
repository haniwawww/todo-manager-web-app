<template>
  <form>
    <input v-model="$props.checked" type="checkbox" />
    <input v-model="$props.title" type="text" placeholder="Title" />
    <input v-model="$props.description" type="text" placeholder="Description" />
  </form>
</template>

<script>
export default {
  name: 'ToDoCard',
  props: {
    checked: Boolean,
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
  },
}
</script>
