<script setup>
import LoginFormVue from "../components/LoginForm.vue";
import Carousel from "../components/Carousel.vue";
</script>

<template>
  <main class="container">
    <Carousel />
    <LoginFormVue />
  </main>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* column-gap: 2rem; */
  align-items: center;
}

@media screen and (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
  }
}
</style>
