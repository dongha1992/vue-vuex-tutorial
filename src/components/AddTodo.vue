<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'AddTodo',
    data() {
      return {
        title: '',
      };
    },
    methods: {
      ...mapActions(['createTodo']),
      onSubmit(e) {
        e.preventDefault();
        this.createTodo(this.title);
        this.title = '';
      },
    },
  };
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type='text'] {
    flex: 10;
    padding: 10px;
    border: 1px solid gainsboro;
    outline: 0;
  }
  input[type='submit'] {
    flex: 2;
    background: #32a2ce;
    color: #fff;
    border: 1px #32a2ce solid;
    cursor: pointer;
  }
</style>
