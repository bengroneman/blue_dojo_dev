<template>
  <span id="cantor">
  </span>
</template>
<script>
const radar = require('@/sketches/cantor.js');

export default {
  props: {
    color: String
  },
  mounted() {   
    const P5 = require('p5');
    new P5(radar.main);
  },
}
</script>