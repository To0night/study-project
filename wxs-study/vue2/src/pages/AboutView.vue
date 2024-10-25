<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="clickHandle">点我改变（commit）store的值</button>
    <button
      style="margin-left: 10px;"
      @click="dispatchHandle"
    >点我改变（dispatch）store的值</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  },
  methods: {
    clickHandle() {
      this.$store.commit("increment", 123123);
    },
    dispatchHandle() {
      setTimeout(() => {
        this.$store.dispatch("increment", 123123);
      }, 1000);
    }
  }
};
</script>
