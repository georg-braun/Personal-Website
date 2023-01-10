---
title: "SvelteKit: Refresh a page after the slug changed with afterNavigate"
date: 2022-11-01
tags: ["svelktekit"]
---

When I create a svelte component and want to fetch some data I mostly use the `onMount` lifecycle method.
In my recent created maintenance buddy project I had a scenario where the user can navigate to the same page with a different slug. The problem was that the page didn't update.

The following route displays details about a specific vehicle.

```
/src/routes/vehicles/[vehicleId]/+page.svelte

Example: https://maintenance-buddy.georg-braun.de/vehicles/072424ac-ceb7-4ff9-ba39-98931b15778c
```

The code to refresh the vehicles had the following structure

```svelte
<script>
	onMount(async () => {
        await refreshVehicle();
    })
</script>
```
# Why the selection of a new vehicle didn't work

The Id of the route changed but the details of the vehicle didn't. The problem was that the `onMount` didn't execute because it was still the same page and a new mount wasn't necessary.

# The solution

After some research I found a pretty simple solution. I just had to substitute the `onMount` with `afterNavigate`.
With a new `slug` the page doesn't change and the `onMount` isn't suitable to trigger a refresh. But the `afterNavigate` is triggered and I could refresh the vehicle data :)

```svelte
<script>
	afterNavigate(async () => {
        await refreshVehicle();
    })
</script>
```