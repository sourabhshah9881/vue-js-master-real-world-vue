<template>
  <div>
    <h1>Event Listing</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { getEvents } from "@/services/EventService";
export default {
  components: { EventCard },
  data() {
    return {
      events: [],
    };
  },
  created() {
    getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log("There was an error", error);
      });
  },
};
</script>

<style></style>
