<template>
  <ResourceList :resources="resources" />
</template>

<script>
import ResourceList from '../../components/ResourceList';
import { mapState } from 'vuex';

export default {
  components: {
    ResourceList,
  },
  computed: {
    ...mapState('resource', ['resources']),
  },
};
</script>

<style>

</style>
