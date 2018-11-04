<template>
  <q-layout class="background fullscreen">
    <div class="logo">
      <img src="~assets/BorrowMyAngel-Logo.png" alt="" class="q-pt-xl">
    </div>
    <q-page-container>
      <div class="q-mx-lg q-mt-xl">
        <q-page>
          <q-field>
          <q-input
            inverted-light
            color="white"
            stack-label="Username/Email"/>
          </q-field>
          <q-field>
          <q-input
            inverted-light
            color="white"
            type="password"
            stack-label="Password"/>
          </q-field>
          <div class="row justify-around">
            <!-- <div class="q-mt-sm"><img src="~assets/facebook.png" alt=""></div>
            <div class="q-mt-sm"><img src="~assets/google-plus-square.png" alt=""></div> -->
            <div class="q-mt-sm q-pa-sm"><q-btn label="Login" color="black"/></div>
          </div>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

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

<script>
export default {
  name: 'PageIndex',
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
