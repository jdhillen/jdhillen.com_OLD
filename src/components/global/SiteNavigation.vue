<!--|== Template =============================================================================== -->
<template>
  <nav id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <Hamburger />
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
nav {
  width: 100%;
  padding: 25px 0;
  background-color: black(0.8);
  text-align: center;
}
</style>
