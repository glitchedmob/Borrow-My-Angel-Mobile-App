<template>
  <q-layout class="backgroundChange fullscreen">
    <div class="logo">
      <img src="~assets/BorrowMyAngel-Logo.png" alt="" class="q-pt-xl">
    </div>
    <q-page-container>
      <div class="column q-mx-md q-mt-md">
        <q-page>
        <div>
          <q-field>
            <q-input
                class="q-ma-xs"
                v-model="name"
                inverted-light
                color="white"
                float-label="Name"
            />
          </q-field>
          <q-field >
            <q-input
                class="q-ma-xs"
                v-model="email"
                inverted-light
                color="white"
                float-label="Email"
            />
          </q-field>
        </div>
        <div class="row no-wrap q-pa-none">
          <q-field class="col">
            <q-input
                class="col q-ma-xs"
                v-model="password"
                inverted-light
                color="white"
                type="password"
                float-label="Password"
            />
          </q-field>
          <q-field class="col">
            <q-input
                class="q-ma-xs"
                v-model="confirmPassword"
                inverted-light
                color="white"
                type="password"
                float-label="Confirm"
            />
          </q-field>
        </div>
          <!-- flex row these inputs three per line  -->
        <div class="row no-wrap q-pa-none">
          <q-field class="col-4">
            <q-input
                class="q-ma-xs"
                v-model="city"
                inverted-light
                color="white"
                float-label="City"
            />
          </q-field>
          <q-field class="col-4">
            <q-input
                class="q-ma-xs"
                v-model="state"
                inverted-light
                color="white"
                float-label="State"
            />
          </q-field>
          <q-field class="col-4">
            <q-input
                class="q-ma-xs"
                v-model="zip"
                type="number"
                inverted-light
                color="white"
                float-label="Zip"
            />
          </q-field>
          <!-- end of three -->
        </div>
        <div class="row no-wrap q-pa-none">
          <q-field class="col">
            <q-input
                class="q-ma-xs"
                v-model="age"
                type="number"
                inverted-light
                color="white"
                float-label="Age"
            />
          </q-field>
          <div class="col">
            <q-select
                class="q-ma-sm q-pa-auto"
                v-model="genders.value"
                :options="genders"
                inverted-light
                color="white"
                float-label="Gender"
            />
          </div>
        </div>
        <div class="row justify-around">
            <!-- <div class="q-mt-sm"><img src="~assets/facebook.png" alt=""></div>
            <div class="q-mt-sm"><img src="~assets/google-plus-square.png" alt=""></div> -->
            <div class="q-mt-sm q-pa-sm"><q-btn label="Sign Up" color="black"/></div>
        </div>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    state: '',
    zip: null,
    age: null,
    genders: [
      {
        label: 'Male',
        value: 'male',
      },
      {
        label: 'Female',
        value: 'female',
      },
      {
        label: 'Non-binary',
        value: 'non_binary',
      },
    ],
  }),
  methods: {
    signUp() {
      this.$q.dialog({
        title: 'Alert',
        message: 'Modern HTML5 front-end framework on steroids.',
      });
    },
  },
};
</script>

<style>
  .backgroundChange {
    background-image: url('~assets/bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
  }
  .logo img{
    width: 100%;
    max-height: 250px;
  }
</style>
