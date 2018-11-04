<template>
  <div class="q-mx-lg q-mt-xl column justify-center full-height">
    <q-field>
    <q-input
      v-model="email"
      inverted-light
      color="white"
      float-label="Email"
    />
    </q-field>
    <q-field>
    <q-input
      v-model="password"
      inverted-light
      color="white"
      type="password"
      float-label="Password"
    />
    </q-field>
    <div class="row justify-around">
      <!--<div class="q-mt-sm"><img src="~assets/facebook.png" alt=""></div>-->
      <!--<div class="q-mt-sm"><img src="~assets/google-plus-square.png" alt=""></div>-->
      <div class="q-mt-sm q-pa-sm"><q-btn label="Login" color="black"/></div>
    </div>
    <div class="row justify-around">
      <div class="q-mt-sm q-pa-sm">
        <q-btn flat label="Back" color="black" :to="{ name: 'Landing' }"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    email: '',
    password: '',
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
  .background {
    background-image: url('~assets/bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .logo img{
    width: 100%;
    max-height: 250px;
  }
</style>
