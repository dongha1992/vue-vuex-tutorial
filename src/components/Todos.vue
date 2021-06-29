<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos">
      <div v-for="todo in getAllTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <button @click="deleteTodo(todo.id)" class="delete-btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Todos',
    methods: mapActions(['fetchTodos', 'deleteTodo']),
    computed: mapGetters(['getAllTodos']),
    created() {
      this.fetchTodos();
    },
  };
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .todo {
    position: relative;
    padding: 1.5rem;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .delete-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: black;
    background: gray;
    outline: none;
    border: none;
    cursor: pointer;
  }
</style>
