---
title: "GitHub Action: Add git commit id to docker image tag"
date: 2023-01-02
tags: ["docker", "github-action"]
---

It's super easy to tag and upload an docker image with the commit id of the current build.
If you use the `actions-hub/docker/cli@master` action you just have to use the predefined environment variable `github.sha`.

```
    - name: Tag built container
      uses: actions-hub/docker/cli@master
      with:
      args: tag tictactoeserver:1.0.0 registry.hub.docker.com/myname/tictactoeserver:${{ github.sha }}
```

With this approach I know on which commit the image is based on.
