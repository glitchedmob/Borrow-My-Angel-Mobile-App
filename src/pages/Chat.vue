<template>
  <q-page class="flex flex-center">
    <h1>{{getPageTitle}}</h1>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters('chat', ['getPageTitle']),
  },
};
</script>
