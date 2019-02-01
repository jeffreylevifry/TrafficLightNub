<template>
  <div class="singleLightFront">
    <div class="imageHolder"><img v-bind:src="image" /></div>
    <div class="machineHolder">
      {{ machine }}
      <div class="subtextHolder">{{ subtext }}</div>
    </div>
    <div class="statusHolder">{{ status }}</div>
  </div>
</template>

<script>
export default {
  name: "SingleLightFront",
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
.singleLightFront {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  background-color: lightgrey;
  height: 100px;
  font-size: 35px;
  color: black;
}

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

.machineHolder {
  float: left;
  width: 60%;
  height: 50px;
  padding-bottom: 10px;
  text-align: left;
  font-weight: 700;
}

.statusHolder {
  float: right;
  width: 20%;
  text-align: right;
  height: 50px;
  padding-bottom: 10px;
  padding-right: 20px;
  font-size: 50px;
  font-weight: 900;
}

.subtextHolder {
  float: none;
  height: 50px;
  padding-bottom: 4px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
}

@media screen and (max-width: 900px) {
  .singleLightFront {
    font-size: 15px;
  }
  .imageHolder {
    width: 40px;
    height: auto;
    padding: 5px;
  }
  img {
    display: block;
    max-width: 40px;
    max-height: 40px;
    width: auto;
    height: auto;
  }
  .machineHolder {
    font-size: 20px;
    width: 60%;
  }
  .statusHolder {
    font-size: 20px;
  }
  .subtextHolder {
    font-size: 6px;
    height: 39px;
  }
  @media screen and (max-width: 450px) {
    .subtextHolder {
      font-size: 12px;
      height: 39px;
    }
    .machineHolder {
      width: 60%;
    }
    .statusHolder {
      font-size: 24px;
    }
  }
}
</style>
