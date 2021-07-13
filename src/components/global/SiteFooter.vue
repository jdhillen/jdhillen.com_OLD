<!--|== Template =============================================================================== -->
<template>
  <footer class="footer">
    <div class="footer__social">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <ul v-if="social">
              <li v-for="(item, index) in social" :key="index">
                <a :href="item.url" target="_blank" :alt="item.name">
                  <font-awesome-icon
                    :icon="['fab', `${item.icon}`]"
                    class="footer__icon"
                  />
                </a>
              </li>
              <li v-if="contact">
                <a :href="'mailto:' + contact.email + '?subject=Hello'">
                  <font-awesome-layers full-width class="footer__icon">
                    <font-awesome-icon icon="envelope" />
                    <span
                      class="fa-layers-counter"
                      style="background: Tomato; right: -3px"
                      >1</span
                    >
                  </font-awesome-layers>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <div class="footer__copyright--txt">
              Made with
              <a href="https://vuejs.org/" target="_blank">
                <div class="icon icon__vue"></div>
              </a>
              by J.D. Hillen
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import { mapState } from 'vuex';

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

  computed: {
    ...mapState(['contact', 'social'])
  },

  methods: {},

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.footer {
  width: 100%;
  text-align: center;

  &__social {
    text-align: center;
    padding: 10px 0;
    background-color: black(0.7);

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        padding: 0 10px;
        display: inline;

        a {
          color: white(0.75);
          transition: 300ms color;

          &:hover {
            color: $white;
          }
        }
      }
    }
  }

  &__copyright {
    text-align: center;
    padding: 25px 0;
    background-color: black(0.8);

    &--txt {
      font-family: 'Open Sans Light';
      font-size: 8px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: $white;
    }
  }
}
</style>
