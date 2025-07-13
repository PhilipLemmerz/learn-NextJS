import { DUMMY_NEWS } from "@/dummy-news"

export default function ImagePage({params}) {
    const newsSlug = params.news

    const newsItem = DUMMY_NEWS.find( (news) => news.slug === newsSlug);

    return(
        <>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.slug} />
            </div>
        
        </>
    )
}