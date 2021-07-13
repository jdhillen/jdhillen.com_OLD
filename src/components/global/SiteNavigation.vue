<!--|== Template =============================================================================== -->
<template>
  <nav id="nav" class="nav">
    <div class="nav__links">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <Hamburger class="nav__ham" />
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
    return {};
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

  methods: {},

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 50px;
  background-color: black(0.8);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__links {
    @media (max-width: 750px) {
      display: none;
    }
  }

  &__ham {
    @media (min-width: 750px) {
      display: none;
    }
  }
}
</style>
