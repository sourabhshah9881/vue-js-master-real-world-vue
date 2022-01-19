import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      id: "abc123",
      name: "Sourabh Shah",
    },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    events: [
      { id: 1, title: "Dummy Event1", organizer: "dummyOrganizer1" },
      { id: 2, title: "Dummy Event2", organizer: "dummyOrganizer2" },
      { id: 3, title: "Dummy Event3", organizer: "dummyOrganizer3" },
      { id: 4, title: "Dummy Event4", organizer: "dummyOrganizer4" },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
  },
});
