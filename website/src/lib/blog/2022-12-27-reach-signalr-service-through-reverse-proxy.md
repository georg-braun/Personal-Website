---
title: "Reach SignalR service through reverse proxy"
date: 2022-12-27
tags: ["asp.net", "nginx", "reverse-proxy"]
---

Today I deployed a hobby project (simple tic-tac-toe game) for the first time. But I had a problem. The frontend could not establish a websocket connection to the backend.

In my local tests everything worked fine. 

But this time the backend is hosted on my virtual private server (VPS) that serves some of my projects. This VPS has a nginx reverse proxy that routes the traffic to the desired service. I had the intuition that some reverse proxy configuration is missing to establish a connection via websocket.

After some research I found the solution: My nginx reverse proxy configuration for the tic-tac-toe app missed the following customization:
```bash
# Be able to upgrade the established connection to an other protocol (e.g. https -> websockets)
proxy_set_header Upgrade $http_upgrade;

# Keep the connection open
proxy_set_header Connection $http_connection;
```

Lessons learned:
- Set missing headers in the nginx configuration
- Deploy earlier :) 