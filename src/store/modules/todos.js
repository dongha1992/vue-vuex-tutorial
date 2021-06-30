import axios from 'axios';
import { BASE_URL } from '../../constants/config';

const state = {
  todos: [
    { id: 1, title: 'title1', text: 'asda' },
    { id: 2, title: 'title2', text: 'aaaassss' },
  ],
};

const getters = {
  getAllTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get(`${BASE_URL}/todos`);
    if (res) {
      commit('setTodos', res.data);
    }
  },

  async createTodo({ commit }, title) {
    const res = await axios.post(`${BASE_URL}/todos`, {
      title,
      completed: false,
    });

    if (res) {
      commit('addTodo', res.data);
    }
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`${BASE_URL}/todos/${id}`);
    commit('deleteTodo', id);
  },

  async filterTodos({ commit }, e) {
    const limit = e.target.value;
    const res = await axios.get(`${BASE_URL}/todos?_limit=${limit}`);
    commit('setTodos', res.data);
  },

  async updateTodo({ commit }, updatedTodo) {
    const res = await axios.put(
      `${BASE_URL}/todos/${updatedTodo.id}`,
      updatedTodo
    );
    if (res) {
      commit('updateTodo', res.data);
    }
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => (state.todos = [...state.todos, todo]),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    // const foundIndex = state.todos.findIndex(
    //   (todo) => todo.id === updatedTodo.id
    // );
    // if (foundIndex !== -1) {
    //   state.todos.splice(index, 1, updatedTodo);
    // }

    const newTodos = state.todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return { ...todo, completed: updatedTodo.completed };
      } else {
        return todo;
      }
    });
    state.todos = newTodos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
