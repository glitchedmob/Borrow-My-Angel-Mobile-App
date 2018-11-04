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
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'PageIndex',
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {
    ...mapState('angel', ['token']),
  },
  methods: {
    async login() {
      const url = `${process.env.BASE_URL}/angels/login`;

      const loginRes = await this.$axios.post(url, {
        email: this.email,
        password: this.password,
      });

      if (loginRes.status !== 200) return;

      this.setToken({ token: loginRes.data.token });

      console.log(this.token);

      const userRes = await this.$axios({
        method: 'get',
        url: `${process.env.BASE_URL}/angels/me`,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      this.setStatus({ status: userRes.data.status });

      this.$router.push({ name: 'AngelChatList' });
    },
    ...mapMutations('angel', ['setToken', 'setStatus']),
  },
};
</script>

<style>
</style>
