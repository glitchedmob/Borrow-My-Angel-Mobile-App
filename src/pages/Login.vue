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
      <div class="q-mt-sm q-pa-sm">
        <q-btn label="Login" color="black" @click="login"/>
      </div>
    </div>
    <div class="row justify-around">
      <div class="q-mt-sm q-pa-sm">
        <q-btn flat label="Back" color="black" :to="{ name: 'Landing' }"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
// import qs from 'qs';

export default {
  name: 'PageIndex',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      const url = `${process.env.BASE_URL}/users/login`;

      this.$axios.post(url, {
        email: this.email,
        password: this.password,
      }).then((res) => {
        if (res.status === 200) {
          this.setToken({ token: res.data.token });
          this.$router.push({ name: 'UserHome' });
        }
      });
    },
    ...mapMutations('user', ['setToken']),
  },
};
</script>

<style>
</style>
