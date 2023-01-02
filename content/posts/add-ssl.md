---
title: "给自己的网站添加ssl证书"
date: 2022-12-22
tags: [技术分享,ssl]
keywords: "ssk证书, 自建网站"
---
## SSL/TLS通用模型
![](https://oss.vanguo.tech/blog/dev/Pasted%20image%2020221227171012.png)

## TLS如何保证传输的数据是加密的?

- 非对称加密：客户端与服务端交换密钥，验证身份
- 验证身份的算法是RSA
- 对称加密：AES_128_GCM

![](https://oss.vanguo.tech/blog/dev/Pasted%20image%2020221227171125.png)

## CA如何颁发证书?

- 证书订阅人就是网站的维护者，CA机构颁发证书
- 订阅人拿到公钥和私钥以后上传到服务器
- 依赖方就是浏览器，当访问https服务时，浏览器需要验证证书是否合法
- CA会把过期的证书放在CRL、OCSP服务器中。

![](https://oss.vanguo.tech/blog/dev/Pasted%20image%2020221227171501.png)

>浏览器通过验证**站点颁发根证书发行者的有效性**来确认对方是否为可信赖的对象。

## 证书类型

- DV(Domain validated)域名验证证书
- OV(organization validated)组织验证证书
- EV(extended validated)扩展验证证书



## 用免费SSL证书实现HTTPS站点

- 在阿里云官网申请ssl证书
![](https://oss.vanguo.tech/blog/dev/Pasted%20image%2020221222102252.png)
注意：每个年度只能领取20个免费证书

- 创建证书，并添加将要加密的域名
![](https://oss.vanguo.tech/blog/dev/Pasted%20image%2020221222102705.png)

- 随后在域名管理台中可以看到阿里云自动添加了一条解析
![](https://oss.vanguo.tech/blog/dev/Pasted%20image%2020221222102940.png)

- 在ssl证书页面下载秘钥
- 将`.pem`以及`.key`文件上传至服务端
- 修改nginx配置文件，重启nginx

```nginx
    server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name  _;
        root         /usr/share/nginx/html;

        ssl_certificate "/root/server.pem";
        ssl_certificate_key "/root/server.key";
        
        location / {
                proxy_pass http://localhost:9000;
        }
    }
```

注意：免费证书只能签发单域名，子域名不会生效！
