const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
    createProxyMiddleware({
        target: 'https://app.chatwoot.com', 
        changeOrigin: true, 
        ws: true,
        pathRewrite: {
      
        },
        router: {
      
        },
      })
);

app.listen(80);