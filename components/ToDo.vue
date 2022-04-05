<template>
  <div>
    <div v-for="(task, index) in $data.todoTasks" :key="index">
      <ToDoCard v-bind="task" />
      <button @click="removeTodoTask(task)">Remove</button>
    </div>
    <button @click="addTodoTask">Create</button>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data() {
    return {
      todoTasks: [],
    }
  },
  methods: {
    addTodoTask() {
      this.todoTasks.push({
        checked: false,
        title: '',
        description: '',
      })
    },
    changeTodoTask(index, newTask) {
      this.todoTasks.map((task, i) => {
        if (i === index) {
          return newTask
        }
        return task
      })
    },
    removeTodoTask(task) {
      const targetIndex = this.todoTasks.indexOf(task)
      this.todoTasks.splice(targetIndex, 1)
    },
  },
}
</script>
