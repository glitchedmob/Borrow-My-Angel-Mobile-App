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
        <q-modal class="" v-model="openModal" minimized content-css="padding: 25px">
          <q-modal-layout>
            <div class="main row justify-center">
              <q-modal-layout header-style="min-height: 10px">
                <h5>HOW ARE YOU FEELING?</h5>
              </q-modal-layout>
              <div class="sub column">
                <p>1 is the worst</p>
                <p>10 is the best</p>
              </div>
              <div class="row justify-center">
              <template v-for="index in 10" >
                <template v-if="index + 1 <= moodLevel">
                  <img
                    class="q-mx-xs"
                    :key="index"
                    src="assets/filledHeart.png"
                    alt="hearts"
                    @click="setMoodLevel(index + 1)"
                  >
                </template>
                <template v-else>
                  <img
                    class="q-mx-xs"
                    :key="index"
                    src="assets/emptyHeart.png"
                    alt="hearts"
                    @click="setMoodLevel(index + 1)"
                  >
                </template>
              </template>
              </div>
            </div>
            <div class=" row justify-end">
                <q-btn size="md" color="black">
                  Next
                </q-btn>
            </div>
          </q-modal-layout>
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
    font-size: 1.2em;
    color: #8C81CC;
  }
  .main {
    padding-bottom: 1.5em;
  }
  .sub {
    padding-bottom: 2em;
  }
</style>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'PageIndex',
  data() {
    return {
      openModal: true,
      image: 'assets/emptyHeart.png',
    };
  },
  computed: {
    ...mapState('chat', ['moodLevel']),
  },
  methods: {
    doOpenModal() {
      this.openModal = !this.openModal;
    },
    doReload() {
      window.location.reload();
      this.doOpenModal();
    },
    ...mapMutations('chat', ['setMoodLevel']),
  },
};
</script>
