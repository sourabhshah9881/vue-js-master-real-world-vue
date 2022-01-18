<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <!-- <p>{{ localComputed }}</p> -->
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

// export default {
//   computed: mapState({
//     userName: (state) => state.user.name,
//     userId: (state) => state.user.id,
//     categories: (state) => state.user.categories,
//   }),
// };

export default {
  computed: {
    localComputed() {
      return 1 + 2;
    },
    ...mapState(["user", "categories"]),
  },
};
</script>

<style lang="scss" scoped></style>
