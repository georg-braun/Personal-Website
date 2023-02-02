---
title: "C#: Await or return task in method that uses disposable objects"
date: 2023-02-02
tags: ["csharp"]
lab: dotnet-lab/async/return-task-vs-await
---

I recently saw a video of Nick Chapsas about [Settling the Biggest Await Async Debate in .NET](https://www.youtube.com/watch?v=aaC16Fv2zes). One topic was the usage of `await` vs returning a task in a method that deals with disposable objects. In this post I summarize the topic in my own words.

# Introduce the scenario

Assume there are two methods that executes async code. Both define a disposable object with `using var`. But they are different in how they handle the "async code".

```csharp
Console.WriteLine("Scenario 1:");
Console.WriteLine("Call a method. This method defines a disposable object. This method also executes async code. But in the method the code is not awaited. It just returns the task object.");
Console.WriteLine("Start");
await disposeAndReturnTaskCanLeadToProblems();
Console.WriteLine("End");

Task disposeAndReturnTaskCanLeadToProblems()
{
    using var aDisposableObject = new DisposableClass();
    return AsyncStuff.DoHeavyWorkAndLogIfFinishedAsync();
}
```

```csharp
Console.WriteLine("Scenario 2:");
Console.WriteLine("This time the called method invokes the same async methods. But this time async methods are awaited.");
Console.WriteLine("Start");
await disposeAndAwaitAndEverythingIsInCorrectOrder();
Console.WriteLine("End");

async Task disposeAndAwaitAndEverythingIsInCorrectOrder()
{
    using var aDisposableObject = new DisposableClass();
    await AsyncStuff.DoHeavyWorkAndLogIfFinishedAsync();
}
```

# The result

The console output shows the problem.
```
Scenario 1:
Call a method. This method defines a disposable object. This method also executes async code.But in the method the code is not awaited. It just returns the task object.
Start
I dispose some things. This should happen after all work is done.
Task delay started.
Task delay ended.
End
--------
Scenario 2:
This time the called method invokes the same async methods. But this time async methodsare awaited.
Start
Task delay started.
Task delay ended.
I dispose some things. This should happen after all work is done.
End
```

The possible problem is that in the first scenario the object is disposed before the async code is finished. 

# Why it's disposed in the first scenario?

Look at the translated code and you can the reason.

```csharp
    DisposableClass disposableClass = new DisposableClass();
    try
    {
      // The task is returned immediately. Therefore the object is also disposed before the task is finished. 
      return AsyncStuff.DoHeavyWorkAndLogIfFinishedAsync();
    }
    finally
    {
      if (disposableClass != null)
        disposableClass.Dispose();
    }
```