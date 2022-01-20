<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your event</h3>
      
      <base-input label="Title" v-model="event.title"  type="text" placeholder="Title" class="field" />
      <base-input label="Description" v-model="event.description"  type="text" placeholder="Description" class="field" />
      <h3>Where is your event?</h3>
      <base-input label="Location" v-model="event.location"  type="text" placeholder="Add a location" class="field" />
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>
      <base-select label="select a category" :options="categories" v-model="event.category" class="field" />
      <base-select label="select a time" :options="times" v-model="event.time" class="field" />
      

      <!-- <input type="submit" class="button -fill-gradient" value="Submit"/> -->
      <base-button type="submit" buttonClass="-fill-gradient">Submit</base-button>
    </form>
  </div>
</template>


<script>
import Datepicker from "vuejs-datepicker";
import NProgress from "nprogress";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    Datepicker,
    BaseInput,
    BaseSelect,
    BaseButton
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    };
  },
  methods: {
    createEvent() {
      NProgress.start();
      this.$store
        .dispatch("event/createEvent", this.event)
        .then(() => {
          this.$router.push({
            name: "event-show",
            params: { id: this.event.id }
          });
          this.event = this.createFreshEventObject();
        })
        .catch(() => {
          NProgress.done();
        });
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        user: user,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
