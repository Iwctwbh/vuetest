<template>
  <v-container class="pa-0">
    <base-subheading style="font-weight: bold">标 签</base-subheading>

    <v-chip
      v-for="(category, i) in categories"
      :key="i"
      class="mr-2"
      color="black"
      label
      small
      tag
      text-color="white"
    >
      {{ category.text }}
    </v-chip>
  </v-container>
</template>

<script>
  // Utilities
  import { mapGetters } from 'vuex'

  export default {
    name: 'Tags',

    computed: {
      ...mapGetters(['categories']),
    },
  }
</script>
