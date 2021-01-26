<template>
  <div id="app">
    <span>{{this.$store.state.name}}</span>
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
      console.log(this.$store);
      this.$store.commit("setName", "yixin");
    }
  }
};
</script>

<style>
</style>
