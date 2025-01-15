<template>
    <div>
      <h2>회원가입</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">이름</label>
          <input type="text" id="name" v-model="form.name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">이메일</label>
          <input type="email" id="email" v-model="form.email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">비밀번호</label>
          <input type="password" id="password" v-model="form.password" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">전화번호</label>
          <input type="text" id="phone" v-model="form.phone" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="birthdate" class="form-label">생년월일</label>
          <input type="date" id="birthdate" v-model="form.birthdate" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">주소</label>
          <input type="text" id="address" v-model="form.address" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">회원가입</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          phone: '',
          birthdate: '',
          address: ''
        }
      };
    },
    methods: {
      async submitForm() {
        console.log('회원가입 버튼 클릭됨');
        try {
          const response = await axios.post('https://localhost:4001/signup', this.form);
          console.log(response);
          if (response.data.id) {
            alert('회원가입 성공');
            this.$router.push('/login');
          } else {
            alert('회원가입 실패: ' + response.data.error);
          }
        } catch (error) {
          console.error('회원가입 요청 실패:', error);
          alert('회원가입에 실패했습니다.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 스타일은 필요에 따라 추가 */
  </style>
  