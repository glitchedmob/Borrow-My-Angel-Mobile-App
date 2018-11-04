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
        label="LOGIN" color="black" class="q-ml-sm my-sm-btn" size="1em"/>
        <br><br>
        <q-btn label="REQUEST AN ANGEL" @click="openMoodLevelModal" color="red-10" size="1em"/>
      </div>
      <q-page-container>
        <q-modal v-model="moodLevelModal" minimized content-css="padding: 25px">
          <q-modal-layout>
            <div class="main column items-center">
              <q-modal-layout header-style="min-height: 10px">
                <h5>HOW ARE YOU FEELING?</h5>
              </q-modal-layout>
              <div class="sub column">
                <p>1 is the worst</p>
                <p>10 is the best</p>
              </div>
              <div class="row justify-center">
              <template v-for="index in 10" >
                <template v-if="index <= moodLevel">
                  <img
                    class="q-mx-xs"
                    :key="index"
                    src="assets/filledHeart.png"
                    alt="hearts"
                    @click="setMoodLevel(index)"
                  >
                </template>
                <template v-else>
                  <img
                    class="q-mx-xs"
                    :key="index"
                    src="assets/emptyHeart.png"
                    alt="hearts"
                    @click="setMoodLevel(index)"
                  >
                </template>
              </template>
              </div>
            </div>
            <div class=" row justify-end">
                <q-btn @click="openNextScreen" label="Next" size="md" color="black"/>
            </div>
          </q-modal-layout>
        </q-modal>
        <q-modal v-model="emergencyModal" minimized content-css="padding: 25px">
          <q-modal-layout>
              <h5>IS YOUR LIFE IN DANGER?</h5>
              <p>If your life is in danger, <strong>call</strong>
              <font color="red"> 911</font> or other emergency responders in your area.</p>
              <div class="row justify-center">
                <q-btn @click="openNextScreen" label="Next" size="md" color="black"/>
              </div>
          </q-modal-layout>
        </q-modal>
        <q-modal v-model="nonEmergencyModal" minimized content-css="padding: 25px">
          <q-modal-layout>
            <h5>WHATS GOING ON?</h5>
          </q-modal-layout>
        </q-modal>
    </q-page-container>
    </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'PageIndex',
  data() {
    return {
      moodLevelModal: false,
      nonEmergencyModal: false,
      emergencyModal: false,
      image: 'assets/emptyHeart.png',
    };
  },
  computed: {
    ...mapState('chat', ['moodLevel']),
  },
  methods: {
    openNextScreen() {
      if (this.moodLevel >= 6) {
        this.emergencyModal = !this.emergencyModal;
        this.openMoodLevelModal();
      } else {
        this.nonEmergencyModal = !this.nonEmergencyModal;
        this.openMoodLevelModal();
      }
    },
    openMoodLevelModal() {
      this.moodLevelModal = !this.moodLevelModal;
    },
    ...mapMutations('chat', ['setMoodLevel']),
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
