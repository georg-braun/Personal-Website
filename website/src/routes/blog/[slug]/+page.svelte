<script>
    import Icon from "@iconify/svelte"
    import dayjs from "dayjs"
    export let data;
    console.log(data)
</script>

<div class="post-title">
    <h2>{data.title}</h2>
    {dayjs(data.date).format("MMM D, YYYY")}
</div>

<div class="coffee-tag">
    &lt;
    <Icon icon="bxs:coffee"/>
    &gt;
</div>

<svelte:component this={data.content} />
<div class="coffee-tag">
    &lt;/
    <Icon icon="bxs:coffee"/>
    &gt;
</div>
<style>
    .coffee-tag{
        text-align: center;
        margin: 30px 0px;
        opacity: 40%;
    }
    .post-title{
        background-color: #E5E9F0;

        text-align: center;
        padding: 20px;
    }

</style>