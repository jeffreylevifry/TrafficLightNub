<template>
  <div id="frontEnd">
    <SingleLightFront
      id="SmallFormat"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_SF_ICON.svg"
      :status="sfstatus"
      machine="Small Format"
      subtext="POSTCARDS, BUSINESS CARDS, BOOKS, BINDERS; 8.5 x 11, 11 x 17, 12x18"
      v-bind:style="{ backgroundColor: sf.backgroundColor }"
    ></SingleLightFront>

    <SingleLightFront
      id="6100"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_HP6100_ICON.svg"
      :status="hpzstatus"
      machine="HP z6100"
      subtext="LARGE FORMAT PRINTS; POSTERS, PRINT AND MOUNT"
      v-bind:style="{ backgroundColor: hpz.backgroundColor }"
    ></SingleLightFront>

    <SingleLightFront
      id="360"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_360_ICON.svg"
      :status="latexstatus"
      machine="HP 360 Latex"
      subtext="BANNERS, ADHESIVE VINYL WALL GRAPHICS, CAR GRAPHICS"
      v-bind:style="{ backgroundColor: latex.backgroundColor }"
    ></SingleLightFront>

    <SingleLightFront
      id="Flatbed"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_350_ICON.svg"
      :status="flatbedstatus"
      machine="Flatbed"
      subtext="DIRECT TO FOAMCORE, SINTRA, DIBOND, VARIOUS SUBSTRATES"
      v-bind:style="{ backgroundColor: flatbed.backgroundColor }"
    ></SingleLightFront>

    <SingleLightFront
      id="Lfbw"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_LFBW_ICON.svg"
      :status="lfbwstatus"
      machine="Large Format B&W"
      subtext="BLUEPRINTS, DRAWINGS, PLANS, BACKDROPS"
      v-bind:style="{ backgroundColor: lfbw.backgroundColor }"
    ></SingleLightFront>

    <SingleLightFront
      id="Finishing"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_FINISHING_ICON.svg"
      :status="finishingstatus"
      machine="Finishing"
      subtext="MOUNTING, LAMINATION ZUND CUTTING"
      v-bind:style="{ backgroundColor: finishing.backgroundColor }"
    ></SingleLightFront>
  </div>
</template>

<script>
import SingleLightFront from "../components/SingleLightFront.vue";
import { sfBg } from "../firebase";
import { hpzBg } from "../firebase";
import { latexBg } from "../firebase";
import { flatbedBg } from "../firebase";
import { finishingBg } from "../firebase";
import { lfbwBg } from "../firebase";

export default {
  name: "FrontEnd",

  components: {
    SingleLightFront
  },

  methods: {
    changeSF: function() {
      var self = this;
      sfBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.sf.backgroundColor = color1;
        self.sfstatus = self.getStatus(color1);
      });
    },
    changeHPZ: function() {
      var self = this;
      hpzBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.hpz.backgroundColor = color1;
        self.hpzstatus = self.getStatus(color1);
      });
    },
    changeLATEX: function() {
      var self = this;
      latexBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.latex.backgroundColor = color1;
        self.latexstatus = self.getStatus(color1);
      });
    },
    changeFLATBED: function() {
      var self = this;
      flatbedBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.flatbed.backgroundColor = color1;
        self.flatbedstatus = self.getStatus(color1);
      });
    },
    changeFINISHING: function() {
      var self = this;
      finishingBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.finishing.backgroundColor = color1;
        self.finishingstatus = self.getStatus(color1);
      });
    },
    changeLFBW: function() {
      var self = this;
      lfbwBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.lfbw.backgroundColor = color1;
        self.lfbwstatus = self.getStatus(color1);
      });
    },

    getStatus: function(color) {
      var str1 = color;
      var red = "red";
      var blue = "#3fa9f5";
      var grey = "lightgrey";
      var green = "#00b058";
      var yellow = "#ffff00";
      if (str1.localeCompare(red) === 0) {
        //red
        return "HEAVY";
      }
      if (str1.localeCompare(blue) === 0) {
        //blue
        return "SPECIAL";
      }
      if (str1.localeCompare(grey) === 0) {
        return "OFFLINE";
      }
      if (str1.localeCompare(green) === 0) {
        //green
        return "LITE";
      }
      if (str1.localeCompare(yellow) === 0) {
        //yellow
        return "MEDIUM";
      } else {
        return "ERROR";
      }
    }
  },

  created() {
    this.changeSF();
    this.changeHPZ();
    this.changeLATEX();
    this.changeFINISHING();
    this.changeFLATBED();
    this.changeLFBW();
  },

  data() {
    return {
      sfstatus: "",
      hpzstatus: "",
      latexstatus: "",
      lfbwstatus: "",
      flatbedstatus: "",
      finishingstatus: "",
      sf: { backgroundColor: "" },
      hpz: { backgroundColor: "" },
      latex: { backgroundColor: "" },
      lfbw: { backgroundColor: "" },
      flatbed: { backgroundColor: "" },
      finishing: { backgroundColor: "" }
    };
  }
};
</script>

<style scoped>
#frontEnd {
  background-color: #ffffff;
  border: 1 px solid# cccccc;
  padding: 20 px;
  margin-top: 10 px;
}
@media screen and (max-width: 700px) {
  #frontEnd {
    width: 100%;
  }
}
</style>
