---
title: "Make an ASP.NET service available in LAN"
date: 2022-11-29
tags: ["asp.net"]
---

My current project is programming a tic-tac-toe web game to learn more about signalR. The tech-stack contains an ASP.NET backend and a separate hosted svelte frontend.

The development and tests on my local machine ("dev-desktop") worked like a charm. I also could access the frontend from another computer ("dev-laptop") without any problems.  But I encountered problems as I tried to access the backend from another computer. The frontend wasn't able to get the necessary backend connection.

In the following picture I illustrate the scenario:

![System overview](./images/2022-make-asp-net-accessible-in-lan/make-asp-net-accessible-in-lan.excalidraw.png)

After some investigation and experiments I came to the following solution how to access the backend from another computer.


**1.) Modify the backend `launchSettings.json` to listen to an IP address that is reachable**
```json
"profiles": {
    "Server": {
      ...
      // 0.0.0.0 => all IPv4 addresses on the local machine
      // I could also use 192.168.178.80
      // But for portability to other development machines I use the former.
      "applicationUrl": "http://0.0.0.0:5246;...",      
    },
```

**2.) Explicit allow the incoming TCP Port of the backend**

Windows was blocking the ASP.NET backend port 5246. Although I tried it with a deactivated firewall, it was necessary to explicity allow the incoming TCP Port 5246.

**3.) Maybe deactivate https redirection or trust the certificate**

In my development setup I use a http connection (e.g. in the application url). An activated https redirection could make some problems because the provided certifcate may not be trusted. Therefore I temporarily commented `app.UseHttpsRedirection()` out. Otherwise it's possible to explicit trust the provided certificate.


**Caution.** This setup is just intended for development / test purposes.
