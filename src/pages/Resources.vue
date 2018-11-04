<template>
  <q-page padding>
    <q-modal
      v-model="opened"
      minimized
      content-css="padding: 10px;"
    >
      <q-modal-layout>
        <h5 class="text-center">Filter Options</h5>
        <div class="main row justify-center" style="width: 90%;">
          <q-select
            float-label="Categories"
            v-model="category"
            :options="categories"
          />
        </div>
        <div class="row justify-center q-mt-sm" style="width: 90%;">
          <q-radio
            v-model="type"
            val="local"
            label="Local"
          />
          <q-radio
            v-model="type"
            val="national"
            label="National"
          />
        </div>
        <div class="row justify-center q-mt-sm" style="width: 90%;" v-if="type === 'local'">
          <q-select
            float-label="City"
            v-model="city"
            :options="cities"
          />
          <q-select
            float-label="State"
            v-model="state"
            :options="states"
          />
        </div>
      </q-modal-layout>
    </q-modal>
    <div style="width: 100%;" class="p-pa-xs">
      <q-tabs
        class="q-mb-xs"
        animated
        swipeable
        color="dark"
        align="justify"
      >
        <q-tab
          default
          slot="title"
          label="Recommended"
          @click="setRecommended"
        />
        <q-tab
          slot="title"
          label="Search"
          @click="setAll"
        />
      </q-tabs>
    </div>
    <div style="width: 100%;">
      <div v-if="isAllResources">
        <q-input
          v-model="searchString"
          stack-label="Search:"
          class="q-mb-sm q-mt-md"
          type="search"
        />
        <q-btn
          class="q-mb-sm q-mr-sm"
          label="Search"
          color="dark"
        />
        <q-btn
          label="Filter"
          color="dark"
          class="q-mb-sm"
          @click="showFilterModal"
        />
      </div>
      <ResourceList
        header="true"
        :headerTitle="title"
        :resources="resources"
      />
    </div>
  </q-page>
</template>

<script>
import ResourceList from '../components/ResourceList';

export default {
  data() {
    return {
      resources: [],
      title: '',
      isAllResources: false,
      searchString: '',
      opened: false,
      category: 'Crisis Services',
      recommendedResources: [
        { name: 'Crisis Center', phone: '417-111-1111' },
        { name: 'Counseling', phone: '417-222-2222' },
        { name: 'Phone a Friend', phone: '417-333-3333' },
      ],
      categories: [
        { label: 'Crisis Services', value: 'Crisis Services' },
        { label: 'Professional Health', value: 'Professional Health' },
        { label: 'Self Help Strategies', value: 'Self Help Strategies' },
        { label: 'Other Support Strategies', value: 'Other Support Strategies' },
      ],
      city: 'Springfield',
      cities: [
        { label: 'Springfield', value: 'Springfield' },
        { label: 'Ozark', value: 'Ozark' },
        { label: 'Nixa', value: 'Nixa' },
      ],
      state: 'MO',
      states: [
        { label: 'MO', value: 'MO' },
        { label: 'OK', value: 'OK' },
        { label: 'AR', value: 'AR' },
      ],
      type: 'local',
      hideLocalControls: false,
    };
  },
  created() {
    this.setRecommended();
  },
  components: {
    ResourceList,
  },
  methods: {
    setRecommended() {
      this.title = 'Recommended Resources';
      this.resources = this.recommendedResources;
      this.isAllResources = false;
    },
    setAll() {
      this.title = 'Search Results';
      this.resources = [];
      this.isAllResources = true;
    },
    showFilterModal() {
      this.opened = true;
    },
  },
};
</script>

<style>

</style>
