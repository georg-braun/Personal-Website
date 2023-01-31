---
title: "C# 11: Raw string literal (use arbitrary text in string)"
date: 2023-01-31
tags: ["csharp"]
csharpVersion: 11
lab: dotnet-lab/datatype/string/raw-string-literal/raw-string-literal
---

Easy usage of arbitrary text in a string literal.

Structure:
- Start with at least `"""` (3x) 
- (*Optional*) new line
- String content with arbitrary text
- End with the same amount of double quotes

```csharp
// Without variable  
Console.WriteLine("""  
{ "name": "Georg"} 
"""); 
// { "name": "Georg"}   

// With variable  
const string name = "Georg";  
Console.WriteLine($$"""{ "name": "{{name}}"} """);  
// { "name": "Georg"}
```

If the string content should containt more than three double quoutes you have to incerement the start and end part with respective more double quotes.
```csharp
// Use double quotes  
Console.WriteLine(""""{ """name""": ""Georg""} """");
```