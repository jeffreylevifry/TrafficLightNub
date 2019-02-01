<template>
    <div class="lightContainer">
        <SingleLight msg="BUSY" />
        <SingleLight msg="MEDIUM" />
        <SingleLight msg="LITE" />
        <SingleLight msg="BUSY" />
    </div>
</template>

<script>
import SingleLight from "./SingleLight.vue";

export default {
  name: "LightContainer",
  props: {
    msg: String
  },
  components: {
    SingleLight
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
