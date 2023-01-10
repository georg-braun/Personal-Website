---
title: "Show commit id in ASP.NET project at runtime"
date: 2023-01-01
tags: ["asp.net"]
---

Recently I wanted to add the commit id to an ASP.NET build to inspect the id during runtime.

One simple way was to extend the project file (`.csproj`) so that a file called `current-commit.txt` is written. This file contains the commit id of the current git head. Furthermore this file is copied to the output and publish directory.

```csharp
<Target Name="create file with commit id" BeforeTargets="Build">
    <!-- Get the current git commit id and write a file -->
    <Exec Command="git rev-parse HEAD > current-commit.txt" />
</Target>
<ItemGroup Condition="Exists('$(ProjectDir)current-commit.txt')" >
    <Content Include="$(ProjectDir)current-commit.txt">
        <CopyToPublishDirectory />
        <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </Content>
</ItemGroup>
```

From there the file and the contained commit id it can be accessed during runtime. In my project I created a little service that reads the commit id.

```csharp
public static void AddVersionInfo(this WebApplicationBuilder builder)
{
    try
    {
        const string gitCommitFileName = "current-commit.txt";
        var gitCommitId = "undefined";
        
        if (File.Exists(gitCommitFileName))
            gitCommitId = File.ReadAllText(gitCommitFileName);

        builder.Services.AddSingleton(new VersionInfo {GitCommitId = gitCommitId});

    }
    catch (Exception e)
    {
        Console.WriteLine(e);
        throw;
    }
}
```

# Conclusion

With this approach it's fairly easy to get the commit id the running instance is based on. 

But a downside is, that this information is only accessible during runtime. It would be nice to add the commit id as direct property of the project.