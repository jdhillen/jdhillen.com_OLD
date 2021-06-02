<!--|== Template =============================================================================== -->
<template>
  <div class="app">
    <SiteNavigation />
    <router-view />
    <SiteFooter />
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import SiteNavigation from './components/global/SiteNavigation.vue';
import SiteFooter from './components/global/SiteFooter.vue';

export default {
  name: 'app',

  props: {},

  components: {
    SiteNavigation,
    SiteFooter
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
<style lang="scss">
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
