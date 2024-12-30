<template>
  <div id="app" class="container py-5">
    <h1 class="text-center text-black mb-4">☠️블랙리스트 관리☠️</h1>
    
    <!-- 귀여운 강아지 이미지 -->
    <div class="text-center mb-4">
      <img 
        src="https://images.unsplash.com/photo-1560807707-8cc77767d783" 
        alt="귀여운 강아지" 
        class="img-fluid rounded"
        style="max-width: 25%; height: auto;" />
    </div>

    <!-- 사용자 추가 버튼 -->
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-6 col-lg-4">
        <button @click="openUserForm" class="btn btn-light-blue w-100">🎎 사용자 추가</button>
      </div>
    </div>

    <!-- 네이버 로그인 섹션 -->
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-6 col-lg-4">
        <button @click="redirectToNaverLogin" class="btn btn-success w-100">
          💚 네이버 로그인
        </button>
      </div>
    </div>

    <!-- 사용자 조회 버튼 -->
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-6 col-lg-4">
        <button @click="toggleUserList" class="btn btn-light-green w-100">
          {{ showUsers ? "사용자 숨기기" : "🔍 사용자 조회" }}
        </button>
      </div>
    </div>

    <!-- 사용자 목록 -->
    <div v-if="showUsers">
      <h2 class="text-center mb-4">사용자 목록</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div class="col mb-3" v-for="user in users" :key="user.id">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title" style="font-size: 16px;">{{ user.name }}</h5>
              <p class="card-text">이메일: {{ user.email }}</p>
              <p class="card-text">비밀번호: {{ user.password }}</p>
              <p class="card-text">전화번호: {{ user.phone }}</p>
              <p class="card-text">생년월일: {{ user.birthdate }}</p>
              <p class="card-text">주소: {{ user.address }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 날짜와 시간 표시 -->
    <div class="datetime">
      <p>현재 날짜와 시간: {{ datetime }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createApp } from "vue";
import UserForm from "@/components/UserForm.vue"; // UserForm 컴포넌트 임포트

export default {
  data() {
    return {
      users: [],
      showUsers: false, // 사용자 목록 표시 여부
      datetime: "", // 현재 날짜와 시간
      datetimeInterval: null, // 시간 갱신 타이머
    };
  },
  methods: {
    // 사용자 추가 폼을 새 창으로 열기
    openUserForm() {
      const userFormWindow = window.open('', '사용자 추가', 'width=600,height=700');

      // 새 창에 Vue 앱을 마운트할 div 요소 추가
      userFormWindow.document.write('<div id="app"></div>');
      userFormWindow.document.close();

      // 새 창에서 Vue 앱을 초기화하고, UserForm 컴포넌트를 마운트
      const app = createApp(UserForm);
      app.mount(userFormWindow.document.getElementById('app'));
    },

    // 사용자 목록 조회
    async loadUsers() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        this.users = response.data;
      } catch (error) {
        console.error("사용자 조회 실패:", error);
      }
    },

    // 사용자 목록 표시 토글
    toggleUserList() {
      if (!this.showUsers) {
        this.loadUsers();
      }
      this.showUsers = !this.showUsers;
    },

    // 현재 날짜와 시간 업데이트
    updateDateTime() {
      const now = new Date();
      this.datetime = now.toLocaleString();
    },

    // 네이버 로그인 리디렉션
    redirectToNaverLogin() {
      const redirectUrl = "https://www.naver.com/";
      const naverLoginUrl = `https://nid.naver.com/nidlogin.login?mode=form&url=${encodeURIComponent(
        redirectUrl
      )}`;
      window.location.href = naverLoginUrl;
    },
  },
  created() {
    this.updateDateTime();
    this.datetimeInterval = setInterval(this.updateDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.datetimeInterval);
  },
};
</script>

<style scoped>

.datetime {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
}


/* Main content 스타일링 */
main {
  background-color: #f9f9f9;
  padding: 20px;
}

/* 제목 색상 변경 */
h1 {
  color: black; /* 텍스트 색상을 검정색으로 설정 */
}

/* 이미지 스타일링 */
img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.btn-light-blue {
  background-color: #add8e6; /* 연한 파란색 */
  border: 1px solid #7ec8e6;
}

.btn-light-blue:hover {
  background-color: #7ec8e6; /* hover 시 더 진한 파란색 */
}

.btn-light-green {
  background-color: #b3e6b3; /* 연한 초록색 */
  border: 1px solid #99d699;
}

.btn-light-green:hover {
  background-color: #99d699; /* hover 시 더 진한 초록색 */
}

</style>



