const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
    createProxyMiddleware({
        target: process.env.DOMAIN_PROXY || 'https://my.doopage.com', 
        changeOrigin: true, 
        ws: true,
        pathRewrite: {
      
        },
        router: {
      
        },
      })
);

app.listen(process.env.PORT || 3000);