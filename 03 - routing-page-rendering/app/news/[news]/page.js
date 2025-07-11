import { DUMMY_NEWS } from "@/dummy-news"

export default function NewsDetailPage({ params }) {
    const news = DUMMY_NEWS.find(news => news.slug === params.news);
    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${news.image}`} alt={news.slug} />
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
    )
}