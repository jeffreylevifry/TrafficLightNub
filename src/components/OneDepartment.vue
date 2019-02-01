<template>
  <div class="oneDepartment">
    <!-- <div class="imageHolder"><img v-bind:src="image" /></div> -->
    <!-- <div class="machineHolder">{{ machine }}</div> -->
    <div class="buttonHolder">
      <button id="lite" v-on:click="$emit('change-color', '#00b058');">
        LITE
      </button>
      <button id="medium" v-on:click="$emit('change-color', '#ffff00');">
        MEDIUM
      </button>
      <button id="heavy" v-on:click="$emit('change-color', 'red');">
        HEAVY
      </button>
      <button id="special" v-on:click="$emit('change-color', '#3fa9f5');">
        SPECIAL
      </button>
      <button id="offline" v-on:click="$emit('change-color', 'lightgrey');">
        OFFLINE
      </button>
    </div>
    <div class="statusHolder">{{ status }}</div>
  </div>
</template>

<script>
export default {
  name: "OneDepartment",
  props: {
    status: String,
    machine: String,
    subtext: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageHolder {
  float: left;
  padding-left: 10px;
  width: 100px;
}

img {
  display: block;
  max-width: 90px;
  max-height: 90px;
  width: auto;
  height: auto;
}
#lite {
  background-color: #00b058;
}
#medium {
  background-color: #ffff00;
}
#heavy {
  background-color: red;
}
#special {
  background-color: #3fa9f5;
}
#offline {
  background-color: lightgrey;
}
button {
  border: none;
  font-size: 13px;
  font-weight: 900;
  width: 80%;
  height: 19%;
  background-color: rgba(255, 255, 255, 0.17);
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
}

.oneDepartment {
  background-color: #e4e4e4;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-size: 1.1em;
  color: black;
}
.machineHolder {
  float: left;
  width: 30%;
  text-align: left;
  height: 70px;
  letter-spacing: 0px;
  margin-top: 17px;
  padding-bottom: 10px;
  font-size: 37px;
}
.statusHolder {
  display: none;
  float: left;
  width: 33px;
  text-align: right;
  height: 50px;
  padding-bottom: 10px;
  padding-right: 20px;
}
.buttonHolder {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1450px) {
  button {
    font-size: 16px;
    font-weight: 900;
    width: 80%;
    height: 18%;
  }
  .machineHolder {
    width: 30%;
    font-size: 28px;
  }
  .imageHolder {
    width: 55px;
    padding: 10px;
  }
}

@media screen and (max-width: 900px) {
  button {
    font-size: 16px;
    font-weight: 900;
    width: 80%;
    height: 19%;
  }

  .imageHolder {
    width: 50px;
    height: auto;
    padding: 5px;
  }
  img {
    display: block;
    max-width: 50px;
    max-height: 50px;
    width: auto;
    height: auto;
  }
  .machineHolder {
    font-size: 19px;
    width: 70%;
    height: 22%;
    margin-top: 5px;
  }
  .statusHolder {
    display: none;
  }
  .subtextHolder {
    font-size: 6px;
    height: 39px;
  }
  .buttonHolder {
  }
}
@media screen and (max-width: 450px) {
  .machineHolder {
    font-size: 19px;
  }

  .buttonHolder {
  }
}
</style>
