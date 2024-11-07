<!-- src/views/About.vue -->
<template>
    <div>
      <h1>About Page</h1>
      <button @click="goToHome">Go to Home</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToHome() {
        this.$router.push('/'); // 使用 this.$router.push 來導航
      },
    },
  };
  </script>