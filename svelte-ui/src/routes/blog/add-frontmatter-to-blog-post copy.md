---
title: "Svelte: notify outer components about changes"
date: 2022-08-08
tags: ["svelte"]
---

# The first approach
I built a focus app with svelte and one aspect is that an outer component gets notified from an inner component about events that occur. For example: the timer component (inner) informs the main-app component (outer) about a finished timer. 

My first implementation used an injected callback. The inner component would call this callback. 


```svelte
    // File: App.svelte
    
	<Timer
        onSessionFinished={sessionFinished} />
```
```svelte
    // File: Timer.svelte
    <script>
        export let onSessionFinished;
    </script>
    ...
        onSessionFinished();
    ...
```

It does the job.

# Use svelte events

But then I read an article about svelte events and remembered the svelte event pattern. After that I refactored my focus app and tried this approach. 

The inner component dispatches an event (`dispatch`) that is consumed by the outer component (`on:eventName`). 

```svelte
// File: App.svelte

<Timer
    on:sessionFinished={sessionFinished} />
```
```svelte
// Timer.svelte
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

...
    dispatch("sessionFinished")
...
```

In my opinion this is a cleaner solution because the nature of an event is more prominent. 

Sidenote: It's also possible to supply arguments to an event.
```svelte
dispatch("countdown", {
        minutes: remainingMinutes,
        seconds: remainingSeconds
    })
```
