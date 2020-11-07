<template>
  <v-btn
    class="buttonicon"
    :style="styles"
    fab
    small
    v-bind="$attrs"
    v-on="$listeners"
    text
    outlined
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',
  }
</script>
<style>
.buttonicon{
  background-color: white; color: black;
  transition: all 0.3s ease;
}
.buttonicon:hover {
  color: #66CCFF;
  transition: all 0.1s ease;
}
</style>
