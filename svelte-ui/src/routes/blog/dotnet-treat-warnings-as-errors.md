---
title: "Treat warnings as errors in your .NET project"
date: 2022-09-03
tags: [".net"]
---

One of the first things I do after I created a new .NET project is to add the following property to the project files:

```csharp
<PropertyGroup>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>    
</PropertyGroup>
```

There are a lot of warnings that indicate possible sources of error. One example is the following one:

```csharp
public void RemoveActionTemplate(Guid actionTemplateId)
{
    var actionTemplate = ActionTemplates.FirstOrDefault(_ => _.Id.Equals(actionTemplateId));
            
    // There is no gurantee that there is actionTemplate.
    // At runtime the following would crash.
    // Thank you build warning :)

    actionTemplate.Name = "New value";
}
```

Without the "treat warnings as errors" property I may have overlooked this. But now I`m forced to look at those warnings/errors.