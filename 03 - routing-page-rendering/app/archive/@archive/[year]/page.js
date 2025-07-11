import NewsList from "@/components/news-list/news-list"
import { getNewsForYear } from "@/lib/news"

export default function NewsfilteredByYearPage({ params }) {

    const news = getNewsForYear(params.year);

    return (
        <ul className="news-list">
            <NewsList news={news} />
        </ul>
    )
}