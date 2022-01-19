import Vue from "vue";
import Vuex from "vuex";
import { postEvent, getEvents, getEvent } from "@/services/EventService";

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
    events: [],
    event: {},
    eventsTotal: 0,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      getEvents(perPage, page)
        .then((response) => {
          commit("SET_EVENTS_TOTAL", response.headers["x-total-count"]);
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          console.log("There was an error", error);
        });
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id);
      if (event) {
        commit("SET_EVENT", event);
      } else {
        getEvent(id)
          .then((response) => {
            commit("SET_EVENT", response.data);
          })
          .catch((error) => {
            console.log("There was an error:", error.response);
          });
      }
    },
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
  },
});
