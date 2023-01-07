export async function load({params}){
    console.log(params)
    const post = await import(`../../../lib/blog/${params.slug}.md`)
    const { title, date } = post.metadata;
    const content = post.default

    return {
        content,
        title,
        date
    }
}