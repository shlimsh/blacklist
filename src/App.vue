<template>
  <div id="app">
    <h1>Vue.js + Node.js</h1>
    <p>Message from Backend: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Loading...',
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000');
      this.message = await response.text();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>
