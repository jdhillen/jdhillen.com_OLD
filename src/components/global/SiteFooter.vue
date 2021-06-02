<!--|== Template =============================================================================== -->
<template>
  <footer class="footer">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </footer>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
  name: 'site-footer',

  props: {},

  components: {},

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
footer {
  width: 100%;
  padding: 25px 0;
  background-color: black(0.8);
  text-align: center;
}
</style>
