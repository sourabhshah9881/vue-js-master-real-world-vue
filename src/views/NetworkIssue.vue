<template>
  <div>
    <h1>Uh-Oh!</h1>
    <h3>I think you are experiencing a network issue</h3>
    <router-link :to="{ name: 'event-list' }"
      >Or go back to home page</router-link
    >
  </div>
</template>
