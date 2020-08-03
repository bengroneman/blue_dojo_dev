<template>
  <div class="flex justify-left">
    <span id="LogoWizard"></span>
  </div>
</template>
<script>
const radar = require('@/sketches/LogoWizard.js');

export default {
  mounted() {
    const P5 = require('p5');
    new P5(radar.main);
  },
}
</script>