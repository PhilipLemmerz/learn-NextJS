import Link from "next/link"

function BlogPage() {
    return (
        <main>
            <h1> Our Blog</h1>
            <p><Link href="/blog/post-1">Unser erster Post</Link></p>
            <p><Link href="/blog/post-2">Unser zweiter Post</Link></p>
        </main>
    )
}


export default BlogPage