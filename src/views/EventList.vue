<template>
  <div>
    <h1>Event Listing</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Previous Page
      </router-link>
      |
    </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
export default {
  components: { EventCard },
  created() {
    this.$store.dispatch("fetchEvents", {
      perPage: 3,
      page: this.page,
    });
  },
  computed: {
    page() {
      return this.$route.query.page || 1;
    },
    hasNextPage() {
      return this.eventsTotal > this.page * 3;
    },
    ...mapState(["events", "eventsTotal"]),
  },
};
</script>

<style></style>
