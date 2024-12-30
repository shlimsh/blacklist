<template>
    <div class="container py-5">
      <h1 class="text-center text-primary mb-4">사용자 추가</h1>
      <form @submit.prevent="submitUserForm">
        <div class="form-group mb-3">
          <label for="name">이름</label>
          <input v-model="name" type="text" class="form-control" id="name" required />
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
        email: "",
        phone: "",
        birthdate: "",
        address: "",
      };
    },
    methods: {
      // 사용자 정보 전송
      async submitUserForm() {
        try {
          // 서버에 사용자 정보 전송
          const userData = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            birthdate: this.birthdate,
            address: this.address,
          };
  
          // 여기서 POST 요청을 통해 사용자 정보를 서버에 전송합니다.
          await axios.post("http://localhost:3000/users", userData);
  
          // 정보가 성공적으로 제출되었으면 창을 닫음
          alert("사용자가 추가되었습니다.");
          window.close(); // 새 창을 닫습니다.
        } catch (error) {
          console.error("사용자 추가 실패:", error);
          alert("사용자 추가에 실패했습니다.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* 스타일을 추가할 수 있습니다. */
  </style>
  