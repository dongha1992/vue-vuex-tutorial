<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
  import { FILTER_VALUE } from '../constants/wording';
  import { mapActions } from 'vuex';

  export default {
    name: 'FilterTodos',
    data() {
      return {
        options: FILTER_VALUE,
      };
    },
    methods: mapActions(['filterTodos']),
  };
</script>

<style scoped>
  select {
    margin-top: 20px;
    padding: 6px;
  }
</style>
