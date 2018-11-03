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
          <q-item-side icon="school" />
          <q-item-main label="Borrow an Angle" />
        </q-item>
        <q-item>
          <q-item-side icon="code" />
          <q-item-main label="Resources"/>
        </q-item>
        <q-item >
          <q-item-side icon="send" />
          <q-item-main label="Share app" />
        </q-item>
        <q-item >
          <q-item-side icon="rss feed" />
          <q-item-main label="Get Help Now!" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/glitchedmob/Borrow-My-Angel-Mobile-App')">
          <q-item-side icon="settings" />
          <q-item-main label="GitHub" sublabel="@sliceline" />
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
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
</style>
