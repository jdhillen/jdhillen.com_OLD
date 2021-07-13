<!--|== Template =============================================================================== -->
<template>
  <nav id="nav" class="nav">
    <div class="nav__main">
      <div class="nav__logo">
        <router-link :to="{ name: 'Home' }">Logo</router-link>
      </div>
      <div class="nav__desktop">
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Work' }">Work</router-link>
      </div>
    </div>
    <Hamburger ref="hamburger" class="nav__ham" @click="toggleNav" />
    <div ref="mobileNav" class="nav__mobile bokeh">
      <router-link :to="{ name: 'Home' }" @click.native="toggleNav()"
        >Home</router-link
      >
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
import Hamburger from '../navigation/Hamburger.vue';

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
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  &__logo,
  &__desktop {
    a {
      text-transform: uppercase;
      color: $white;
      padding: 0 10px;
    }
  }

  &__logo {
    color: $white;
  }

  &__desktop {
    flex: 1;
    text-align: right;

    @media (max-width: 750px) {
      visibility: hidden;
      display: none;
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
