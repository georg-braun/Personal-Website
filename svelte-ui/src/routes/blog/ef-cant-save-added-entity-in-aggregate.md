---
title: "EF: Can't save added entity in aggregate/entity"
date: 2022-09-01
tags: ["entity-framework"]
---

I recently encountered the following problem while saving some data changes with entity framework: 

*Exception: The database operation was expected to affect 1 row(s), but actually affected 0 row(s); data may have been modified or deleted since entities were loaded*

## Some context

My data structure looked something like this:

```csharp
class Vehicle {
    Guid Id { get; init; }
    string Name { get; init; }  
    List<ActionTemplate> ActionTemplates { get; init; }
}

class ActionTemplate {
    Guid Id { get; init; }
    string Name { get; init; }
    // ...
}
```

A `Vehicle` has references to multiple `ActionTemplate`s.


In my application code I wanted to add a new `ActionTemplate` to an existing vehicle.

```csharp 
public static async Task<IResult> AddActionTemplate(AddActionTemplateCommand command, VehicleContext context)
{
    // Get the existing vehicle
    var vehicleId = new Guid(command.VehicleId);
    var vehicle = await context.Vehicles.FindAsync(vehicleId);

    // Add a new action template
    // sidenote: This method also generates a new guid for the action template
    vehicle.AddActionTemplate(command.Name, command.KilometerInterval, command.TimeInterval);

    // Update the vehicle
    context.Vehicles.Update(vehicle);
    
    await context.SaveChangesAsync();

    return Results.Created($"/vehicle/{vehicle.VehicleId}", vehicle);
}
```

With calling `context.SaveChangesAsync` I got the above mentioned exception.


## The problem and solution

With some debugging and research I figured out that the new created and (to the vehicle entity) added `ActionTemplate` had an `EntityState.Modified` state.  A call of `SaveChangesAsync` resulted in an SQL UPDATE statement. This was a problem because the new entity should had a `EntityState.Added` state.

But why the newly created `ActionTemplate` didn't get the `Added` state? I found the answer in this article:
https://docs.microsoft.com/en-us/ef/core/what-is-new/ef-core-3.x/breaking-changes#detectchanges-honors-store-generated-key-values

*Starting with EF Core 3.0, if an entity is using generated key values and some key value is set, then the entity will be tracked in the Modified state.*

# 😯

In my application the `ActionTemplate.Id` was set to a new guid by application code and the entity default key generation wasn't modified. 

The solution was fairly easy. I just needed to tell the DbContext that the `ActionTemplate.Id` shouldn't be a generated key.

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);
    
    // The ActionTemplate Id isn't auto generated. This specification is important because otherwise
    // modifications of the action templates in the vehicle aggregate aren't detected by ef
    // further information: https://docs.microsoft.com/en-us/ef/core/what-is-new/ef-core-3.x/breaking-changes#detectchanges-honors-store-generated-key-values
    modelBuilder.Entity<ActionTemplate>().Property(at => at.Id).ValueGeneratedNever();
}
```