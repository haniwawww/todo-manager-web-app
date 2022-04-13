<template>
  <div>
    <input v-model="$data.checked" @blur="changeTodoTask" type="checkbox"/>
    <input v-model="$data.title" @blur="changeTodoTask" type="text" placeholder="Title"/>
    <input v-model="$data.description" @blur="changeTodoTask" type="text" placeholder="Description"/>
  </div>
</template>

<script>

import {TaskApi} from "~/api/task-api";

export default {
  name: 'ToDoCard',
  props: ['task'],
  data() {
    // TODO 状態管理本当に子コンポーネントでいいのか検討
    return {
      id: this.task.Id,
      checked: this.task.Checked,
      title: this.task.Title,
      description: this.task.Description,
    }
  },
  methods: {
    async changeTodoTask() {
      try {
        // TODO クライアントキューイングの実装 PWAとUXとネットワーク不良への対応
        // TODO ログイン実装したらuserIdを可変にする
        await TaskApi.UpdateTodo("54d3c45b-67c8-4114-b409-18892e04da57", this.$data.id, {
          checked: this.$data.checked,
          title: this.$data.title,
          description: this.$data.description,
        })
      } catch (e) {
        // TODO エラー表示
        console.error('Failed', e);
      }
    },
  }
}
</script>
