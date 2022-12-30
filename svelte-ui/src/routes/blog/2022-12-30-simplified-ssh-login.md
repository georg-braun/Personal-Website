---
title: "Simplified SSH login"
date: 2022-12-30
tags: ["ssh"]
---

I can simplify the ssh login to my virtual private server to
```bash
ssh droplet
```

instead of

```bash
ssh georg@ip-of-my-vps-i-have-to-remember
```

I just have to add the `config` file to the `.ssh` directory with the following content
```
Host droplet
HostName 121.15.410.158
User georg
IdentityFile ~/.ssh/droplet_id_rsa
```