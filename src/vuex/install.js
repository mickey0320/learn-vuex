export let Vue;
function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      // 根实例
      if (this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    },
  });
}

export default install;
