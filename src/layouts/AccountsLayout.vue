<template>
  <q-layout class="background fullscreen">
    <q-page-container class="">
      <q-page>
        <div class="logo">
          <img src="~assets/BorrowMyAngel-Logo.png" alt="" class="q-pt-xl">
        </div>
        <div class="content">
          <transition name="accounts" mode="out-in">
            <router-view :key="$route.name" />
          </transition>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
  .background {
    background-image: url('~assets/bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    height: calc(100vh - 250px);
  }

  .accounts {
    &-enter-active,
    &-leave-active {
      transition: all 250ms ease-in-out;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(50px);
    }
  }
</style>
