<!--|== Template =============================================================================== -->
<template>
  <MetaData :data="metaData" />
  <section class="page work">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Work</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import MetaData from '@/components/global/MetaData.vue';

export default {
  name: 'work-page',

  props: {},

  components: {
    MetaData
  },

  data() {
    return {
      metaData: {
        title: 'Work',
        description: 'This is the description for the Work page',
        image: 'https://via.placeholder.com/1500x780'
      }
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

  methods: {},

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.work {
}
</style>
