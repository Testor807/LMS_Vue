<!-- src/views/Home.vue -->
<template>
    <div>
      <h1>Home Page</h1>
      <button @click="goToAbout">Go to About</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToAbout() {
        console.log("Button clicked!");
        this.$router.push('/about'); // 使用 this.$router.push 來導航
      },
    },
  };
  </script>