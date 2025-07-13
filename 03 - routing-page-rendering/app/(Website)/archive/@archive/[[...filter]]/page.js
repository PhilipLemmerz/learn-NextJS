import NewsList from "@/components/news-list/news-list"
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news"
import Link from "next/link";

export default function NewsfilteredByYearPage({ params }) {

    const filter = params.filter;
    const links = getAvailableNewsYears();
    let news

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];


    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
    }


    let newsContent = <p>No news found selected period</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }


    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map(link => {                            
                            return (
                                <li key={link}><Link href={`/archive/${link}`}>{link}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    )
}