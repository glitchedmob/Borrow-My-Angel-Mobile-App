<template>
  <div class="column q-mx-md q-mt-md justify-center full-height">
    <div>
      <q-field>
        <q-input
            class="q-ma-xs"
            v-model="name"
            inverted-light
            color="white"
            float-label="Name"
        />
      </q-field>
      <q-field >
        <q-input
            class="q-ma-xs"
            v-model="email"
            inverted-light
            color="white"
            float-label="Email"
        />
      </q-field>
    </div>
    <div class="row no-wrap q-pa-none">
      <q-field class="col">
        <q-input
            class="col q-ma-xs"
            v-model="password"
            inverted-light
            color="white"
            type="password"
            float-label="Password"
        />
      </q-field>
      <q-field class="col">
        <q-input
            class="q-ma-xs"
            v-model="confirmPassword"
            inverted-light
            color="white"
            type="password"
            float-label="Confirm"
        />
      </q-field>
    </div>
      <!-- flex row these inputs three per line  -->
    <div class="row no-wrap q-pa-none">
      <q-field class="col-4">
        <q-input
          class="q-ma-xs"
          v-model="city"
          inverted-light
          color="white"
          float-label="City"
        />
      </q-field>
      <q-field class="col-4">
        <q-input
          class="q-ma-xs"
          v-model="state"
          inverted-light
          color="white"
          float-label="State"
        />
      </q-field>
      <q-field class="col-4">
        <q-input
          class="q-ma-xs"
          v-model="zip"
          type="text"
          inverted-light
          color="white"
          float-label="Zip"
        />
      </q-field>
      <!-- end of three -->
    </div>
    <div class="row no-wrap q-pa-none">
      <q-field class="col">
        <q-input
          class="q-ma-xs"
          v-model="age"
          type="number"
          inverted-light
          color="white"
          float-label="Age"
        />
      </q-field>
      <div class="col">
        <q-select
          class="q-ma-sm q-pa-auto"
          v-model="gender"
          :options="genderOptions"
          inverted-light
          color="white"
          float-label="Gender"
        />
      </div>
    </div>
    <q-field>
      <q-input
        class="q-ma-xs"
        v-model="phone"
        inverted-light
        color="white"
        float-label="Phone Number"
      />
    </q-field>
    <div class="row justify-around">
      <!-- <div class="q-mt-sm"><img src="~assets/facebook.png" alt=""></div>
      <div class="q-mt-sm"><img src="~assets/google-plus-square.png" alt=""></div> -->
      <div class="q-mt-sm q-pa-sm">
        <q-btn label="Sign Up" color="black" @click="signUp" />
      </div>
    </div>
    <div class="row justify-around">
      <div class="q-mt-sm q-pa-sm">
        <q-btn label="Back" color="" flat :to="{ name: 'Landing' }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    state: '',
    zip: '',
    age: null,
    gender: null,
    genderOptions: [
      {
        label: 'Female',
        value: 'female',
      },
      {
        label: 'Male',
        value: 'male',
      },
      {
        label: 'Non-binary',
        value: 'non_binary',
      },
    ],
    phone: '',
  }),
  methods: {
    signUp() {
      const url = `${process.env.BASE_URL}/angels/signup`;
      this.$axios.post(url, {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        city: this.city,
        state: this.state,
        zip: this.zip,
        age: this.age,
        gender: this.gender,
      }).then((res) => {
        if (res.status === 200) {
          this.$router.push({ name: 'AngelLogin' });
        } else {
          console.log({ res });
        }
      });
    },
  },
};

</script>

<style>
</style>
