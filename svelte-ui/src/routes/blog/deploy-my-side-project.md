---
title: "Deploy my side project"
date: 2022-06-17
tags: ["devops"]
---

### I wan't to deploy my side project
In the last few weeks I developed a litte web app to track my income, spendings and analyse the cashflow. The app consists of a svelte frontend, ASP.NET Core API, PostgreSQL database. 

I developed it locally and didn't have an automated deployment process to any production system. My first goal was to create a walking skeleton including the deployment. 

But I delayed this task because I wanted to use kubernetes for deployment to learn more about it. 

### Learn kubernetes (k8s) with minikube
After I created my first versions of the app I learnt more about k8s and deployed my app in a local minikube. I had some drawbacks but I think this was part of the k8s learning curve. 

At this point I had a app with the first simple features that got deployed locally. 

### Deploy the app to a real k8s cluster
Then I wanted to deploy the app (backend) to a real cluster. The creation of a little managed cluster is easy. There are a lot of providers. Deploying the app container on a pod was easy, too. 

But the problem begun as I tried to get traffic to this pod. I had a ingress controller but was missing a load balancer as entry point to the cluster. At this point the monthly cluster costs were about 15€. With an additional load balancer it would be about 20-25€ each month. This was too much money for just hosting little side projects.

The whole deployment and cluster configuration process slowed me down. My idea to use k8s was to learn more about it and refresh my old knowledge. I got a basic understanding of the topic and stopped at this point.

### Deploy the app. Really.

In reality the app doesn't need to run in a cluster. If it's necessary in the future I can do this. But at the moment it's just not necessary (YAGNI).

To keep it simple and cheap I created and configured a virtual private server (vps) at digital ocean, added docker, setup a reverse proxy with nginx and added a certificate to support https.

![The reverse proxy routes the traffice to the side projects](images/vps-side-projects.excalidraw.png)

With this setup I can just log in to the vps and start the app container. 

Now I can concentrate on developing new features or other side projects and don't have hassle with the deployment. Maybe I will automate the deployment process in future (continuous deployment), but at the moment this is not necessary. 

