---
title: "C#: Caller member attributes"
date: 2023-02-03
tags: ["csharp"]
lab: dotnet-lab/attributes/caller-attributes
---

In C# you can use the `Caller*` attribute to a method parameter to get more information about the calling method.
Here I show examples for 
- `[CallerMemberName]` 
- `[CallerFilePath]` 
- `[CallerLineNumber]` 
- `[CallerArgumentExpression("<parameter-name>")` 

```csharp
Console.WriteLine("Call with anonymous value");
Print("Hello");
Console.WriteLine("-----------------");

Console.WriteLine("Call with variable");
var v = "variable Hello";
Print(v);
Console.WriteLine("-----------------");

Console.WriteLine("Call with expression");
Print($"Hello {2+4}");


void Print(string message, 
    [CallerMemberName] string callerMemberName = default,
    [CallerFilePath] string callerFilePath = default,
    [CallerLineNumber] int callerLineNumber = default, 
    [CallerArgumentExpression("message")] string expression = default
)
{
    Console.WriteLine($"Called this method with '{message}' from {callerMemberName}.");
    Console.WriteLine($"Which is defined in {callerFilePath}.");
    Console.WriteLine($"The call is defined in line {callerLineNumber}.");
    Console.WriteLine($"The calling method used for the parameter 'message' the following expression '{expression}'.");  
}
```

The output:

```
Call with anonymous value
Called this method with 'Hello' from <Main>$.
Which is defined in /Users/gbraun/Repositories/dotnet-lab/dotnet-lab/attributes/caller-attributes/Program.cs.
The call is defined in line 5.
The calling method used for the parameter 'message' the following expression '"Hello"'.
-----------------
Call with variable
Called this method with 'variable Hello' from <Main>$.
Which is defined in /Users/gbraun/Repositories/dotnet-lab/dotnet-lab/attributes/caller-attributes/Program.cs.
The call is defined in line 10.
The calling method used for the parameter 'message' the following expression 'v'.
-----------------
Call with expression
Called this method with 'Hello 6' from <Main>$.
Which is defined in /Users/gbraun/Repositories/dotnet-lab/dotnet-lab/attributes/caller-attributes/Program.cs.
The call is defined in line 14.
The calling method used for the parameter 'message' the following expression '$"Hello {2+4}"'.
```