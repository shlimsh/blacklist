<template>
    <div>
      <h1>Protected Page</h1>
      <p>Welcome to the protected page!</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    async mounted() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/protected', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);
      } catch (error) {
        alert('Access denied');
        this.$router.push('/login');
      }
    },
  };
  </script>
  