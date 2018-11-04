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
        <q-btn label="REQUEST AN ANGEL" :to='{ name: "Chat" }' color="red-10" size="1em"/>
      </div>
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
      situations: [
        {
          id: 1,
          title: 'I\'m Feeling Sad',
          value: 'sad',
        },
        {
          id: 2,
          title: 'I\'m Having A Rough Day',
          value: 'rough day',
        },
        {
          id: 3,
          title: 'Mental Abuse',
          value: 'Mental Abuse',
        },
        {
          id: 4,
          title: 'Substance Abuse',
          value: 'Substance Abuse',
        },
        {
          id: 5,
          title: 'Physical Abuse',
          value: 'physical Abuse',
        },
        {
          id: 6,
          title: 'Other',
          value: 'other',
        },
      ],
      option: '',
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
  .sub-sub {
    padding-bottom: 2em;
    border: 1px solid transparent
  }
  ul {
  list-style-type: none;
  }
</style>
