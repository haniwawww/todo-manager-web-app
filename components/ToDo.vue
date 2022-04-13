<template>
  <div>
    <div v-if="loading">
      <div>loading</div>
    </div>
    <div v-else>
      <div v-for="(task, index) in $data.todoTasks" :key="index">
        <ToDoCard :task="task"/>
        <button @click="removeTodoTask(task.Id)">Remove</button>
      </div>
      <button @click="addTodoTask">Create</button>
    </div>
  </div>
</template>

<script>
import {TaskApi} from "~/api/task-api";

export default {
  name: 'ToDo',
  data() {
    return {
      todoTasks: [],
      loading: true,
    }
  },
  async mounted() {
    try {
      // TODO ログイン実装したらuserIdを可変にする
      const res = await TaskApi.LoadTasks("54d3c45b-67c8-4114-b409-18892e04da57")
      this.todoTasks = res.data;
    } catch (e) {
      // TODO エラー表示
      console.error('Failed', e);
    } finally {
      this.loading = false
    }
  },
  methods: {
    async addTodoTask() {
      try {
        // TODO クライアントキューイングの実装 PWAとUXとネットワーク不良への対応
        // TODO ログイン実装したらuserIdを可変にする
        const res = await TaskApi.AddTodo("54d3c45b-67c8-4114-b409-18892e04da57", {
          checked: false,
          title: '',
          description: '',
        })
        this.todoTasks.push({
          id: res.data.Id,
          checked: false,
          title: '',
          description: '',
        })
      } catch (e) {
        // TODO エラー表示
        console.error('Failed', e);
      }
    },
    async removeTodoTask(taskId) {
      try {
        const targetIndex = this.todoTasks.findIndex(task => task.Id === taskId);
        if (targetIndex === -1) {
          // TODO この導線に入るパターンに応じてエラハン
          console.error('task not found');
          return;
        }
        // TODO クライアントキューイングの実装 PWAとUXとネットワーク不良への対応
        // TODO ログイン実装したらuserIdを可変にする
        await TaskApi.DeleteTodo("54d3c45b-67c8-4114-b409-18892e04da57", taskId)
        this.todoTasks.splice(targetIndex, 1)
      } catch (e) {
        // TODO エラー表示
        console.error('Failed', e);
      }
    },
  },
}
</script>
