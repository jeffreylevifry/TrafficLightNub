<template>
  <div id="app">
    <div id="heading">
      <div id="logo-holder">
        <a href="./">
          <img
            src="http://www.jeffreylevifry.com/TrafficLight/assets/traffic-light-logo.svg"
          />
        </a>
      </div>
      <div id="top-text"><h3>SMALL FORMAT</h3></div>
    </div>
    <div id="splash-page-holder">
      <nav
        id="nav-front"
        v-if="['login', 'register'].indexOf($route.name) > -1"
      >
        <router-link
          v-if="authenticated"
          to="/login"
          v-on:click.native="logout();"
          replace
          >Logout</router-link
        >
        <router-link to="/frontEnd"
          ><div id="frontview">VIEW PRODUCTION STATUS</div></router-link
        >
      </nav>
      <router-view @authenticated="setAuthenticated" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isFrontEnd: true,
      authenticated: false,
      mockAccount: {
        username: "junior",
        password: "callmevirg"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed|Oswald");

html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
  background-color: #f6f6f6;
  margin: 0;
  padding: 0;
}
#splash-page-holder {
  height: 100%;
  width: 100%;
}
h2 {
  letter-spacing: 7px;
  font-size: 45px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 900;
}
h3 {
  font-size: 16px;
  margin: 0px 0px 2px 0px;
  letter-spacing: 1px;
}
#logo-holder {
  width: 10%;
  margins: auto;
}

#heading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 96%;
  padding: 0 2%;
}

#top-text {
  width: auto;
  padding-top: 1%;
  padding-left: 2%;
  text-align: left;
  font-style: italic;
}

a {
  color: #2c3e50;
  font-weight: 900;
}

#app {
  width: 100%;
  height: 99%;
  margin: 1% 0 0 0;
  padding: 0;
  //padding: 1% %4 1% 4%;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0);
}

a {
  text-decoration: none;
}

#frontview {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  margin: 2% auto auto auto;
}

#nav-front {
  margin: auto;
  text-align: center;
  font-size: 30px;
  border: none;
}
#title {
  display: inline;
  width: 100%;
  margin: auto;
}

@media screen and (max-width: 600px) {
  h3 {
    letter-spacing: 2px;
  }
  h2 {
    letter-spacing: 2px;
    line-height: 60px;
  }
  #frontview {
  }
  #app {
  }

  #logo-holder {
    width: 25%;
  }
}

@media screen and (max-width: 900px) {
  #logo-holder {
    width: 25%;
  }
  h2 {
    letter-spacing: 2px;
    line-height: 60px;
  }
  #app {
  }
}
</style>
