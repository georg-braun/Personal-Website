---
title: "Svelte: Use a key expression to reflect data changes to the correct list item"
date: 2022-11-16
tags: ["sveltekit"]
---

# The problem 

I recently created a little time tracker app with svelte and had some problems to update the correct list items. In the following picture I illustrate the situation.

![remove of array element isn't refleced in the ui list item](./images/svelte-each-no-diff.excalidraw.png)

The removal of an array element results in wrong list items. The item 3 got the progress of item 2.

# The solution

The removal of the array element removes a list item at the end. But it should diff the list items with the corresponding array elements.

After reading the following in the docs I had the solution.

*If a key expression is provided — which must uniquely identify each list item — Svelte will use it to diff the list when data changes, rather than adding or removing items at the end.*

I had to provide a key expression to match the list items with array elements.

```svelte
{#each topics as topic (topic.id)}    
    <Topic data={topic} />
{/each}

```