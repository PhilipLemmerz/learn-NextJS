function BlogPost(prop) {
    const param = prop.params.slug

    return (
        <main>
            <h1>Blog Post</h1>
            <p>{param}</p>
        </main>
    )
}
 
export default BlogPost