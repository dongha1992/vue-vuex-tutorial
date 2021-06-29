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
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => (state.todos = [...state.todos, todo]),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
