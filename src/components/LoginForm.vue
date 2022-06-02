<script>
export default {
  data() {
    return {
      showPassword: false,
      isShake: false,
      wrongCredentials: false,
      emailAccepted: false,
      passwordAccepted: false,
      onEmailFieldInput: false,
      // disableLoginBtn: emailAccepted && passwordAccepted,
      onPasswordFieldInput: false,
      usersData: [
        { email: "mohamed@instabug.com", password: "A12345678" },
        { email: "mohamed1@instabug.com", password: "A12345678" },
        { email: "mohamed2@instabug.com", password: "A12345678" },
        { email: "mohamed3@instabug.com", password: "A12345678" },
        { email: "mohamed4@instabug.com", password: "A12345678" },
        { email: "mohamed5@instabug.com", password: "A12345678" },
        { email: "mohamed6@instabug.com", password: "A12345678" },
        { email: "mohamed7@instabug.com", password: "A12345678" },
      ],
      emailInput: "",
      passwordInput: "",
      emailValidateMsg: "Enter a valid Email address",
      passwordValidateMsg: "",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    // checkBtn() {
    //   if (this.emailAccepted && this.passwordAccepted) {
    //     this.disableLoginBtn = false;
    //   }
    // },
    checkCredentials() {
      const user = this.usersData.filter((el) => {
        if (
          el.email === this.emailInput &&
          el.password === this.passwordInput
        ) {
          return el;
        }
      });
      if (user.length === 0) {
        this.isShake = true;
        this.wrongCredentials = true;
      } else {
        const userObj = user[0];

        this.$router.push({
          name: "WelcomePage",
          // params: { email: userObj.email },
        });
        this.wrongCredentials = false;
        localStorage.setItem("userLoggedIn", userObj.email);
      }
      setTimeout(() => {
        this.isShake = false;
      }, 500);
    },
  },

  computed: {
    isEmailValid() {
      this.disableLoginBtn = true;
      this.emailAccepted = false;
      this.onEmailFieldInput = true;
      if (this.emailInput === "") {
        this.onEmailFieldInput = false;
        this.emailAccepted = false;

        return "";
      } else if (this.reg.test(this.emailInput)) {
        this.onEmailFieldInput = false;
        this.emailAccepted = true;

        return "success";
      } else {
        return "fail";
      }
    },

    isPasswordValid() {
      this.disableLoginBtn = true;
      this.passwordAccepted = false;
      this.onPasswordFieldInput = true;
      if (this.passwordInput == "") {
        this.onPasswordFieldInput = false;
        this.passwordAccepted = false;
        return "";
      } else if (this.passwordInput.length < 6) {
        this.passwordValidateMsg = "Password must be 6 characters or more";
        return "fail";
      } else if (this.passwordInput.search(/[0-9]/) < 0) {
        this.passwordValidateMsg = "Password must contain at least 1 number";
        return "fail";
      } else if (this.passwordInput.search(/[A-Z]/) < 0) {
        this.passwordValidateMsg =
          "Password must contain at least 1 uppercase letter";
        return "fail";
      } else if (
        this.passwordInput.includes(this.emailInput.split("@")[0]) &&
        this.emailInput !== ""
      ) {
        this.passwordValidateMsg =
          "Password shouldn’t contain the email address name";
        return "fail";
      } else {
        this.onPasswordFieldInput = false;
        this.passwordAccepted = true;

        return "success";
      }
    },
  },
};
</script>

<template>
  <div class="container" :class="{ shake: isShake }">
    <img
      alt="Instabug logo"
      class="logo"
      src="@/assets/logo.svg"
      width="80"
      height="80"
    />
    <h3 class="title">Log in to <span class="boldText">Instabug</span></h3>
    <div class="btn-group">
      <button>
        <i class="bx bxl-google"></i>
        Google
      </button>

      <button>
        <i class="bx bxl-github"></i>
        GitHub
      </button>

      <button>
        <i class="bx bxl-microsoft"></i>
        Microsoft
      </button>
    </div>

    <div class="line"></div>

    <form @submit.prevent="checkCredentials" action="" class="inputForm">
      <div v-if="wrongCredentials" class="incorrectData">
        <p>Your email and/or password are incorrect!</p>
      </div>
      <div class="emailInput">
        <label for="email">Work Email</label>
        <input
          v-model="emailInput"
          type="email"
          name="email"
          id="email"
          placeholder="you@company.com"
          :class="isEmailValid"
        />
        <p v-if="onEmailFieldInput" class="emailValidate">
          {{ emailValidateMsg }}
        </p>
      </div>
      <div class="passwordInput">
        <div class="passwordLabels">
          <label for="password">Password</label>
          <a href="" class="forgot">Forgot Password ?</a>
        </div>

        <input
          v-model="passwordInput"
          :type="showPassword ? 'text' : 'password'"
          name="password"
          id="password"
          :class="isPasswordValid"
          placeholder="6+ Characters"
        />
        <span
          ><i
            @click="showPassword = !showPassword"
            :class="[showPassword ? 'bxs-hide' : 'bxs-show', 'bx']"
          ></i
        ></span>
        <p v-if="onPasswordFieldInput" class="passwordValidate">
          {{ passwordValidateMsg }}
        </p>
      </div>

      <button
        class="loginBtn"
        :disabled="emailAccepted && passwordAccepted ? false : true"
        type="submit"
      >
        Log in
      </button>
    </form>

    <div class="helpLinks">
      <p>Don't Have an acoount <a href="">Sign up</a></p>
      <a href="">Login via SSO</a>
    </div>
    <footer>
      <p>Trusted by the top companies</p>

      <div class="sponsors">
        <img src="@/assets/buzzfeed.svg" width="60" />

        <img src="@/assets/oneplus.svg" width="60" />
        <img src="@/assets/Toyota.svg" width="60" />
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.shake {
  animation: shake 0.4s linear;
}

.container {
  z-index: 10;
  width: 50vw;
  // height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  // padding-top: 1rem;
  align-items: center;
  justify-content: center;
  // border: 3px solid #00287a;
  // border-radius: 0rem 0.5rem 0.5rem 0rem;
  // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  // animation: shake 1s linear;

  & .title {
    font-weight: 400;
    font-size: 3vh;

    & .boldText {
      font-weight: 600;

      color: #00287a;
    }
  }

  & .logo {
    background-color: white;
    padding: 1.5vh;
    border-radius: 50%;
    margin-bottom: 2.5vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border: 0.5px solid #00287a;
  }
}
.btn-group {
  width: 100%;
  margin-top: 2.5vh;

  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  width: 25vw;
  display: flex;
  // column-gap: 5.5rem;
  justify-content: center;
  align-items: center;
  height: 5vh;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1.4vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  outline: none;
  border-radius: 0.2rem;
  border: 1px solid black;
  background-color: #efefef;
  position: relative;
  font-size: 1.5vh;

  &:hover:enabled {
    background-color: #00287a;
    color: white;
  }
  &:disabled {
    cursor: not-allowed;
  }

  & i {
    position: absolute;
    left: 0.1vw;
    font-size: 2.5vh;
    padding: 1vh;
  }
}

.inputForm {
  margin-top: 3vh;
  width: 25vw;

  & .incorrectData {
    width: 25vw;
    height: 5vh;
    padding: 1vh;
    border: 1px solid black;
    background-color: rgba(255, 0, 0, 0.5);
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    color: white;
    align-self: center;
    // display: none;
    // animation: shake 1s linear;
    // transition: 5s;

    & p {
      font-size: 1.6vh;
      font-weight: 900;
      align-self: center;
    }
  }
  .showWrongData {
    display: block;
  }

  & .emailInput,
  & .passwordInput {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    span i {
      position: absolute;
      top: 4.4vh;
      right: 0.9vh;
      background-color: #efefef;
      padding: 0.5vh;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 0.2rem;
      font-size: 1.2vw;
      cursor: pointer;

      &:hover {
        background-color: #00287a;
        color: white;
      }
    }

    & .passwordLabels {
      display: flex;
      justify-content: space-between;

      width: 100%;
      & .forgot {
        font-size: 1.1vh;
        align-self: flex-start;
        margin-top: 1.6vh;
      }
    }

    & label {
      align-self: flex-start;
      font-size: 1.6vh;
      font-weight: 600;
      margin-top: 1.2vh;
      // margin-bottom: 0.5vh;
    }
  }
  & input {
    width: 100%;
    height: 5vh;
    padding: 1vh;
    outline: none;
    border-radius: 0.2rem;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-size: 1.5vh;

    // &:focus {
    //   border: 2px solid #00287a;
    // }
  }

  & button {
    width: 100%;
    justify-content: center;
    margin-top: 2vh;
    margin-bottom: 1.5vh;
  }

  & .emailValidate,
  & .passwordValidate {
    margin-top: 0.3vh;
    font-size: 1.2vh;
    font-weight: 500;
    color: red;
    align-self: flex-start;
    // visibility: hidden;
    // display: none;
  }
}
.hideValidations {
  visibility: hidden;
}

.showValidations {
  visibility: visible;
}

.helpLinks {
  margin-top: -1vh;
  width: 25vw;
  display: flex;
  font-size: 1.1vh;
  justify-content: space-between;
}

footer {
  margin-top: 3vh;
  & p {
    // color: #64b5f9;
    color: #00287a;
    font-weight: 200;
    font-size: 0.8vw;
    text-align: center;
    margin-bottom: 1.5vh;
  }

  & .sponsors {
    display: flex;
    justify-content: center;
    column-gap: 2.5vw;
    background-color: #00287a;
    padding: 2vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    & img {
      width: 7vw;
    }
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate(2px, 2px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translate(-2px, -2px);
  }
}

.success {
  border: 2px solid green !important;
}

.fail {
  border: 2px solid red !important;
}

// .line {
//   margin-top: 0.6rem;
//   margin-bottom: 0.6rem;
//   height: 0.05rem;
//   width: 10rem;
//   background-color: black;
// }

@media screen and (max-width: 600px) {
  .container {
    height: 100vh;
    margin: 0;
    padding: 0;
    & .title {
      font-size: 5vw;
    }
  }
  button,
  .inputForm,
  .helpLinks {
    width: 70vw;
    // height: 5vh;
    & .incorrectData {
      width: 70vw;
      h & p {
        font-size: 1.3vh;
        font-weight: 900;
        align-self: center;
      }
    }
  }

  .helpLinks {
    margin-top: -3vh;
  }

  footer {
    & p {
      font-size: 3vw;
    }
  }
  footer .sponsors {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    background-color: #00287a;
    padding: 1rem;
    width: 80vw;

    & img {
      width: 17vw;
    }
  }

  .logo {
    width: 25vw;
    height: 25vw;
    margin-top: 0;
  }

  .inputForm {
    & .passwordInput {
      & span i {
        font-size: 5vw;
      }
    }
  }
}
</style>
