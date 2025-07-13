import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list/news-list";

export default function LatestPage() {
    const latestNews = getLatestNews();
    return (
        <>
            <h1>Latest News</h1>
            <ul>
                <NewsList news={latestNews} />
            </ul>

        </>
    )
}