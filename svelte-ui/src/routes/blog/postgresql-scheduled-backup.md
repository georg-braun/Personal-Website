---
title: "PostgreSQL scheduled backup with crontab and pg_dump"
date: 2022-06-17
tags: ["postgresql", "devops"]
---


In my new project cashflow I use a PostgreSQL database to persist the data. This data is the main asset of the application. 

Therefore it's necessary to run a scheduled backup to avoid data loss.
But it's only a hobby project and in the beginning, I just want to have a simple solution.

I added a cron job at my virtual private server that hosts my project docker container. This job just creates a dump of the database using a postgres container with `pg_dump`. Nothing more.

```bash
sudo apt install cron
sudo systemctl enable cron
crontab -e

// add backup statement
// if timestamps like %d are used, you have to escape them with \ => \%d
0 4 * * * docker run -i postgres /usr/bin/pg_dump postgres://<user>:<password>@<host>:<port>/<database> > <directory>/dump-"`date +"\%d-\%m-\%Y-\%H-\%M"`".sql

crontab -l
```

This creates a dump of my database at 4 a.m.

Consider:
- A dump isn't encrypted
- Old dumps aren't deleted (growing disk usage)