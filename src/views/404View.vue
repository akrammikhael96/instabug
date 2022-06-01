<script>
export default {
  methods: {
    goToLoginPage() {
      this.$router.push({
        name: "LoginPage",
      });
    },
  },
};
</script>

<template>
  <div class="page">
    <div class="container404">
      <div class="illustration"></div>
      <div class="content">
        <h3>404 Page not found!</h3>
        <br />
        <h5>Sorry, that page doesn't exist. What would you like to do?</h5>
        <br />
      </div>
    </div>
    <button class="btnLink" @click="goToLoginPage">Login page</button>
  </div>
</template>

<style lang="scss">
.page {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .container404 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;

    & .illustration {
      width: 20rem;
      height: 20rem;
      background-color: aliceblue;
    }

    & .content {
      color: #00287a;
      text-align: center;
    }
  }

  & .btnLink {
    font-size: 0.8rem;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;

    &:focus,
    &:hover {
      color: #00287a;
    }

    &:focus:after,
    &:hover:after {
      width: 100%;
      left: 0%;
    }

    &:after {
      content: "";
      pointer-events: none;
      bottom: -2px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #00287a;
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
  }
}
</style>
