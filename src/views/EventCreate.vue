<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>{{ getEventById(2) }}</p>
    <!-- <p>{{ localComputed }}</p> -->
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

// export default {
//   computed: mapState({
//     userName: (state) => state.user.name,
//     userId: (state) => state.user.id,
//     categories: (state) => state.user.categories,
//   }),
// };

export default {
  computed: {
    // getEvent() {
    //   return this.$store.getters.getEventById;
    // },

    ...mapGetters(["getEventById"]),
    ...mapState(["user", "categories"]),

    catLength() {
      return this.$store.getters.catLength;
    },
    // ...mapState({
    //   userName: (state) => state.user.name,
    // }),
  },
};
</script>

<style lang="scss" scoped></style>
