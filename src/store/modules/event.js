import { postEvent, getEvents, getEvent } from "@/services/EventService.js";
import router from "../../router";
export const namespaced = true;
export const state = {
  events: [],
  event: {},
  eventsTotal: 0,
};
export const mutations = {
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
};

export const actions = {
  createEvent({ commit, dispatch }, event) {
    // console.log("user creating  event is " + rootState.user.user.name);
    // dispatch("moduleName/actionToCall", null, { root: true });
    return postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);
        const notification = {
          type: "success",
          message: "Your event has been created",
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem with creating event " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  fetchEvents(
    {
      commit,
      // dispatch
    },
    { perPage, page }
  ) {
    return getEvents(perPage, page)
      .then((response) => {
        commit("SET_EVENTS_TOTAL", response.headers["x-total-count"]);
        commit("SET_EVENTS", response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          router.push({
            name: "404",
          });
        } else {
          router.push({
            name: "network-issue",
          });
        }
        // const notification = {
        //   type: "error",
        //   message: "There was a problem with fetching events " + error.message,
        // };
        // dispatch("notification/add", notification, { root: true });
      });
  },
  fetchEvent({ commit, getters }, id) {
    const event = getters.getEventById(id);
    if (event) {
      commit("SET_EVENT", event);
    } else {
      return getEvent(id)
        .then((response) => {
          commit("SET_EVENT", response.data);
        })
        .catch((error) => {
          //   const notification = {
          //     type: "error",
          //     message: "There was a problem with fetching event " + error.message,
          //   };
          //   dispatch("notification/add", notification, { root: true });
          if (error.response && error.response.status == 404) {
            router.push({
              name: "404",
            });
          } else {
            router.push({
              name: "network-issue",
            });
          }
        });
    }
  },
};
export const getters = {
  catLength: (state) => {
    return state.categories.length;
  },
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};
