<template>
  <q-layout class="background fullscreen">
    <div class="logo">
      <img src="~assets/BorrowMyAngel-Logo.png" alt="" class="q-pt-xl">
    </div>
    <q-page-container class="">
    <q-page padding class="row justify-center">
      <div class="full-width text-center fixed-bottom q-mb-xl">
        <q-btn label="SIGN UP" color="black" class="q-mr-sm my-sm-btn" size="1em"/>
        <q-btn
          :to='{ name: "Login" }'
          label="LOGIN"  color="black" class="q-ml-sm my-sm-btn" size="1em"/>
        <br><br>
        <q-btn :to='{ name: "Chat" }'
               label="REQUEST AN ANGEL" color="red-10" size="1em"/>
      </div>
    </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {

};
</script>

<style>
  .background {
    background-image: url('~assets/bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .logo img {
    width: 100%;
    max-height: 250px;
  }
  h5 {
    font-size: 1.2em;
    color: #8C81CC;
  }
  .main {
    padding-bottom: 1.5em;
  }
  .sub-sub {
    padding-bottom: 2em;
    border: 1px solid transparent
  }
  ul {
  list-style-type: none;
  }
</style>
