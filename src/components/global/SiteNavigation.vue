<!--|== Template =============================================================================== -->
<template>
  <nav id="nav" class="nav">
    <div class="nav__main">
      <div class="nav__logo">
        <router-link :to="{ name: 'Home' }">
          <div class="nav__logo--img"></div>
        </router-link>
      </div>
      <div class="nav__desktop">
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Work' }">Work</router-link>
      </div>
    </div>
    <Hamburger ref="hamburger" class="nav__ham" @click="toggleNav" />
    <div ref="mobileNav" class="nav__mobile bokeh">
      <router-link :to="{ name: 'About' }" @click.native="toggleNav()"
        >About</router-link
      >
      <router-link :to="{ name: 'Work' }" @click.native="toggleNav()"
        >Work</router-link
      >
    </div>
  </nav>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import Hamburger from '@/components/navigation/Hamburger.vue';

export default {
  name: 'site-navigation',

  props: {},

  components: {
    Hamburger
  },

  data() {
    return {
      toggle: false
    };
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeUnmount() {},

  unmounted() {},

  computed: {},

  methods: {
    toggleNav() {
      this.$refs.mobileNav.classList.toggle('active');
      this.$refs.hamburger.toggle();
    }
  },

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.nav {
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  background-color: black(0.8);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__main {
    position: relative;
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    margin: 0 10px;
  }

  &__logo {
    width: 30px;
    height: 30px;
    position: absolute;
    top: -5px;
    left: 0;

    &--img {
      width: 30px;
      height: 30px;
      background-image: url('/src/assets/img/logos/square.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }

  &__desktop {
    flex: 1;
    text-align: right;

    @media (max-width: 750px) {
      visibility: hidden;
      display: none;
    }

    a {
      font-family: 'Open Sans Regular';
      color: $white;
      text-transform: uppercase;

      padding: 0 10px;
    }
  }

  &__ham {
    z-index: 100;

    @media (min-width: 750px) {
      visibility: hidden;
    }
  }

  &__mobile {
    display: flex;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black(0.5);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 250ms ease-in-out;
    z-index: 90;

    @media (min-width: 750px) {
      visibility: hidden;
      opacity: 0;
    }

    &.active {
      visibility: visible;
      opacity: 1;

      @media (min-width: 750px) {
        visibility: hidden;
        opacity: 0;
      }
    }

    a {
      color: $white;
      text-transform: uppercase;
      font-size: 4rem;
      line-height: 4rem;
      font-family: 'Open Sans Bold';
      padding: 5px 0;
    }
  }
}
</style>
