---
title: "nginx笔记"
date: 2022-12-27
tags: [笔记]
keywords: ""
---

## 搭建一个具备缓存功能的反向代理服务

假设有一个上游服务`localhost:8080`，不对公网提供服务，选择用nginx代理该如何做？

```nginx
	upstream local {
		server 127.0.0.1:8080
	}
	server {
		server_name test.com;
		listen       80;
		location / {
				# 传给客户端真实的服务端地址
				proxy_set_header Host $host;
				# 传给upstream服务器 客户端真实ip地址
				proxy_set_header X-Real-IP $remote_addr;
				proxy_pass http://local;
		}
	}
```

上游服务提供动态服务，而为了加快静态链接访问速度，将剩余资源留给动态服务。使用静态资源缓存nginx将使用到模块[http_proxy](https://nginx.org/en/docs/http/ngx_http_proxy_module.html)

```nginx
	http{
		proxy_cache_path /data/nginx/cache levels=1:2 keys_zone=my_cache:10m;
		server {
			location / {
				proxy_cache my_cache;
				proxy_cache_key $scheme$proxy_host$uri$is_args$args;
				# 返回码以及缓存时间
				proxy_cache_valid 200 302 10m;
			}
		}
	}
	
	
```