<script>

    import dayjs from "dayjs"
    export let data;
    console.log(data)
</script>

<div class="post-title">
    <h2>{data.title}</h2>
    {dayjs(data.date).format("MMM D, YYYY")}
</div>

<svelte:component this={data.content} />

<style>
    .post-title{
        height: 100px;

        background-color: #E5E9F0;

        text-align: center;
        padding: 20px;
    }

</style>