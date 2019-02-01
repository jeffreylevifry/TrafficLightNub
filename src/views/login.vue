<template>
  <div id="login">
    <h1>SMALL FORMAT LOGIN</h1>
    <div id="input-login-holder">
      <input
        type="text"
        name="username"
        v-model="input.username"
        placeholder="Username"
        v-on:keyup.enter="login"
      />
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Password"
        v-on:keyup.enter="login"
      />
      <button type="button" v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          alert("The username and / or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  margin: 2% auto auto auto;
}
#input-login-holder input {
  width: 50%;
  margin: 1% auto 1% auto;
  display: block;
}
#input-login-holder button {
  margin: 5px;
}

#login input {
  padding: 2 px;
  margin: 10px auto 10px auto;
}

@media screen and (max-width: 600px) {
  #input-login-holder input {
    width: 70%;
  }
}
@media screen and (max-width: 900px) {
  #input-login-holder input {
    width: 70%;
  }
}
</style>
