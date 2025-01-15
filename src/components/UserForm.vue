<template>
    <div class="container py-5">
      <h1 class="text-center text-primary mb-4">사용자 추가</h1>
      <form @submit.prevent="submitUserForm">
        <div class="form-group mb-3">
          <label for="name">이름</label>
          <input v-model="name" type="text" class="form-control" id="name" required />
        </div>
        <div class="form-group mb-3">
          <label for="password">비밀번호</label>
          <input v-model="password" type="password" class="form-control" id="password" required />
        </div>
        <div class="form-group mb-3">
          <label for="email">이메일</label>
          <input v-model="email" type="email" class="form-control" id="email" required />
        </div>
        <div class="form-group mb-3">
          <label for="phone">전화번호</label>
          <input v-model="phone" type="tel" class="form-control" id="phone" required />
        </div>
        <div class="form-group mb-3">
          <label for="birthdate">생년월일</label>
          <input v-model="birthdate" type="date" class="form-control" id="birthdate" required />
        </div>
        <div class="form-group mb-3">
          <label for="address">주소</label>
          <input v-model="address" type="text" class="form-control" id="address" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">사용자 추가</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        name: "",
        password: "",
        email: "",
        phone: "",
        birthdate: "",
        address: "",

      };
    },
    methods: {
      async submitUserForm() {
        try {
          const userData = {
            name: this.name,
            password: this.password,
            email: this.email,
            phone: this.phone,
            birthdate: this.birthdate,
            address: this.address,
          };
  
          await axios.post("https://localhost:4001/users", userData);
          alert("사용자가 추가되었습니다.");
          window.close();
        } catch (error) {
          console.error("사용자 추가 실패:", error);
          alert("사용자 추가에 실패했습니다.");
        }
      },
    },
  };
  </script>
  