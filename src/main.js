import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '10b37897-fb44-4b9a-9b81-0c74c23b9c1a',
    clientToken: 'pub5184a98c600b3d5e2c6bbdff3c551686',
    site: 'datadoghq.com',
    service: 'shlim-front',
    env: 'dev',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
    allowedTracingUrls: ["http://localhost","https://localhost"],
});

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
