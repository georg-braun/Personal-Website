---
title: "Entity Framework: dotnet ef commands are failing because DbContext and connection configuration are in different projects"
date: 2023-03-12
tags: ["csharp", "entity-framework"]

---
You have a solution where you have a web api and you access the database with entity framework.
Given you have structured your solution like the following:

```
Solution
	Project: WebApi
		Configuration like ConnectionString
	Project: Infrastructure
		DbContext (Entity Framework)
```

The database access (`DbContext`) and the configuration how to access a specific database (connection string) are in two different projects.

To create a migration you navigate to the project **containing the `DbContext`** and execute the follwoing command

```bash
cd ./Infrastructure
dotnet ef migrations add "initial"

// Result
Build started...
Build succeeded.
Unable to create an object of type '[]Context'. For the different patterns supported at design time, see https://go.microsoft.com/fwlink/?linkid=851728
```

The tool tries to check the current status and create a migration. Therefore it tries to *start* the solution and obtain more information about the database it tries to create a migration for (e.g. it's necessary to know which data types are supported by the concerte database technology).

But you get an error message because the Infrastructure project doesn't anything about a concrete database. This information is managed in the WebApi Project.

Therefore you have to provide an information about the startup project:
```bash
dotnet ef --startup-project=../WebApi migrations add "initital"
```

With that information the tool knows more about the database and how to create a migration.


Source: 
- https://learn.microsoft.com/en-us/ef/core/cli/dotnet#target-project-and-startup-project