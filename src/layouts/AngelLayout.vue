<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Borrow My Angel
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <!-- <q-list-header></q-list-header> -->
        <q-item >
          <q-select
            v-model="status"
            float-label='Angel Status'
            :options="statusOptions"
          />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      status: 'available',
      statusOptions: [
        { label: 'Available', value: 'available' },
        { label: 'Unavailable', value: 'unavailable' },
        { label: 'Do Not Disturb', value: 'do_not_disturb' },
      ],
    };
  },
  methods: {
    openURL,
    // handleStatusChange() {
    //   const url = `${process.env.BASE_URL}`
    // }
  },
};
</script>

<style>

</style>
