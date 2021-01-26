<template>
  <div id="app">
    <span>{{this.$store.state.name}}</span>
    <span>{{this.$store.getters.name2}}</span>
    <div>
      <button @click="change">改变name</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    change() {
      // this.$store.commit("setName", "yixin");
      this.$store.dispatch("setAsyncName", "yixin");
    }
  }
};
</script>

<style>
</style>
