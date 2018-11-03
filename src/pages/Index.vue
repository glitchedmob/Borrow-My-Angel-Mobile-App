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
        <q-btn label="REQUEST AN ANGEL" @click="doReload" color="red-10" size="1em"/>
      </div>
      <q-page-container>
        <q-modal class="row q-ma-none" v-model="openModal" minimized content-css="padding: 25px">
          <main id="modal" class="modalBackground">
            <h5>HOW ARE YOU FEELING TODAY?</h5>
            <div class="q-pt-none">
              <p>1 is the worst</p>
              <p>10 is the best</p>
            </div>
            <template v-for="index in 10" >
              <template v-if="index + 1 <= moodLevel">
                <img
                  :key="index"
                  src="assets/filledHeart.png"
                  alt="hearts"
                  @click="setMoodLevel(index + 1)"
                >
              </template>
              <template v-else>
                <img
                  :key="index"
                  src="assets/emptyHeart.png"
                  alt="hearts"
                  @click="setMoodLevel(index + 1)"
                >
              </template>
            </template>
          </main>
        </q-modal>
    </q-page-container>
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
  .logo img {
    width: 100%;
    max-height: 250px;
  }
  h5 {
    font-size: 1.2em
  }
  /* .modalBackground {
    background-image: url('~assets/bgModal.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  } */
</style>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      openModal: true,
      image: 'assets/emptyHeart.png',
      moodLevel: 0,
    };
  },
  methods: {
    doOpenModal() {
      this.openModal = !this.openModal;
    },
    doReload() {
      window.location.reload();
      this.doOpenModal();
    },
    setMoodLevel(index) {
      this.moodLevel = index;
    },
  },
};
</script>
