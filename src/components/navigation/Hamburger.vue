<!--|== Template =============================================================================== -->
<template>
  <div ref="ham" class="ham">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
  name: 'hamburger',

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

  methods: {
    toggle() {
      this.$refs.ham.classList.toggle('active');
    }
  },

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.ham {
  position: absolute;
  top: 0;
  right: 8px;
  width: 50px;
  height: 50px;
  cursor: pointer;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 2px;
    transition: all 250ms ease-in-out;
    -moz-transition: all 250ms ease-in-out;
    -webkit-transition: all 250ms ease-in-out;
    background: $white;

    &:nth-child(1) {
      top: 30%;
    }

    &:nth-child(2) {
      top: 50%;
    }

    &:nth-child(3) {
      top: 70%;
    }
  }

  &.active {
    span:nth-child(1) {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
