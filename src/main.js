// eslint-disable-next-line vue/multi-word-component-names
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: '10b37897-fb44-4b9a-9b81-0c74c23b9c1a',
  clientToken: 'pub5184a98c600b3d5e2c6bbdff3c551686',
  site: 'datadoghq.com',
  service: 'shlim-front',
  env: 'dev',
  version: '1.0.1',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  allowedTracingUrls: ["http://localhost", "https://localhost"],
});

datadogRum.setUser({
    id: 'static', // 사용자 ID
    name: '홍길동', // 사용자 이름
    email: 'shlim@metanet.co.kr', // 사용자 이메일
  });


// Vue Router 임포트
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // router/index.js에서 설정한 Vue Router 임포트

// Bootstrap CSS 불러오기
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue 애플리케이션에 Vue Router 사용
createApp(App)
  .use(router)  // Vue Router 사용
  .mount('#app');

  // 타이틀 설정
document.title = '❗❗블랙리스트 관리❗❗';