const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');


const options = {
  target: 'https://my.doopage.com', 
  changeOrigin: true, 
  ws: true,
  pathRewrite: {
    '/app/auth': '/login-by-password'
  },
  router: {

  },
};

const app = express();
app.use(createProxyMiddleware(options));
app.listen(3000);