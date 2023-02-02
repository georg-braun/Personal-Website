---
title: "C#: Await or return task in method that uses disposable objects"
date: 2023-02-02
tags: ["csharp"]
lab: dotnet-lab/async/return-task-vs-await
---

I recently saw a video of Nick Chapsas about [Settling the Biggest Await Async Debate in .NET](https://www.youtube.com/watch?v=aaC16Fv2zes). One topic was the usage of `await` vs returning a task in a method that deals with disposable objects. In this post I summarize the topic in my own words.

# Introduce the scenario

Assume you have the following code.

```csharp
// Scenario 1: Return the task.
Task scenarioDisposableObjectReturnTask()
{
    using var aObject = new DisposableClass();
    return AsyncStuff.DoAsyncStuff();
}

// Scenario 2: Await the task.
async Task scenarioDisposableObjectAwaitTask()
{
    using var aObject = new DisposableClass();
    await AsyncStuff.DoAsyncStuff();
}
```

What do you think happens with the disposable object? Does it still exist while the async code is executed?

We can take a look at the execution of the code (showed by console outputs).

```csharp
Console.WriteLine("Start");
await scenarioDisposableObjectReturnTask();
Console.WriteLine("End");

/*
Output:
    Start
    I dispose some things. This should happen after all work is done.
    Task delay started.
    Task delay ended.
    End
*/

Console.WriteLine("Start");
await scenarioDisposableObjectAwaitTask();
Console.WriteLine("End");

/*
Output:
    Start
    Task delay started.
    Task delay ended.
    I dispose some things. This should happen after all work is done.
    End
*/


// ---------- DETAILS ----------

// Only necessary to show the dispose event.
class DisposableClass : IDisposable
{
    public void Dispose()
    {
        Console.WriteLine("I dispose some things. This should happen after all work is done.");
    }
}

// Do something async
internal static class AsyncStuff
{ 
    public static Task DoAsyncStuff()
    {
        return Task.Run(async () =>
        {
            Console.WriteLine("Task delay started.");
            await Task.Delay(5000);
            Console.WriteLine("Task delay ended.");
        });
    }
}
```

In the first scenario (*return the task*) the object could be disposed when the async code gets executed.
I think this is not obvious to everyone during development.


# Why it's disposed in the first scenario?

Look at the translated code and you can see the reason.

```csharp
DisposableClass disposableClass = new DisposableClass();
try
{
    // The task is returned immediately... 
    return AsyncStuff.DoAsyncStuff();
}
finally
{
    // ... therefore the object is also disposed before the task is finished.
    if (disposableClass != null)
    disposableClass.Dispose();
}
```