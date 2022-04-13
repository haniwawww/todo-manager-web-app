<template>
  <form>
    <input :checked="$props.checked" type="checkbox" />
    <input :checked="$props.title" type="text" placeholder="Title" />
    <input :checked="$props.description" type="text" placeholder="Description" />
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
