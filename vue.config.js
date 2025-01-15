const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const fs = require('fs');

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('C:\\Users\\Metanet\\backend\\cert\\private.key'),
      cert: fs.readFileSync('C:\\Users\\Metanet\\backend\\cert\\certificate.crt'),
    },
    port: 48080, // 기본 HTTPS 포트
  },
};

