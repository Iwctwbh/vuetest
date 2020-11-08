<template>
  <v-app-bar
    app
    flat
    color="white"
    elevation="1"
  >
    <v-app-bar-nav-icon
      @click="toggleDrawer"
    /><!--class="hidden-md-and-up"-->

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="logoindex0"
          class="mr-5 hidden-sm-and-down"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
          style="background-color: white"
          @mouseenter="ChangeLogoIndex"
          @mouseleave="ChangeBackLogoIndex"
        />

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          text
          @click="onClick($event, link)"
          rounded
          class="hidden-sm-and-down"
        >
          {{ link.text }}
        </v-btn>

        <v-spacer />

        <v-text-field
          rounded
          append-icon="mdi-magnify"
          flat
          hide-details
          solo
          background-color="grey lighten-4"
          style="max-width: 300px;"
          color="blue"
          light
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },
      ChangeLogoIndex (index) {
        this.logoindex0 = require('../../assets/logo1.png')
      },
      ChangeBackLogoIndex (index) {
        this.logoindex0 = require('../../assets/logo.png')
      },
    },
    data: () => ({
      logoindex0: require('../../assets/logo.png'),
    }),
  }
</script>

<style>
.hidden-sm-and-down {
  font-weight: bold;
  margin: 10px;
  transition: all 0.3s ease;
}
.hidden-sm-and-down:hover {
  color: white;
  background-color: #66CCFF;
  transition: all 0.1s ease;
}
</style>
