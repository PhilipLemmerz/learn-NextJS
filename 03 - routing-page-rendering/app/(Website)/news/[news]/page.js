import { DUMMY_NEWS } from "@/dummy-news"
import Link from "next/link";

export default function NewsDetailPage({ params }) {
    const news = DUMMY_NEWS.find(news => news.slug === params.news);
    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${news.slug}/images`}>  <img src={`/images/news/${news.image}`} alt={news.slug} /> </Link>
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
    )
}