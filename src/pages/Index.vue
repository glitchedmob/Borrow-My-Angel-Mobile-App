<template>
  <q-layout class="background fullscreen">
    <div class="logo">
      <img src="~assets/BorrowMyAngel-Logo.png" alt="">
    </div>
    <q-page-container class="">
    <q-page padding class="row justify-center">
      <div class="full-width text-center fixed-bottom q-mb-xl">
        <q-btn label="SIGN UP" color="black" class="q-mr-sm my-sm-btn" size="1em"/>
        <q-btn label="LOGIN"  color="black" class="q-ml-sm my-sm-btn" size="1em"/>
        <br><br>
        <q-btn label="REQUEST AN ANGEL" color="red-10" size="1em"/>
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
};
</script>
