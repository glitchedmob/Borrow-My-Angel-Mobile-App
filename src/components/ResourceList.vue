<template>
  <q-list
    separator
  >
    <q-item>
      <q-item-side left icon="message" />
      <q-item-main
        v-if="header"
      >{{headerTitle}}</q-item-main>
    </q-item>
    <ResourceItem
      icon="call"
      v-for="(resource, index) in resources"
      :resource="resource"
      :key="index"
    />
  </q-list>
</template>

<script>
import ResourceItem from './ResourceItem';

export default {
  components: {
    ResourceItem,
  },
  props: ['resources', 'header', 'headerTitle'],
};
</script>

<style>

</style>
