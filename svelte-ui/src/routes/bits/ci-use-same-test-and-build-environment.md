---
title: "Use the same environment for test and building"
date: 2022-01-24
tags: ["continuous-integration", "docker"]
---
# Starting a new project
After reworking my website, I was searching for a new hobby project. I wanted to use technologies I don't use very often so that I can learn more about them. Furthermore, I wanted to create a service that helps me in my daily life.

The result is a new project where I`ll build a budget app with an ASP.NET API hosted within a Kubernetes cluster. 

# The roadmap
The plan is to start with the backend and create a decent API. I don't want to waste time and energy at the start in designing a user interface. So the development of UI is shifted to the end of the project. 

My first goal is to create a walking skeleton, so the rough plan looks something like this:
- create a basic simple API (ASP.NET default template)
- add continuous integration
- create kn8 cluster
- add deployment pipeline
- health check

After this, it's possible to concentrate on application development without struggling with test and deployment issues. 

# Adding continuous integration

Last weekend I created a [GitHub repository](https://github.com/georg-braun/budget), created a simple API project (*hi weatherforecast* 👋), and started with the creation of a docker image for the API. 

The docker file looked like this
```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Copy source files to the image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["budget-backend/budget-backend.csproj", "budget-backend/"]
RUN dotnet restore "budget-backend/budget-backend.csproj"
COPY . .
WORKDIR "/src/budget-backend"
# build the project
RUN dotnet build "budget-backend.csproj" -c Release -o /app/build

# publish
FROM build AS publish
RUN dotnet publish "budget-backend.csproj" -c Release -o /app/publish

# only use the necessary stuff in the resulting image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "budget-backend.dll"]
```
To add continuous integration I created a GitHub Action that had two jobs:
- Job 1: build the backend solution -> run tests
- Job 2: build docker image and upload it to DockerHub


I finished work and proudly checked the "add continuous integration" task.

# A few hours later

But a few hours later I thought: "*Hmm, I build the API twice, and in different environments, that's not cool.*" First, the API is built and tested with the GitHub Action environment, and after that, the API is built during docker image generation. 

![Bugs are found in test environment but not in production build environment](images/ci-different-test-build-environment.png)

A possible scenario could be: the test environment detected a bug in a dependency but the production build environment doesn't get that information. The result could be a bug in the production artifact.

Therefore I removed Job 1 and added this small line to the dockerfile
```
...
RUN dotnet test
...
```

Now I know that the resulting binary is tested and built in the same environment.