<template>
    <q-layout class="fullscreen">
      <q-page class="flex flex-center">
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
              <div class=" row justify-center">
                <q-btn @click="openNextScreen" label="Next" size="md" color="black"/>
              </div>
            </q-modal-layout>
          </q-modal>
          <q-modal v-model="emergencyModal" minimized content-css="padding: 25px">
            <q-modal-layout>
              <div class="main column items-center">
                <h5>IS YOUR LIFE IN DANGER?</h5>
                <p>If your life is in danger, <strong>call</strong>
                  <font color="red"> 911</font> or other emergency responders in your area.</p>
              </div>
              <div class="row justify-center">
                <q-btn @click="openNonEmergencyModal" label="OK" size="md" color="black"/>
              </div>
            </q-modal-layout>
          </q-modal>
          <q-modal v-model="nonEmergencyModal" minimized content-css="padding: 25px">
            <q-modal-layout>
              <div class="main row justify-center">
                <div class="row">
                  <h5>WHATS GOING ON?</h5>
                </div>
                <div class="sub-sub">
                  <q-item class="column items-start">
                    <q-radio
                        v-model="option"
                        v-for="situation in situations"
                        :key="situation.id"
                        :label="situation.title"
                        :val="situation.value"
                    />
                  </q-item>
                </div>
                <div class>
                  <q-btn @click="closeModal" label="OK" size="md" color="black"/>
                </div>
              </div>
            </q-modal-layout>
          </q-modal>
        </q-page-container>
      </q-page>
    </q-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'PageIndex',
  data() {
    return {
      moodLevelModal: true,
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
        this.nonEmergencyModal = !this.nonEmergencyModal;
      } else {
        this.emergencyModal = !this.emergencyModal;
      }
    },
    openMoodLevelModal() {
      this.moodLevelModal = !this.moodLevelModal;
    },
    openNonEmergencyModal() {
      this.nonEmergencyModal = !this.nonEmergencyModal;
      this.openMoodLevelModal();
    },
    closeModal() {
      this.nonEmergencyModal = false;
      this.moodLevelModal = false;
      this.emergencyModal = false;
    },
    ...mapMutations('chat', ['setMoodLevel']),
  },
};

</script>

<style>
    body {
        background-color: #8C9EFF;
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
