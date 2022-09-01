---
title: "Show entity information in Entity Framework Core"
date: 2022-09-01
tags: ["entity-framework"]
---

The DbContext offers some possibilites to inspect the state of entities.

## Information about single entity

`context.Entry(someEntity)`

- `Entity`: The data object ActionTemplate
- `State`: Detached, Unchanged, Modified, ...
- `DebugView`: In a long or short version. Information about the entity datastructure and state


## Information about multiple tracked entities

`context.ChangeTracker.DebugView`

Offers a view of tracked entities. There exists a short- and long-view.

Example of a long-view: 
```
ActionTemplate {ActionTemplateId: 28829787-9f97-4797-becb-e9106c29f917} Unchanged
  ActionTemplateId: '28829787-9f97-4797-becb-e9106c29f917' PK
  KilometerInterval: 1000
  Name: 'BMW R1100S'
  VehicleId: '293dbcf2-2b8b-433d-be69-657585abfe11' FK
Vehicle {VehicleId: 293dbcf2-2b8b-433d-be69-657585abfe11} Unchanged
  VehicleId: '293dbcf2-2b8b-433d-be69-657585abfe11' PK
  Kilometer: 39000
  Name: 'BMW R1100S'
  ActionTemplates: [{ActionTemplateId: 28829787-9f97-4797-becb-e9106c29f917}]
```