<script>
export default {
  data: function () {
    return {
      userEmail: localStorage.getItem("userLoggedIn"),
    };
  },
  methods: {
    logUserOut() {
      localStorage.clear();
      this.$router.push({
        name: "LoginPage",
      });
    },
  },
};
</script>

<template>
  <div class="page">
    <div class="card-container">
      <div class="card">
        <div class="slide slide1">
          <div class="content">
            <div class="icon">
              <img
                alt="Instabug logo"
                class="logo"
                src="@/assets/logo.svg"
                width="80"
                height="80"
              />
              <h2 class="welcome">Welcome to</h2>
              <h6 class="hover">Hover Here</h6>
            </div>
          </div>
        </div>

        <div class="slide slide2">
          <div class="content">
            <h4 class="userEmail">{{ userEmail }}</h4>
          </div>
          <button @click="logUserOut">Log Out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-container .card .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00287a;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.2rem;
    cursor: pointer;

    & .logo {
      background-color: white;
      padding: 0.5rem;
      border-radius: 50%;
      margin-bottom: 1rem;

      box-shadow: rgb(255, 255, 255) 0px 0px 0px 3px;
      border: 0.5px solid #00287a;
    }

    & .welcome {
      color: white;
    }

    & .hover {
      color: rgba(255, 255, 255, 0.319);
      font-weight: 100;
    }
  }

  .card-container .card .slide {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    width: 300px;
    height: 200px;
    transition: 0.5s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 0.2rem;
  }

  .card-container .card .slide.slide1 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: 0.7s;
    transform: translateY(100px);
  }

  .card-container .card:hover .slide.slide1 {
    transform: translateY(0px);
  }

  .card-container .card .slide.slide2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    transition: 0.8s;
    transform: translateY(-100px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    & .userEmail {
      padding: 0.5rem;
      color: #00287a;
      // width: 50rem;
      // background-color: #00287a;
      text-align: center;
    }

    button {
      width: 80%;
      display: flex;
      column-gap: 5.5rem;
      align-items: center;
      height: 2.5rem;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      outline: none;
      border-radius: 0.2rem;
      border: 1px solid black;
      background-color: #efefef;
      justify-content: center;
      margin-top: 2rem;

      &:hover:enabled {
        background-color: #00287a;
        color: white;
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  .card-container .card:hover .slide.slide2 {
    transform: translateY(0);
  }

  .card-container .card .slide.slide2::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 4px;
    bottom: 15px;
    left: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00287a;
  }
}
</style>
