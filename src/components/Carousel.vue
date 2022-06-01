<script></script>

<template>
  <div class="carousel-container">
    <div class="slide1">
      <img src="https://svgshare.com/i/hrA.svg" alt="" />
      <p>Accelerate your mobile team workflow</p>
      <p class="dots">
        <span class="c1 active"></span>
        <span class="c2"></span>
        <span class="c3"></span>
      </p>
    </div>
    <div class="slide2">
      <img src="https://svgshare.com/i/hrB.svg" alt="" />
      <p>The most comprehensive bug reporting tool for mobile apps</p>
      <p class="dots">
        <span class="c1"></span>
        <span class="c2 active"></span>
        <span class="c3"></span>
      </p>
    </div>
    <div class="slide3">
      <img src="https://svgshare.com/i/hrV.svg" alt="" />
      <p>Secure crash reporting with real-time alerts</p>
      <p class="dots">
        <span class="c1"></span>
        <span class="c2"></span>
        <span class="c3 active"></span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #00287a;

  position: relative;
  column-gap: 1rem;
  gap: 0;

  overflow: hidden;

  & div {
    padding-left: 9rem;
    padding-right: 9rem;
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    animation: slide 8s linear infinite alternate;
    // border: 3px solid red;

    & img {
      width: 25rem;
      margin-bottom: 3rem;
    }

    & p {
      color: white;
      font-weight: 600;
      text-align: center;
    }

    & .dots {
      padding: 1rem;
      display: flex;
      flex-direction: row;
      column-gap: 1rem;
    }
  }

  & span {
    height: 0.6rem;
    width: 0.6rem;
    border: 1px solid white;
    border-radius: 50%;
    // background-color: transparent;
  }
}

.active {
  background-color: white;
}

@keyframes slide {
  30% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(-100%);
  }
  65% {
    transform: translateX(-100%);
  }
  70% {
    transform: translateX(-100% * 2);
  }
  100% {
    transform: translateX(-100% * 2);
  }
}

@media screen and (max-width: 600px) {
  .carousel-container {
    display: none;
  }
}
</style>
