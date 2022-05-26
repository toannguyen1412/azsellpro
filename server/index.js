const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
    createProxyMiddleware({
        target: 'https://my.doopage.com', 
        changeOrigin: true, 
        ws: true,
        pathRewrite: {
      
        },
        router: {
      
        },
      })
);

app.listen( 3000);