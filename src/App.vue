<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <!-- 사이드바 영역 -->
      <nav class="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                카테고리 1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                카테고리 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                카테고리 3
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                카테고리 4
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- 메인 콘텐츠 영역 -->
      <main role="main" class="col-md-9 ms-sm-auto col-lg-10 px-4">
        <h1 class="text-center text-primary mb-4">☠️블랙리스트 관리☠️</h1>
        <!-- 사용자 추가 버튼 -->
        <div class="row justify-content-center mb-4">
          <div class="col-12 col-md-6 col-lg-4">
            <button @click="openUserForm" class="btn btn-light w-100">🎎 사용자 추가</button>
          </div>
        </div>

        <!-- 네이버 로그인 섹션 -->
        <div class="row justify-content-center mb-4">
          <div class="col-12 col-md-6 col-lg-4">
            <button @click="redirectToNaverLogin" class="btn btn-success-light w-100">
              💚 네이버 로그인
            </button>
          </div>
        </div>

        <!-- 사용자 조회 버튼 -->
        <div class="row justify-content-center mb-4">
          <div class="col-12 col-md-6 col-lg-4">
            <button @click="toggleUserList" class="btn btn-info-light w-100">
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
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
      window.open("/user-form", "사용자 추가", "width=600,height=700");
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
/* Sidebar 스타일링 */
.sidebar {
  background-color: #f8f9fa;
  position: sticky;
  top: 0;
  height: 100vh;
  padding-top: 20px;
}

.sidebar .nav-item {
  margin-bottom: 10px;
}

.sidebar .nav-link {
  color: #333;
  font-weight: 500;
}

.sidebar .nav-link.active {
  background-color: #007bff;
  color: white;
}

/* Main content 스타일링 */
main {
  background-color: #f9f9f9;
  padding: 20px;
}

/* 버튼 색상 */
.btn-light {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
}

.btn-light:hover {
  background-color: #e2e2e2;
}

.btn-success-light {
  background-color: #b0e57c;
  border: 1px solid #9acd5f;
}

.btn-success-light:hover {
  background-color: #9acd5f;
}

.btn-info-light {
  background-color: #b3d9ff;
  border: 1px solid #80b3ff;
}

.btn-info-light:hover {
  background-color: #80b3ff;
}

/* 날짜와 시간 스타일링 */
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

.card-body {
  font-size: 14px;
}
</style>
