import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import NotFound from "@/views/NotFound";
import NetworkIssue from "@/views/NetworkIssue";
// import { store } from "@/store/store.js";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "*",
    redirect: { name: "404" },
  },
  // {
  //   path: "/event",
  //   redirect: { name: "About" },
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
