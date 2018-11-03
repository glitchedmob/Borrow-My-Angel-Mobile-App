<template>
  <q-layout class="background fullscreen">
    <div class="logo">
      <img src="~assets/BorrowMyAngel-Logo.png" alt="" class="q-pt-xl">
    </div>
    <q-page-container class="">
    <q-page padding class="row justify-center">
      <div class="full-width text-center fixed-bottom q-mb-xl">
        <q-btn @click="signUp" label="SIGN UP" color="black" class="q-mr-sm my-sm-btn" size="1em"/>
        <q-btn
        :to='{ name: "Login" }'
        label="LOGIN"  color="black" class="q-ml-sm my-sm-btn" size="1em"/>
        <br><br>
        <q-btn label="REQUEST AN ANGEL" @click="requestAngel" color="red-10" size="1em"/>

        <q-dialog
          v-model="customeDialogModel"
        >
        </q-dialog>
      </div>
    </q-page>
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
    requestAngel() {
      this.$q.dialog({
        title: 'Alert',
        message: 'Modern HTML5 front-end framework on steroids.',
      });
    },
  },
};
</script>
