<script>
    import "./post.css"
    import dayjs from "dayjs"
    let { data } = $props();
</script>

<div class="post-title">
    <h2>{data.title}</h2>
    {dayjs(data.date).format("MMM D, YYYY")}
</div>

<div class="coffee-tag">
    &lt;
    <iconify-icon icon="lucide:coffee"></iconify-icon>
    &gt;
</div>
<div class="post">
    <data.content />
</div>
<div class="coffee-tag">
    &lt;/
    <iconify-icon icon="lucide:coffee"></iconify-icon>
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