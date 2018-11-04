<template>
    <div class="full-width text-center q-mb-xl column justify-between content">
      <div></div>
      <div>
        <q-btn
          :to="{ name: 'Signup' }"
          label="SIGN UP"
          color="black"
          class="q-mr-sm my-sm-btn"
          size="1em"
        />
        <q-btn
          :to="{ name: 'Login' }"
          label="LOGIN"
          color="black"
          class="q-ml-sm my-sm-btn"
          size="1em"
        />
        <br><br>
        <q-btn
          :to="{ name: 'UserChat' }"
          label="REQUEST AN ANGEL"
          color="red-10"
          size="1em"
        />
        <br><br>
        <router-link
          :to="{ name: 'AngelSignup' }"
          class="angel-signup-link"
        >
          Angel Signup
        </router-link>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
  .angel-signup-link {
    font-size: 1.2rem;
    color: #FFFFFF;
    font-weight: bold;
    text-decoration none;
  }

  .main {
    padding-bottom: 1.5em;
  }

  .sub-sub {
    padding-bottom: 2em;
    border: 1px solid transparent
  }
</style>
